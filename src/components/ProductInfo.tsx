import StarRatings from "react-star-ratings"
import { useLocation, useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location.state);

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex-1 px-4">
            <div className="flex rounded-3xl bg-white mb-4">
              <img className="w-80 h-80 object-contain rounded-3xl m-auto" src={location.state.image} alt="Product Image" />
            </div>
            <div className="w-1/2 px-2">
              <button className="w-40 bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800" onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-4xl font-bold text-black mb-5">{location.state.title}</h2>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="text-2xl text-black font-bold">${location.state.price}</span>
              </div>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-slate-500" />
              <div>
                <StarRatings
                  rating={location.state.rating.rate}
                  starDimension="25px"
                  starSpacing="5px"
                  starRatedColor="#ffc447"
                  starEmptyColor="gray"
                />
              </div>
            </div>
            <div>
              <span className="font-bold text-black text-2xl">Product Description:</span>
              <p className="text-gray-700 text-lg mt-2">
                {location.state.description}
              </p>
              <div className="flex mt-3 items-center pb-5 border-b-2 border-gray-400 mb-10"></div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
