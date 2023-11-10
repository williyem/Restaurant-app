import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../firebase/firestore";
import { useState } from "react";
const useAuth = () => {
  interface signUpProps {
    email: string;
    password: string;
  }

  const [loading, setLoading] = useState(false);

  const signup = async (data: signUpProps, setModalOff: any) => {
    if (!data.email || !data.password) {
      toast.error("email or password required");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("user created successfully");
        setModalOff(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        return toast.error(errorMessage);
        // ..
      })
      .finally(() => setLoading(false));
  };

  const login = async (data: any, setModalOff: any) => {
    if (!data.email || !data.password) {
      toast.error("email or password required");
      return;
    }
    setLoading(true);
    signInWithEmailAndPassword(auth, data?.email, data?.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("user created successfully");
        setModalOff(false);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        return toast.error(errorMessage);
      })
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    signOut(auth)
      .then(() => {
        toast.success("succefully logged out");
        // Sign-out successful.
      })
      .catch((error) => {
        toast.error(" logout failed");
        // An error happened.
      });
  };

  return { signup, loading, login, logout };
};

export default useAuth;
