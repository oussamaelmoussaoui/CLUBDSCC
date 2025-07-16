import React from 'react'

export default function ImageSlider({ images = [] }) {
  // duplicate images to create a seamless loop
  const slides = [...images, ...images]
  return (
    <div className="overflow-hidden w-full my-6">
      <div className="flex gap-6 slide-left w-max">
        {slides.map((src, i) => (
          <img key={i} src={src} alt="slide" className="h-64 rounded-lg shadow" />
        ))}
      </div>
    </div>
  )
}
