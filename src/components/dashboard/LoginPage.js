import React, { useState } from 'react';
import "../../styles/loginPage.scss"
import educationIcn from "../../images/education.png"
import { useNavigate } from "react-router-dom";
import TextFieldComponent from '../../common/TextField';
import axios from 'axios';

function LoginPage() {

  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();

  const handleRegisterButton = () => {
    navigate("/register");
  }

  const handleUserNameChange = (val, id) => {
    setErrMessage("");
    id == "Username" ? setUserName(val) : setPasswd(val);
  }

  const handleUserNameBlur = (val, id) => {

  }

  const handleLoginClick = () => {
    const userDetails = {
      "username":userName,
      "password":passwd
    }
    axios.post(`https://www.mecallapi.com/api/login`, userDetails)
      .then(res => {
        console.log(res);
        res.data.status == "ok" && navigate("/home");
      })
      .catch(err =>{
        setErrMessage(err.message);
        console.log(err);
      })

    // signIn(user.email, user.password)
    //   .then((data) => {
    //     return data.user.getIdToken();
    //   })
    //   .then((token) => {
    //     return response.json({ token });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     return response.status(403).json({ general: 'wrong credentials, please try again' });
    //   })
    // navigate("/home");
  }

  const { TextField: UserNameField } = TextFieldComponent({
    //to be replaced by API call
    FieldName: "Username",
    FieldReq: true,
    FieldLabel: "Username",
    FieldType: "text",
    FieldDisable: false,
    FieldReadOnly: false,
    FieldValue: userName,
    ClassName: "form-control",
    onChange: handleUserNameChange,
    onBlur: handleUserNameBlur,
    FieldValidation: ["name", "required"],
    FieldPlaceHolder: "Enter your username",
    FieldMaxLength: 30
  });

  const { TextField: PasswordField } = TextFieldComponent({
    //to be replaced by API call
    FieldName: "Password",
    FieldReq: true,
    FieldLabel: "Password",
    FieldType: "text",
    FieldDisable: false,
    FieldReadOnly: false,
    FieldValue: passwd,
    ClassName: "form-control",
    onChange: handleUserNameChange,
    onBlur: handleUserNameBlur,
    FieldValidation: ["name", "required"],
    FieldPlaceHolder: "Password",
    FieldMaxLength: 30
  });

  return (
    <div id="login-container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="loginCard-container h-75">
          <div className="card rounded-3 shadow-lg text-black m-lg-5 m-md-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="card-body p-lg-5 p-md-5">

                  <div className="text-center m-lg-4 m-md-4">
                    <img src={educationIcn} style={{ width: "100px" }} alt="logo" />
                  </div>

                  <form>
                    <h4 className="mb-4">Please login to your account</h4>

                    <div className="form-outline mb-4">
                      {UserNameField}
                    </div>

                    <div className="form-outline mb-4">
                      {PasswordField}
                    </div>
                    <div className="d-flex justify-content-center">
                      <p className="text-danger">{errMessage !="" && errMessage}</p>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                      <button className="btn btn-primary btn-block gardient-login-button" onClick={handleLoginClick} type="button">Log in</button>
                      <a className="text-muted m-2" href="#!">Forgot password?</a>
                    </div>

                    <div className="d-flex align-items-center justify-content-center pb-4">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <button type="button" className="btn btn-outline-danger" onClick={handleRegisterButton}>Create new</button>
                    </div>

                  </form>

                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h2 className="mb-4">Welcome to your Contacts</h2>
                  <h4 className="small mb-0">"Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too."</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage