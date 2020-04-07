import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase/firebaseConfig";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("user autenticado...");
        router.push("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  useEffect(() => {
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <div className="bg-gray-300 w-screen h-screen ">
      <div className="px-8 py-12 max-w-sm mx-auto sm:max-w-md lg:max-w-xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="label" htmlFor="email">
              Correo
            </label>
            <input
              className="input"
              id="email"
              type="email  "
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
              required
            />
          </div>
          <p className="text-red-500 text-xs italic mb-3">{error}</p>
          <div className="flex items-center justify-between">
            <button className="btn btn-blue font-bold py-2 px-4" type="submit">
              Sing In
            </button>
            <a href="#">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
