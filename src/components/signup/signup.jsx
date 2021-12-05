import React from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../button/button";

import { auth, createUserProfileDocument } from "../../firebase/firebase-util";
import { useState } from "react/cjs/react.development";

import "./signup.scss";
const Signup = () => {
  const [data, setdata] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
      console.log(e.target.value)
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = data;

    if (password !== confirmPassword) {
      alert("password not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });

      setdata({
        displayname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="signup">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={data.displayName|| ''}
          label="Display Name"
          required
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          value={data.email|| ''}
          label="Email"
          required
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="password"
          required
          label="Password"
          value={data.password || ''}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="confirmPassword"
          required
          label="Confirm Password"
          value={data.confirmPassword|| ''}
          onChange={handleChange}
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
