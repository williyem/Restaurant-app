import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firestore";
import toast from "react-hot-toast";

const useRestaurant = () => {
  const createOrder = async (data: any) => {
    try {
      const docRef = await addDoc(collection(db, "order"), data);
      toast.success("Order created successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error creating order ");
    }
  };

  return { createOrder };
};

export default useRestaurant;
