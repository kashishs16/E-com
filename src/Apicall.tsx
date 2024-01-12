import StarRatings from 'react-star-ratings';

export function Apicall(props: { filteredData: Array<TDetails>, inputValue: string, errmsg: string }) {

  return (
    <> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mx-8">
        {props.filteredData.map((val: TDetails, i) => (
          <div key={i}>
            <div className="bg-white rounded-lg shadow-2xl p-8 border border-solid border-black mb-5">
              <h3 className="text-3xl font-bold text-gray-900 mb-5 overflow-hidden truncate ...">{val.title}</h3>
              <div className="relative overflow-hidden">
                <img className="object-fit w-52 h-60 m-auto mb-4" src={val.image} alt="Product" />
                <div className="flex justify-center mb-2">
                  <StarRatings
                    rating={val.rating.rate}
                    starDimension="30px"
                    starSpacing="5px"
                    starRatedColor="gold"
                  /></div>
              </div>
              <p className="text-gray-500 text-xl mt-2 line-clamp-3">{val.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold text-3xl max-sm:text-2xl">${val.price}</span>
                <button type='button' className="bg-gray-900 text-white text-lg py-2 px-4 w-46 h-14 rounded-full font-bold hover:bg-gray-700 max-sm:w-28 max-sm:h-14 max-sm:text-sm">Add to Cart</button>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </>
  )
}