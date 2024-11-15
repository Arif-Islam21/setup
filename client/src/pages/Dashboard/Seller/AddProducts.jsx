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
                <span className="label-text">Email</span>
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
