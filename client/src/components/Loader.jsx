import ClimbingBoxLoader from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ClimbingBoxLoader
        color="#56DDC3"
        loading={true}
        // cssOverride={override}
        size={150}
        // aria-label="Loading Spinner"
        // data-testid="loader"
      />
    </div>
  );
};

export default Loader;
