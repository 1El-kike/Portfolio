import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  A,
  Body,
  Borderline,
  DivFirst,
  DivSubmit,
  Formulario,
  H2,
  I,
  Input,
  InputBox,
  Links,
  Spanuser,
  Submit,
} from "./styles";

export const RegistroUsuario = () => {
  /* const [user, setuser] = useState("");
  const [password, setpassword] = useState(""); */

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    //e.preventDefault();
    //  console.log({ user, password });
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  return (
    <Body>
      <DivFirst>
        <Borderline></Borderline>
        <Formulario onSubmit={handleSubmit(onSubmit)} action="">
          <H2>Sign in</H2>
          <InputBox>
            <Input
              type="text"
              /* onChange={(e) => setuser(e.target.value)}
              value={user} */
              required="required"
              {...register("user")}
            ></Input>
            <Spanuser>Username</Spanuser>
            <I></I>
          </InputBox>
          <InputBox>
            <Input
              type="password"
              /*  onChange={(e) => setpassword(e.target.value)}
              value={password} */
              required="required"
              {...register("password")}
            ></Input>
            <Spanuser>Password</Spanuser>
            <I></I>
          </InputBox>

          <Links class="links">
            <Link style={{ margin: "40px 0" }} to="#">
              <A>Forgot Password</A>
            </Link>
            <Link style={{ margin: "40px 0" }} to="/">
              <A>Singnup</A>
            </Link>
          </Links>
          <DivSubmit>
            <Submit type="submit" value="Login" />
            <Submit type="button" value="Return" />
          </DivSubmit>
        </Formulario>
      </DivFirst>
    </Body>
  );
};
