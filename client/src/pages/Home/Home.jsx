import Banner from "../../components/Home/Banner";
import FeaturedProducts from "../../components/Home/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-8">
        <h1 className="mb-8 text-2xl font-semibold text-center">
          Featured Products
        </h1>
        <FeaturedProducts />
      </div>
    </div>
  );
};

export default Home;
