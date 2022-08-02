import { useEffect, useState } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `https://pacific-castle-49013.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};
export default useInventory;
