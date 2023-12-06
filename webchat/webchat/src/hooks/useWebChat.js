import {
    addDoc,
    collection,
    onSnapshot,
    orderBy,
    query,
  } from "firebase/firestore";
  import { useState } from "react";
  import { useReducer } from "react";
  import { db } from "../main";
  
  export const useWebChat = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    const getMessages = async () => {
      try {
        const res = await query(
          collection(db, "webchat"),
          orderBy("fecha", "asc")
        );
  
        return onSnapshot(res, (querySnapshot) => {
          setData(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        });
      } catch (error) {
        setError("Error al cargar productos");
      } finally {
        setLoading(false);
      }
    };
  
    const storeNewMessage = async (product) => {
      try {
        setLoading(true);
        const res = await addDoc(collection(db, "webchat"), product);
        return res;
      } catch (error) {
        throw new Error("Error al guardar producto");
      } finally {
        setLoading(false);
      }
    };
  
    return { data, error, loading, getMessages, storeNewMessage };
  };
  