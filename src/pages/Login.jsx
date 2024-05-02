import React from "react";
import { FormInput , SubmitBtn  } from "../components";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen grid place-content-center">
      <h4 className="text-center text-3xl font-bold">Login</h4>
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <FormInput
          type="email"
          label="Email:"
          name="email"
          defaultvalue="test1@gmail.com"
        />
        <FormInput
          type="password"
          label="Password:"
          name="password"
          defaultvalue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text=''></SubmitBtn>
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          Guest User
        </button>
        <p className="text-center">
          Not a member yet ?
          <Link className="underline capitalize ml-2 text-primary" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </div>
  );
}

export default Login;
