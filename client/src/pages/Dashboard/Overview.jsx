import useAuth from "../../Hooks/useAuth";

const Overview = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-xl font-bold">{user.email}</h1>
    </div>
  );
};

export default Overview;
