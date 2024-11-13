import ProductCard from "../ProductCard";

const FeaturedProducts = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mx-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default FeaturedProducts;
