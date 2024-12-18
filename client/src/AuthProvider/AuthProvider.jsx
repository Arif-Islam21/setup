import { createContext, useEffect, useState } from "react";
import { app } from "../FirebaseConfig/Firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxiosCommon from "../Hooks/useAxiosCommon";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosCommon = useAxiosCommon();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // setLoading(false);
      // console.log(currentUser);
      if (currentUser) {
        axiosCommon
          .post(`https://gadget-shop-server-steel.vercel.app/authentication`, {
            email: currentUser.email,
          })
          .then((data) => {
            if (data.data) {
              localStorage.setItem("accessToken", data?.data?.token);
              setLoading(false);
            }
          });
      } else {
        localStorage.removeItem("accessToken");
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, [axiosCommon]);

  const authInfo = {
    createUser,
    login,
    logOut,
    googleLogin,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
