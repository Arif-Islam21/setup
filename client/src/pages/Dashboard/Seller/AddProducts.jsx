import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                type="text"
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
                type="text"
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
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                placeholder="Seller Email"
                className="input input-bordered"
                {...register("SellerEmail", { required: true })}
              />
              {errors.SellerEmail && (
                <p className="text-red-500 font-bold">
                  SellerEmail Field Is Required
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
