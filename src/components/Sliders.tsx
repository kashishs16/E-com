
export default function Sliders() {
  return (
      <>
          <div className="font-serif font-semibold italic title text-5xl text-center mt-8">
          Welcome To Our Store
        </div>
        <div className="italic title2 text-xl text-center mt-6">
          We Have Everyting You Need Just On One Click You Get That At Your Home So Stay Connected......
        </div>
        {/* Sliders */}
        <div className="carousel w-full mt-9">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="jewellery2.png" className="w-full h-5/6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle bg-black border-transparent">❮</a>
              <a href="#slide2" className="btn btn-circle bg-black border-transparent">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="electronics1.jpg" className="w-full h-5/6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle bg-slate-900 border-transparent">❮</a>
              <a href="#slide3" className="btn btn-circle bg-slate-900 border-transparent">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="clothes1.png" className="w-full h-5/6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle bg-neutral-600 border-transparent">❮</a>
              <a href="#slide4" className="btn btn-circle bg-neutral-700 border-transparent">❯</a>
            </div>
          </div>
        </div>
      </>
  )
}
