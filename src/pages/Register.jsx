import React from "react";
import { FormInput , SubmitBtn  } from "../components";
import { Form } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="h-screen grid place-content-center">
    <h4 className="text-center text-3xl font-bold">Register</h4>
    <Form
      method="post"
      className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
    >
       <FormInput
        type="url"
        label='Profile Image Url : '
        name="Photo"
        defaultvalue="https://"
      />
       <FormInput
        type="text"
        label="Display Name : "
        name="displayName"
        defaultvalue="user"
      />
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
        <SubmitBtn text='Register'></SubmitBtn>
      </div>
      <p className="text-center">
        Not a member yet ?
        <Link className="underline capitalize ml-2 text-primary" to="/login">
         Login
        </Link>
      </p>
    </Form>
  </div>  )
}

export default Register