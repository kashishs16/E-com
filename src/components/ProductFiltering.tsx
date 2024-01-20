
const Filtering = (props: { catArr: string[], selectedCat: string, setSelectedCat: React.Dispatch<React.SetStateAction<string>>}) => {
  
  return (
    <>
      <div className="lg:ml-5 sm:ml-0 text-md font-bold capitalize lg:text-2xl md:text-xl text-white font-serif hidden lg:block md:block">
        {props.selectedCat}
      </div>
      <ul tabIndex={0} className="block mt-[23.0rem] bg-gradient-to-r from-blue-300 to-blue-100 ... menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60 max-md:mt-[29rem] max-sm:mt-[29rem]">
        <li className="capitalize font-bold text-xl xl:hidden lg:hidden md:hidden sm:block">Searched for "
          {props.selectedCat}
          "</li>
        {/* <li><div className="flex text-center">
          <input type="text" list="titles" placeholder="Search items here..." className="rounded-3xl w-48 h-10 lg:hidden md:hidden sm:block " onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.setInputValue(e.target.value);
          }} onKeyDown={searchTitle} />
        </div></li>
        <datalist id="titles">
          {
            props.filteredDataArray.map((val) => 
               (
                <option key={val.id} value={val.title}></option>
              )
            )
          }
        </datalist> */}
        {
          props.catArr.map((val, i) => {
            return (
              <div key={i}>
                <li onClick={() => props.setSelectedCat(val)} className="capitalize"><a>{val}</a></li>
              </div>
            )
          })
        }
      </ul>
    </>
  )

}

export default Filtering