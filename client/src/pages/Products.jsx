import { useEffect, useState } from "react";
import FilterBar from "../components/Products/FilterBar";
import SearchBar from "../components/SearchBar";
import SortByPrice from "../components/SortByPrice";
import axios from "axios";
import Loader from "../components/Loader";
import NoProductPage from "../components/NoProductPage";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");
  console.log(sort);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      await axios.get(`http://localhost:4000/all-products`).then((res) => {
        setProducts(res.data);
        setLoading(false);
      });
    };

    fetch();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  return (
    <div className="container mx-auto">
      <h1 className="my-6 text-3xl font-bold text-center">All Products</h1>
      {/* SEARCHING AND SORTING */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      {/* CONTENT GOES HERE */}
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <FilterBar />
        </div>
        <div className="col-span-10">
          {/* PRODUCTS */}
          {loading ? (
            <Loader />
          ) : (
            <>
              {products.length === 0 ? (
                <NoProductPage />
              ) : (
                <div className=" px-4 grid grid-cols-3 gap-4">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
