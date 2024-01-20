import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import api from "components/Api";
import "./index.css";
import Home from "components/Home";
import MasterLayout from "./MasterLayout";
import Product from "components/ProductInfo";
import { setData, setFilterData } from "./redux/productRedux";

function App() {
  const dispatch = useDispatch();
  // const [errmsg, setErrmsg] = useState("");


  async function fetchApi() {
    try {
      const res = await api.get("/products");
      dispatch(setData(res.data));   
      dispatch(setFilterData(res.data));
    } catch (err) {
      // setErrmsg("error");
      console.log("error");
    }
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MasterLayout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
