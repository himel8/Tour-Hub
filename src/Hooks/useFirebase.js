import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Components/Firebase/firebase.init";

// firebase app initialization
initialization();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [successUser, setSuccessUser] = useState(false);
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState(true);
  const [token, setToken] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // register with email
  const registerWithEmail = (email, name, password, location, navigate) => {
    setIsLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});

        setSuccessUser(true);
        const destination = location?.state?.from || "/plans";
        navigate(destination);
        setError("");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setSuccessUser(false);
        // ..
      })
      .finally(() => setIsLoding(false));
  };

  // login with google
  const signInWithGoogle = (location, navigate) => {
    setIsLoding(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName);
        setError("");
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoding(false));
  };

  // login with email
  const loginWithEmail = (email, password, location, navigate) => {
    setIsLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setSuccessUser(false);
        setUser(userCredential.user);
        const destination = location?.state?.from || "/";
        navigate(destination);
        setError("");
        // ...
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoding(false));
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoding(false);
      return unsubscribe;
    });
  }, [auth]);

  // admin useEffect
  useEffect(() => {
    fetch(`https://tourhub123.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data));
  }, [user.email]);

  // log Out
  const logOut = () => {
    setIsLoding(true);
    setSuccessUser(false);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoding(false));
  };

  // save user to database
  const saveUser = (email, username) => {
    const user = { email, username };
    console.log(user);
    fetch("https://tourhub123.herokuapp.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    error,
    isLoding,
    successUser,
    token,
    registerWithEmail,
    signInWithGoogle,
    loginWithEmail,
    logOut,
  };
};

export default useFirebase;
