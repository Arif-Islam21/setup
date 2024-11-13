const Banner = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404179.jpg?t=st=1731515539~exp=1731519139~hmac=a7a972c74afff3abf9d105924a33229c6a1eb24562243d0e9060747ec5f6955f&w=826)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome To Gadget shop</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
