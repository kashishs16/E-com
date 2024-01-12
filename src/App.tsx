import { useEffect, useState } from "react";
import { Apicall } from "./Apicall";
import api from "components/Api";
import Header from "./components/Header"
import "./index.css";
import Sliders from "components/Sliders";
import Footer from "components/Footer";

function App() {
  const [data, setData] = useState<Array<TDetails>>([{
    id: 0,
    price: 0,
    image: "",
    category: "",
    title: "",
    description: "",
    rating: {
      rate: 0,
      count: 0,
    }
  }]);
  const [catArr, setCatArr] = useState([""]);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedCat, setSelectedCat] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [errmsg, setErrmsg] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  // console.log(input);

  async function fetchApi() {
    try {
      const res = await api.get("/products");
      setData(res.data);
      setSelectedCat("all products");

      const arrCat: Array<string> = ["all products"]
      res.data.forEach((val: TDetails) => {
        arrCat.push(val.category);
      })

      const newCat = [...new Set(arrCat)];
      setCatArr(newCat);

    } catch (err) {
      setErrmsg("error");
      console.log("error");
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])

  useEffect(() => {
    const arrObj: TDetails[] = []
    data.forEach((val) => {
      if (val.category === selectedCat) {
        arrObj.push(val);
      } else if (selectedCat === "all products") {
        arrObj.push(val);
      }
    })
    setFilteredData(arrObj);
  }, [selectedCat, searchedValue])

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-300 to-indigo-100 ...">
        <Header catArr={catArr} setSelectedCat={setSelectedCat} selectedCat={selectedCat} filteredData={filteredData} setFilteredData={setFilteredData} inputValue={inputValue} setInputValue={setInputValue} setErrmsg={setErrmsg} setSearchedValue={setSearchedValue} searchedValue={searchedValue} />
        <Sliders />
        <Apicall filteredData={filteredData} inputValue={inputValue} errmsg={errmsg} />
        <Footer />
      </div>
    </>
  );
} 

export default App;
