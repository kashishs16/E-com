import { useEffect } from "react"
import { FiSearch } from "react-icons/fi";

const Searching = (props: { filteredData: TDetails[], setFilteredData: React.Dispatch<React.SetStateAction<TDetails[]>>, inputValue: string, setInputValue: React.Dispatch<React.SetStateAction<string>>, setErrmsg: React.Dispatch<React.SetStateAction<string>>, setSearchedValue: React.Dispatch<React.SetStateAction<string>>, searchedValue: string }) => {
  // const [input, setInput] = useState("");

  useEffect(() => {
    const arrObj: TDetails[] = []
    props.filteredData.forEach((val) => {
      if (val.title.toLowerCase().search(props.searchedValue.toLowerCase()) !== -1) {
        arrObj.push(val);
      }
    })
    props.setFilteredData(arrObj);
  }, [props.searchedValue])
  // console.log(props.inputValue);

  const searchTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.setSearchedValue(props.inputValue);
    }
  }

  return (
    <>
      <input type="text" list="titles" placeholder="Search items here..." className="rounded-3xl mr-2 sm:h-12 w-32 mr-0 lg:w-52 h-8 xl:w-72 hidden lg:block md:block" onKeyDown={(e) => searchTitle(e)} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(e.target.value);
      }} />
      <button className="flex btn btn-ghost btn-circle hidden lg:block md:block md:justify-end">
        <FiSearch className="max-lg:text-3xl text-4xl text-white" />
      </button>
      <datalist id="titles">
        {
          props.filteredData.map((val) => {
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