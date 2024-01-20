import { HiMenuAlt2 } from "react-icons/hi";
import { FaCartArrowDown } from "react-icons/fa";
import Filtering from "./ProductFiltering"
import Searching from "./ProductSearching"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productData, setFilterData } from "../redux/productRedux";

export default function Header() {
  const dispatch = useDispatch();
  const data = useSelector(productData);
  const [catArr, setCatArr] = useState([""]);
  const [selectedCat, setSelectedCat] = useState("");
  // const [inputValue, setInputValue] = useState("");
  // const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    setSelectedCat("all products");
    const arrCat: Array<string> = ["all products"]

    data.forEach((val: TDetails) => {
      arrCat.push(val.category);
    })

    const newCat = [...new Set(arrCat)];
    setCatArr(newCat);
  }, [])
  
  useEffect(() => {
    const arrObj: TDetails[] = []  
    data.forEach((val: TDetails) => {
      if (val.category === selectedCat) {
        arrObj.push(val);
      } else if (selectedCat === "all products") {
        arrObj.push(val);
      }
    })
    dispatch(setFilterData(arrObj)); 
  }, [selectedCat])

  return (
    <>
      <div className="header ">
        <div className="navbar bg-slate-900">
          <div className="navbar-start">
            <div className="dropdown flex items-center">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <HiMenuAlt2 className="max-lg:text-3xl text-5xl text-white" />
              </div>
              <Filtering catArr={catArr} selectedCat={selectedCat} setSelectedCat={setSelectedCat} />
            </div>
          </div>
          <div className="navbar-center">
            <Link to={"/"}>
              <div className="flex flex-row font-serif italic font-bold text-4xl max-lg:text-2xl max-md:text-2xl max-sm:text-xl text-yellow-500 hover:opacity-75">
                <img src="logo1.png" className="object-left-top object-scale-down h-45 w-20" />
                <div className="lg:mt-1 max-sm:mt-3 max-md:mt-2 max-lg:mt-2">
                  KSC PALACE
                </div>
              </div>
            </Link>
          </div>
          <div className="navbar-end flex items-center">
            <Searching />
            <button className="btn btn-ghost btn-circle">
              <FaCartArrowDown className="text-4xl text-white max-lg:text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
