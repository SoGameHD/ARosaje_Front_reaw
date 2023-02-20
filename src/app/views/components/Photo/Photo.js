import React, { useState, useEffect, useRef } from 'react'

// Todo: Faire une vue uniquement pour la prise de photo
const PlantPhotoTaker = () => {
  const [mediaStream, setMediaStream] = useState(null)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        setMediaStream(stream)
      })
      .catch((error) => {
        console.error('Error accessing camera:', error)
      })
  }, [])

  useEffect(() => {
    if (mediaStream && videoRef.current) {
      videoRef.current.srcObject = mediaStream
      videoRef.current.play()
    }
  }, [mediaStream])

  function handleTakePhoto() {
    const context = canvasRef.current.getContext('2d')
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)

    // Todo : Finir pour lié avec l'API backend)
  }

  return (
    <div>
      <video ref={videoRef} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={handleTakePhoto}>Prendre une photo</button>
    </div>
  )
}

export default PlantPhotoTaker
