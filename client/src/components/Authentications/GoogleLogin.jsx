import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="px-6">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-primary btn-outline btn-block text-3xl"
        >
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;
