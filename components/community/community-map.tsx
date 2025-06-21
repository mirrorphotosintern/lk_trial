"use client"

import { Community } from "@/types/community-types"
import { useState, useCallback, useEffect } from "react"
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow
} from "@react-google-maps/api"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const containerStyle = {
  width: "100%",
  height: "600px"
}

const defaultCenter = {
  lat: 20,
  lng: 0
}

interface CommunityMapProps {
  communities: Community[]
}

interface CommunityWithLocation extends Community {
  location: {
    lat: number
    lng: number
  }
}

export default function CommunityMap({ communities }: CommunityMapProps) {
  const [selectedCommunity, setSelectedCommunity] =
    useState<CommunityWithLocation | null>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)
  const [communitiesWithLocations, setCommunitiesWithLocations] = useState<
    CommunityWithLocation[]
  >([])

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""
  })

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const geocodeLocation = async (community: Community) => {
    try {
      const geocoder = new google.maps.Geocoder()
      const result = await geocoder.geocode({
        address: `${community.city}, ${community.country}`
      })

      if (result.results[0]) {
        const location = result.results[0].geometry.location
        return {
          lat: location.lat(),
          lng: location.lng()
        }
      }
    } catch (error) {
      console.error("Error geocoding location:", error)
    }
    return null
  }

  // Geocode all locations on mount
  useEffect(() => {
    if (!isLoaded) return

    const geocodeAllLocations = async () => {
      const locations = await Promise.all(
        communities.map(async community => {
          const location = await geocodeLocation(community)
          if (location) {
            return { ...community, location } as CommunityWithLocation
          }
          return null
        })
      )

      // Filter out any communities that couldn't be geocoded
      const validLocations = locations.filter(
        (loc): loc is CommunityWithLocation => loc !== null
      )
      setCommunitiesWithLocations(validLocations)
    }

    geocodeAllLocations()
  }, [communities, isLoaded])

  if (!isLoaded) {
    return (
      <div className="bg-muted h-[600px] w-full animate-pulse">
        <div className="flex h-full items-center justify-center">
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={1.5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#6c7075" }]
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }]
            }
          ],
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false
        }}
      >
        {communitiesWithLocations.map(community => (
          <Marker
            key={`${community.city}-${community.country}`}
            position={community.location}
            onClick={() => setSelectedCommunity(community)}
            title={community.organization}
          />
        ))}

        {selectedCommunity && (
          <InfoWindow
            position={selectedCommunity.location}
            onCloseClick={() => setSelectedCommunity(null)}
          >
            <div className="p-2">
              <h3 className="font-semibold">
                {selectedCommunity.organization}
              </h3>
              <p className="text-sm text-gray-600">
                {selectedCommunity.city}, {selectedCommunity.country}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => window.open(selectedCommunity.website, "_blank")}
              >
                Visit Website
                <ExternalLink className="ml-2 size-4" />
              </Button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

      {selectedCommunity && (
        <Card className="absolute inset-x-4 bottom-4 p-4 shadow-lg">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">
                {selectedCommunity.organization}
              </h3>
              <p className="text-muted-foreground text-sm">
                {selectedCommunity.city}, {selectedCommunity.country}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(selectedCommunity.website, "_blank")}
            >
              Visit Website
              <ExternalLink className="ml-2 size-4" />
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
