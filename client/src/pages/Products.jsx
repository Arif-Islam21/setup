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
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniquBrand] = useState([]);
  const [uniqueCategory, setUniqeCategory] = useState([]);
  // console.log({ brand, category, sort });

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      await axios
        .get(
          `http://localhost:4000/all-products?title=${search}&sort=${sort}&brand=${brand}&Category=${category}`
        )
        .then((res) => {
          setProducts(res?.data?.products);
          setUniquBrand(res?.data?.brands);
          setUniqeCategory(res?.data?.categorys);
          setLoading(false);
          console.log(res.data);
        });
    };

    fetch();
  }, [search, sort, brand, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setBrand("");
    setCategory("");
    window.location.reload();
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
      <div className="grid grid-cols-12 ">
        <div className="col-span-2">
          <FilterBar
            setBrand={setBrand}
            handleReset={handleReset}
            setCategory={setCategory}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
          />
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
