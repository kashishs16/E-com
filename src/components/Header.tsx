import { HiMenuAlt2 } from "react-icons/hi";
import { FaCartArrowDown } from "react-icons/fa";
import Filtering from "./Filtering"
import Searching from "./Searching"

export default function Header(props: { catArr: Array<string>, setSelectedCat: React.Dispatch<React.SetStateAction<string>>, selectedCat: string, filteredData: TDetails[], setFilteredData: React.Dispatch<React.SetStateAction<TDetails[]>>, inputValue: string, setInputValue: React.Dispatch<React.SetStateAction<string>>, setErrmsg: React.Dispatch<React.SetStateAction<string>>, setSearchedValue: React.Dispatch<React.SetStateAction<string>>, searchedValue: string }) {

  return (
    <>
      <div className="header ">
        <div className="navbar bg-slate-900">
          <div className="navbar-start">
            <div className="dropdown flex items-center">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <HiMenuAlt2 className="max-lg:text-3xl text-5xl text-white" />
              </div>
              <Filtering catArr={props.catArr} setSelectedCat={props.setSelectedCat} selectedCat={props.selectedCat} setInputValue={props.setInputValue} inputValue={props.inputValue} setSearchedValue={props.setSearchedValue} searchedValue={props.searchedValue} filteredData={props.filteredData}  />
            </div>
          </div>
          <div className="navbar-center">
            <a className="flex font-serif italic font-bold text-4xl max-lg:text-2xl max-md:text-2xl max-sm:text-xl text-yellow-500 hover:opacity-75" href="/">
              <img src="logo1.png" className="object-left-top object-scale-down h-45 w-20" />
              <div className="lg:mt-1 max-sm:mt-3 max-md:mt-2 max-lg:mt-2">
                KSC PALACE
              </div>
            </a>
          </div>
          <div className="navbar-end flex items-center">
            <Searching filteredData={props.filteredData} setFilteredData={props.setFilteredData} inputValue={props.inputValue} setInputValue={props.setInputValue} setErrmsg={props.setErrmsg} setSearchedValue={props.setSearchedValue} searchedValue={props.searchedValue} />
            <button className="btn btn-ghost btn-circle">
              <FaCartArrowDown className="text-4xl text-white max-lg:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
