export interface Community {
  organization: string
  website: string
  city: string
  country: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface CommunityMapProps {
  communities: Community[]
}
