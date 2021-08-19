import { useEffect, useState } from "react";
import firebase from "../firebase";

const useAuthListener = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authListener = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setUser(null);
        setLoading(false);
      } else {
        setUser(user);
        setLoading(false);
      }
    });

    return () => authListener();
  }, []);

  return { user, loading };
};

export { useAuthListener };
