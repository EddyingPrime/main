import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"
import { Link } from 'react-router-dom';

export default function Carousel({ 
  children: slides, 
  autoSlide =false, 
  autoSlideInterval = 3000, 
}) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
      <main className="overflow-hidden relative h-[770px]">
        <div className="flex transition-transform ease-in-out duration-1000" style={{ transform: `translateX(-${curr * 100}%)`}}>
        {slides.map((slide, index) => (
          <div key={index} style={{ minWidth: "100%" }}>
            {slide}
          </div>
        ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full text-gray-800 hover:text-accent" aria-label="Previous">
            <ChevronLeft size={40} />
          </button>
          <button onClick={next} className="p-1 rounded-full text-gray-800 hover:text-accent" aria-label="Next">
            <ChevronRight size={40} />
          </button>
          <div className="absolute flex ml-40 mt-96 w-fit rounded bg-dark bg-opacity-40 p-6 , hover:bg-dark hover:bg-opacity-75 hover:p-6 hover:rounded">
            <div className="text-center">
              <h1 className="text-accent text-4xl font-bold drop-shadow font-Titilium">EXPLORE A HUGE LIBRARY OF FREE GAMES</h1>
              <p className="text-default text-xl mt-4"><em>"Explore and Connect. Your Gateway to Free Games and building a community."</em></p><br />
              <Link className="text-accent font-Titilium text-xl hover:border-b" to="/games">Browse Now!</Link>
            </div>
          </div>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
                <div key={i} className={`transition-all w-2 h-2 bg-accent rounded-full
                  ${curr === i ? "p-2": "bg-opacity-50"}
                  `} />
                ))}
            </div>
          </div>
        </div>
      </main>
  )
};