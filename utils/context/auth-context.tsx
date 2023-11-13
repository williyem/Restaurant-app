"use client";
import { onAuthStateChanged } from "firebase/auth";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

const AuthContext = createContext<any>(null);

interface signUpProps {
  email: string;
  password: string;
  name: string;
  phone: string;
}

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const user = auth.currentUser;
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth state changed");
      if (currentUser) {
        const uid = currentUser?.uid;
        const displayName = currentUser?.displayName;
        const email = currentUser?.email;
        const emailVerified = currentUser?.emailVerified;

        setCurrentUser({ displayName, email, emailVerified, uid });
      } else {
        console.log("not logged in");
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (data: signUpProps, setModalOff: any) => {
    if (!data.email || !data.password || !data.name) {
      toast.error("user credential(s) is missing");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const newUser = userCredential?.user;
        updateUser(newUser, data);
      })
      .then((response) => {
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
        // console.log("user login", userCredential);
        toast.success("welcome back");
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
        setCurrentUser(null);
      })
      .catch((error) => {
        toast.error(" logout failed");
        // An error happened.
      });
  };

  const updateUser = async (user: any, data: any) => {
    updateProfile(user, {
      displayName: data.name,
      // phoneNumber: data.phone,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        toast.error("error setting your user name");
        // ...
      });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        signup,
        loading,
        authLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthContext = () => useContext(AuthContext);
