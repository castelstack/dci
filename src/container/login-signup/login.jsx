import React, { useContext } from "react";
import { TextField } from "@material-ui/core";
import { BgText, Form, SmText } from "../../constants/style";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { AdminContext } from "./../../utils/store";

import { Alert, TYPE } from "../../components/alert";
import Btn from "../../components/button/button";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  height: 90vh;
  @media only screen and (max-width: 600px) {
    justify-items: none;
    height: 80vh;
  }
`;

const Content = styled.div`
  padding: 3rem 2rem;
  background: #6e42c138;
  border-radius: 5px;
  width: 50%;
  @media only screen and (max-width: 600px) {
    width: 80%;
    padding: 3rem 2rem;
  }
`;

const Login = (props) => {
  const user = useContext(AdminContext);

  const history = useHistory();

  // const handleClick = (props) => {

  // }

  const URL = "https://jln-api.herokuapp.com";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid Email Address.")
        .required("Email Is Required."),

      password: Yup.string()
        .min(6, "Password Must be 6 characters or more")
        .required("Password Is Required"),
    }),

    onSubmit: (values) => {
      axios
        .post(`${URL}/api/v1/admins/login`, values, { withCredentials: true })
        .then((res) => {
          if (res.data.status.toLowerCase() === "success") {
            user.setLoggedIn({ status: true, value: values.email });
            console.log("logged in", user);

            return history.push("/admin");
          }
        })
        .catch((err) => {
          err.response
            ? Alert(err.response.data.message, TYPE.ERROR)
            : console.log(err);
        });
    },
  });

  return (
    <Container>
      <Content>
        <Form onSubmit={formik.handleSubmit} centerItems>
          <BgText style={{ color: "#000" }} bold>LOGIN</BgText>

        
            <TextField
              label='Email'
                          type='text'
                      fullWidth
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
                          <SmText style={{ color: "red", fontSize: ".6rem" }}>
                               {formik.errors.email}
              </SmText>
               
            ) : null}
         

         
            <TextField
              label='Password'
                          type='password'
                          fullWidth
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <SmText style={{ color: "red", fontSize: ".6rem" }}>
                {formik.errors.password}
              </SmText>
            ) : null}
         

          <Btn value='Login' type='submit' yellow />
          {/* <Link to='/admin'>
                    
                </Link> */}
        </Form>
      </Content>
    </Container>
  );
};
export default Login;
