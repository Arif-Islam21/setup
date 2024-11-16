import { MdOutlineEventAvailable } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbBrandAppgallery } from "react-icons/tb";
import { IoPricetagsOutline } from "react-icons/io5";

/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          // src="https://img.freepik.com/premium-photo/virtual-reality-glasses-tablet-with-headphones-gray-background-top-view_157927-7597.jpg?w=826"
          src={product?.photoURL}
          alt={product?.brand}
          className="h-40 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold uppercase">{product?.title}</h2>
        <div className="flex justify-between ">
          <p className="font-semibold flex items-center gap-2">
            <TbBrandAppgallery size={20} /> {product?.brand}
          </p>
          <p className="justify-end flex items-center gap-2">
            <IoPricetagsOutline size={20} /> {product?.priceInt}
          </p>
        </div>
        <div className="flex justify-between ">
          <p className="font-semibold flex items-center gap-2">
            <MdOutlineEventAvailable size={20} /> {product?.stockInt}
          </p>
          <p className="justify-end flex items-center gap-2">
            <BiSolidCategoryAlt size={20} /> {product?.stockInt}
          </p>
        </div>
        <p className="font-bold text-sm">{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
