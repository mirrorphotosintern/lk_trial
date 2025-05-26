"use client"
import { useEffect, useRef, useState } from "react"
import confetti from "canvas-confetti"

interface LetterTraceProps {
  src: string
  onDone?: () => void
  onError?: () => void
  onLoad?: () => void
  strokeWidth?: number
  tolerance?: number
}

export default function LetterTrace({
  src,
  onDone,
  onError,
  onLoad,
  strokeWidth = 2,
  tolerance = 10
}: LetterTraceProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [svgContent, setSvgContent] = useState<string>()
  const [isDrawing, setIsDrawing] = useState(false)
  const [coverage, setCoverage] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const letterCanvasRef = useRef<HTMLCanvasElement>(null) // New canvas to store the letter pixels

  // Load the SVG and set up the canvases
  useEffect(() => {
    console.log("[LetterTrace] Fetching SVG from:", src)

    fetch(src)
      .then(r => {
        if (!r.ok)
          throw new Error(`Failed to load SVG: ${r.status} ${r.statusText}`)
        return r.text()
      })
      .then(text => {
        if (!text.includes("<svg")) {
          throw new Error("Invalid SVG format: not an SVG file")
        }

        // Use the SVG content as is, without any modifications
        setSvgContent(text)

        // Set up both canvases
        const setupCanvas = (canvas: HTMLCanvasElement | null) => {
          if (canvas && containerRef.current) {
            const containerWidth = containerRef.current.clientWidth
            canvas.width = 512
            canvas.height = 512
            canvas.style.width = `${containerWidth}px`
            canvas.style.height = `${containerWidth}px`
          }
        }

        setupCanvas(canvasRef.current)
        setupCanvas(letterCanvasRef.current)

        // Set up drawing canvas
        const ctx = canvasRef.current?.getContext("2d")
        if (ctx) {
          ctx.strokeStyle = "#3b82f6"
          ctx.lineWidth = strokeWidth
          ctx.lineCap = "round"
          ctx.lineJoin = "round"
        }

        // Render the SVG to the letter canvas to get the black pixels
        const letterCtx = letterCanvasRef.current?.getContext("2d")
        if (letterCtx) {
          // Clear the canvas
          letterCtx.clearRect(0, 0, 512, 512)

          // Create a temporary image from the SVG
          const img = new Image()
          const svgBlob = new Blob([text], { type: "image/svg+xml" })
          const url = URL.createObjectURL(svgBlob)

          img.onload = () => {
            letterCtx.drawImage(img, 0, 0, 512, 512)
            URL.revokeObjectURL(url)
          }
          img.src = url
        }

        onLoad?.()
      })
      .catch(error => {
        console.error("[LetterTrace] Error loading SVG:", error)
        onError?.()
      })
  }, [src, onError, onLoad, strokeWidth])

  // Function to check coverage of the letter
  const checkCoverage = () => {
    const canvas = canvasRef.current
    const letterCanvas = letterCanvasRef.current
    if (!canvas || !letterCanvas) return

    const ctx = canvas.getContext("2d")
    const letterCtx = letterCanvas.getContext("2d")
    if (!ctx || !letterCtx) return

    // Get the image data from both canvases
    const drawingData = ctx.getImageData(0, 0, 512, 512)
    const letterData = letterCtx.getImageData(0, 0, 512, 512)

    let totalLetterPixels = 0
    let coveredPixels = 0

    // Compare pixels between the two canvases
    for (let i = 0; i < drawingData.data.length; i += 4) {
      // Check if this is a black pixel in the letter (R, G, B all close to 0)
      const isLetterPixel =
        letterData.data[i] < 50 &&
        letterData.data[i + 1] < 50 &&
        letterData.data[i + 2] < 50

      if (isLetterPixel) {
        totalLetterPixels++
        // Check if this pixel is covered by the blue drawing
        if (drawingData.data[i + 3] > 0) {
          // If the pixel is not transparent
          coveredPixels++
        }
      }
    }

    const newCoverage =
      totalLetterPixels > 0 ? (coveredPixels / totalLetterPixels) * 100 : 0

    setCoverage(newCoverage)

    // If coverage is high enough, trigger completion
    if (newCoverage >= 95 && !isComplete) {
      setIsComplete(true)
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
      // Call onDone immediately to move to next letter
      onDone?.()
    }
  }

  // Drawing handlers
  const startDrawing = (e: React.PointerEvent) => {
    if (isComplete) return
    setIsDrawing(true)
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const rect = canvas.getBoundingClientRect()
    const scale = canvas.width / rect.width
    const x = (e.clientX - rect.left) * scale
    const y = (e.clientY - rect.top) * scale

    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.PointerEvent) => {
    if (!isDrawing || isComplete) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const rect = canvas.getBoundingClientRect()
    const scale = canvas.width / rect.width
    const x = (e.clientX - rect.left) * scale
    const y = (e.clientY - rect.top) * scale

    ctx.lineTo(x, y)
    ctx.stroke()

    // Check coverage periodically while drawing
    if (Math.random() < 0.1) {
      checkCoverage()
    }
  }

  const stopDrawing = () => {
    if (!isDrawing) return
    setIsDrawing(false)
    checkCoverage()
  }

  if (!svgContent) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-muted-foreground">Loading letter...</div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-[512px]">
      <div className="relative w-full" style={{ paddingBottom: "100%" }}>
        {/* Hidden canvas for letter pixels */}
        <canvas
          ref={letterCanvasRef}
          className="absolute inset-0 size-full"
          style={{ display: "none" }}
        />

        {/* SVG layer showing the letter */}
        <svg
          ref={svgRef}
          viewBox="0 0 512 512"
          className="absolute inset-0 size-full"
          style={{ zIndex: 1 }}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />

        {/* Canvas layer for drawing */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 size-full"
          style={{ zIndex: 2 }}
          onPointerDown={startDrawing}
          onPointerMove={draw}
          onPointerUp={stopDrawing}
          onPointerLeave={stopDrawing}
        />
      </div>

      {/* Progress display */}
      <div className="text-muted-foreground mt-4 text-center text-sm">
        {isComplete ? (
          <span className="text-green-600">
            Great job! Moving to next letter...
          </span>
        ) : (
          <span>Coverage: {Math.round(coverage)}%</span>
        )}
      </div>
    </div>
  )
}
