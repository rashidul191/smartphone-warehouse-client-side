import { useEffect, useState } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://smartphone-warehouse-server.onrender.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useInventory;
