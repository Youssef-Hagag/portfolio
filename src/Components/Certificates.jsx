import React, { useState } from "react"
import CertificateCard from "./CertificateCard"
import data from "./data.json"
import "primeicons/primeicons.css"

export default function Certificates() {
  const { certificates } = data
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [prevIndex, setPrevIndex] = useState(certificates.length - 1)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex - 1
    setIndices(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === certificates.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setIndices(newIndex)
  }

  const setIndices = (newIndex) => {
    setCurrentIndex(newIndex)
    setPrevIndex(newIndex === 0 ? certificates.length - 1 : newIndex - 1)
    setNextIndex(newIndex === certificates.length - 1 ? 0 : newIndex + 1)
  }

  return (
    <div className="relative mx-auto h-[500px] w-[300px] sm:w-[500px]">
      {/* Arrows */}
      <button onClick={goToPrevious} className="absolute -left-[100px] -bottom-20 z-10 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-2xl text-white hover:bg-gray-700">
        <i className="pi pi-arrow-left"></i>
      </button>
      <button onClick={goToNext} className="absolute -right-[100px] -bottom-20 z-10 -translate-y-1/2 transform rounded-full bg-gray-800 p-2 text-2xl text-white hover:bg-gray-700">
        <i className="pi pi-arrow-right"></i>
      </button>

      {/* Carousel items */}
      <div className="mt-30 flex h-full items-center justify-center">
        <div className="relative h-full w-full">
          {certificates.map((certificate, index) => {
            let positionClass = "opacity-0 -z-10"

            if (index === currentIndex) {
              positionClass = "opacity-100 transform translate-x-0"
            } else if (index === prevIndex) {
              positionClass = "opacity-40 transform -translate-x-full"
            } else if (index === nextIndex) {
              positionClass = "opacity-40 transform translate-x-full"
            }

            return (
              <div key={index} className={`absolute top-0 h-full w-full transition-all duration-500 ${positionClass}`}>
                <CertificateCard {...certificate} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Currently Selected */}
      <div className="absolute -bottom-10 left-[40%] flex justify-center space-x-2">
        {certificates.map((_, index) => (
          <div key={index} className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"} cursor-pointer`} onClick={() => setIndices(index)}></div>
        ))}
      </div>
    </div>
  )
}
