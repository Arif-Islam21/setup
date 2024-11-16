const Products = () => {
  return (
    <div className="container mx-auto">
      <h1 className="my-6 text-3xl font-bold text-center">All Products</h1>
      {/* SEARCHING AND SORTING */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <h1>Search Bar</h1>
        <h1>Sorting</h1>
      </div>
      {/* CONTENT GOES HERE */}
      <div className="grid grid-cols-12">
        <div className="col-span-2">Filter Bar</div>
        <div className="col-span-10">Products</div>
      </div>
    </div>
  );
};

export default Products;
