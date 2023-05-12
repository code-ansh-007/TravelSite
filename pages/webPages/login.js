import Head from "next/head";
import React from "react";
import { useState } from "react";
import Header from "../../components/Header";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Head>
        <title>Login | TUC</title>
        <meta
          name="description"
          content="this is the login page of the unorganized camper"
        />
      </Head>
      <Header />
      <main>
        <form className="flex flex-col px-[80px] lg:px-[400px] mt-[130px] sm:mt-[160px]">
          <label htmlFor="name" className="text-gray-500">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-[1px] border-green-400 rounded-lg m-3 h-8"
          />
          <label htmlFor="email" className="text-gray-500">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-[1px] border-green-400  rounded-lg m-3 h-8"
          />
          <label htmlFor="password" className="text-gray-500">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-[1px] border-green-400 rounded-lg m-3 h-8"
          />
          <button
            type="submit"
            className="text-green-600 mt-5 mx-auto hover:scale-105 w-20  bg-green-100 px-2 py-1 rounded-lg transition transform duration-150"
          >
            Register
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
