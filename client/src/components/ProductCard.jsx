const ProductCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.freepik.com/premium-photo/virtual-reality-glasses-tablet-with-headphones-gray-background-top-view_157927-7597.jpg?w=826"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
