import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddProducts = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { Category, Stock, photoURL, brand, description, price, title } =
      data;
    const sellerEmail = user?.email;
    const stockInt = parseFloat(Stock);
    const priceInt = parseFloat(price);

    const product = {
      Category,
      brand,
      description,
      stockInt,
      title,
      priceInt,
      sellerEmail,
      photoURL,
    };
    const token = localStorage.getItem("accessToken");
    axios
      .post(
        "https://gadget-shop-server-steel.vercel.app/add-products",
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added succesfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1 className="text-2xl mb-6 font-bold text-center">Add Products</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 font-bold">
                  Title Field Is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <input
                type="text"
                placeholder="Brand"
                className="input input-bordered"
                {...register("brand", { required: true })}
              />
              {errors.brand && (
                <p className="text-red-500 font-bold">
                  Brand Field Is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                step={0.1}
                placeholder="Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
              {errors.price && (
                <p className="text-red-500 font-bold">
                  price Field Is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Stock</span>
              </label>
              <input
                type="number"
                placeholder="Stock"
                className="input input-bordered"
                {...register("Stock", { required: true })}
              />
              {errors.Stock && (
                <p className="text-red-500 font-bold">
                  Stock Field Is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="Category"
                className="input input-bordered"
                {...register("Category", { required: true })}
              />
              {errors.Category && (
                <p className="text-red-500 font-bold">
                  Category Field Is Required
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <p className="text-red-500 font-bold">
                  photoURL Field Is Required
                </p>
              )}
            </div>
            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Description"
                {...register("description", { required: true })}
              ></textarea>
              {errors.description && (
                <p className="text-red-500 font-bold">
                  Description Field Is Required
                </p>
              )}
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
