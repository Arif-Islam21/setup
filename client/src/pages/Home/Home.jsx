import Banner from "../../components/Home/Banner";
import FeaturedProducts from "../../components/Home/FeaturedProducts";
import UserReview from "../../components/Home/UserReview";

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
      <div className="my-8">
        <h1 className="mb-8 text-2xl font-semibold text-center">User Review</h1>
        <UserReview />
      </div>
    </div>
  );
};

export default Home;
