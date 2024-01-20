import { useEffect, useState } from "react"
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { filteredData, setFilterData } from "../redux/productRedux";

const Searching = () => {
  // const [input, setInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const data = useSelector(filteredData);
  const dispatch = useDispatch();


  useEffect(() => {
    const arrObj: TDetails[] = []
    data.forEach((val: TDetails) => {
      if (val.title.toLowerCase().search(searchedValue.toLowerCase()) !== -1) {
        arrObj.push(val);
      }
    })
    dispatch(setFilterData(arrObj));
  }, [searchedValue])
  // console.log(props.inputValue);

  const searchTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchedValue(inputValue);
    }
  }

  return (
    <>
      <input type="text" list="titles" placeholder="Search items here..." className="rounded-3xl mr-2 sm:h-12 w-32 mr-0 lg:w-52 h-8 xl:w-72 hidden lg:block md:block" onKeyDown={(e) => searchTitle(e)} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      }} />
      <button className="flex btn btn-ghost btn-circle hidden lg:block md:block md:justify-end">
        <FiSearch className="max-lg:text-3xl text-4xl text-white" />
      </button>
      <datalist id="titles">
        {
          data.map((val: TDetails) => {
            return (
              <option key={val.id} value={val.title}></option>
            )
          })
        }
          </datalist>
    </>
  )
}

export default Searching