import React, { useContext } from "react";
import { InputLabel, Select, TextField } from "@material-ui/core";
import { BgText, Form, SmText, FieldTwo } from "../../constants/style";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import states from "../../constants/userHelpers";
import { AdminContext } from "./../../utils/store";
import FormControl from "@material-ui/core/FormControl";
import { Alert, TYPE } from "../../components/alert";
import Btn from "../../components/button/button";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import DateFnsUtils from "@date-io/date-fns";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  //align-items: center;
  @media only screen and (max-width: 902px) {
    justify-items: none;
    grid-row: 1/2;
  }
`;

const Content = styled.div`
  padding: 3rem 2rem;
  background: #6e42c138;
  border-radius: 5px;

  width: 70%;
  @media only screen and (max-width: 602px) {
    padding: 1rem 2rem;
    width: 100%;
    background: none;
  }
`;

const Signup = (props) => {
  const user = useContext(AdminContext);

  const history = useHistory();
  //DOB picker state
  const [selectedDate, handleDateChange] = React.useState(new Date());

  //materialui show passsword bolean and config
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //array of states
  const [state] = React.useState(states);

  //formik config
  const URL = "https://jln-api.herokuapp.com";

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",

      art: "member",
      gender: "",
      passwordConfirm: "",
      branch: "",
      phone: "",
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
  const gender = ["Female", "Male"];
  const art = ["mcb", "bch", "cbs"];
  return (
    <Container>
      <Content>
        <Form onSubmit={formik.handleSubmit} centerItems>
          <BgText style={{ color: "#33658A" }} bold>
            REGISTER
          </BgText>
          <SmText>Fill in your details</SmText>
          <TextField
            label='Name'
            type='text'
            fullWidth
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <SmText style={{ color: "red", fontSize: ".9rem" }}>
              {formik.errors.name}
            </SmText>
          ) : null}

          <TextField
            label='Email'
            type='text'
            fullWidth
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <SmText style={{ color: "red", fontSize: ".9rem" }}>
              {formik.errors.email}
            </SmText>
          ) : null}

          <TextField
            label='Phone Number'
            type='number'
            fullWidth
            {...formik.getFieldProps("number")}
          />
          {formik.touched.number && formik.errors.number ? (
            <SmText style={{ color: "red", fontSize: ".9rem" }}>
              {formik.errors.number}
            </SmText>
          ) : null}
          {/* date picker */}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              clearable
              value={selectedDate}
              placeholder='10/10/2000'
              onChange={(date) => handleDateChange(date)}
              format='MM/dd/yyyy'
            />
          </MuiPickersUtilsProvider>
          <FieldTwo>
            {/* state picker */}
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Select State
              </InputLabel>
              <Select
                id='state'
                name='state'
                value={formik.values.state}
                onChange={formik.handleChange}
                placeholder='state'
              >
                <option value='select a state'>Select State</option>

                {state.map((item, index) => (
                  <option
                    style={{
                      padding: ".3rem",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Type of art</InputLabel>
              <Select
                id='art'
                name='art'
                value={formik.values.art}
                onChange={formik.handleChange}
                placeholder='Art'
              >
                <option value='select a state'>Select Art</option>

                {art.map((item, index) => (
                  <option
                    style={{
                      padding: ".3rem",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
              <Select
                id='gender'
                name='gender'
                value={formik.values.gender}
                onChange={formik.handleChange}
                placeholder='Gender'
              >
                <option value='select a state'>Gender</option>

                {gender.map((item, index) => (
                  <option
                    style={{
                      padding: ".3rem",
                      fontSize: "1rem",
                      cursor: "pointer",
                    }}
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
          </FieldTwo>

          {/* password */}

          <Input
            placeholder='Password'
            id='standard-adornment-password'
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            fullWidth
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched.password && formik.errors.password ? (
            <SmText style={{ color: "red", fontSize: ".9rem" }}>
              {formik.errors.password}
            </SmText>
          ) : null}

          <Btn value='Signup' type='submit' />
          <Link to='/login'>
            <SmText style={{ color: "#6610f2" }}>
              Already have an account
            </SmText>
          </Link>
        </Form>
      </Content>
    </Container>
  );
};
export default Signup;
