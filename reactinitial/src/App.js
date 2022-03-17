import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Laptop from "./components/Laptop";
import Header from "./components/Header";

const url = "https://demoapi.com/api/laptop";

const fetchData = async () => {
  const res = await fetch(url);
  return res.json();
};

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setData(data);
      setLoading(false);
    });
  }, []);

  const createCard = (laptop, index) => {
    return (
      <Laptop
        key={index}
        name={laptop.name}
        brand={laptop.brand}
        weigth={laptop.weigth}
      />
    );
  };

  return (
    <div>
      <h1>Laptops </h1>
      <Header />
      <div>{loading ? <LoadingMask /> : data.map(createCard)}</div>
    </div>
  );
};

export default App;
