import StarRatings from 'react-star-ratings';
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { filteredData } from '../redux/productRedux';

export function ProductListing() {
  const data = useSelector(filteredData);
  const navigate = useNavigate();
  // console.log(data);
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-8">
        {data.map((val: TDetails) => (
          <div key={val.id} className="bg-white rounded-lg shadow-2xl p-8 border border-solid border-black mb-5" onClick={() => navigate("/products", { state: val })}>
              <h3 className="text-3xl font-bold text-gray-900 mb-5 overflow-hidden truncate ...">{val.title}</h3>
              <div className="relative overflow-hidden">
                <img className="w-52 h-60 object-contain m-auto mb-4" src={val.image} alt="Product" />
                <div className="flex justify-center mb-2">
                  <StarRatings
                    rating={val.rating.rate}
                    starDimension="30px"
                    starSpacing="5px"
                    starRatedColor="#ffc447"
                    starEmptyColor="gray"
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <span className="text-gray-900 m-auto font-bold text-3xl max-sm:text-2xl">${val.price}</span>
              </div>
              <p className="text-gray-500 text-xl mt-2 line-clamp-3 mb-5">{val.description}</p>
              <button className="w-full bg-gray-900 mb-4 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
              <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Buy Now</button>
            </div>
        ))
        }
      </div>
    </>
  )
}