import React, { useState } from 'react';
import "../../styles/loginPage.scss"
import educationIcn from "../../images/education.png"
import { useNavigate } from "react-router-dom";
import TextFieldComponent from '../../common/TextField';

function RegisterPage() {

  const [userName, setUserName] = useState("");
  const [passwd, setPasswd] = useState("");
  const navigate = useNavigate();

  const handleRegisterButton = () => {
    navigate("/");
  }

  const handleUserNameChange = (val, id) => {
    id == "Username" ? setUserName(val) : setPasswd(val);
  }

  const handleUserNameBlur = (val, id) => {

  }

  const { TextField: FirstNameField } = TextFieldComponent({
    //to be replaced by API call
    FieldName: "Firstname",
    FieldReq: true,
    FieldLabel: "Firstname",
    FieldType: "text",
    FieldDisable: false,
    FieldReadOnly: false,
    FieldValue: userName,
    ClassName: "form-control",
    onChange: handleUserNameChange,
    onBlur: handleUserNameBlur,
    FieldValidation: ["name", "required"],
    FieldPlaceHolder: "Enter your firstname",
    FieldMaxLength: 30
  });

  const { TextField: LastNameField } = TextFieldComponent({
    //to be replaced by API call
    FieldName: "Lastname",
    FieldReq: true,
    FieldLabel: "Lastname",
    FieldType: "text",
    FieldDisable: false,
    FieldReadOnly: false,
    FieldValue: userName,
    ClassName: "form-control",
    onChange: handleUserNameChange,
    onBlur: handleUserNameBlur,
    FieldValidation: ["name", "required"],
    FieldPlaceHolder: "Enter your lastname",
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

  const { TextField: NumberField } = TextFieldComponent({
    //to be replaced by API call
    FieldName: "Contact",
    FieldReq: true,
    FieldLabel: "Contact",
    FieldType: "text",
    FieldDisable: false,
    FieldReadOnly: false,
    FieldValue: passwd,
    ClassName: "form-control",
    onChange: handleUserNameChange,
    onBlur: handleUserNameBlur,
    FieldValidation: ["name", "required"],
    FieldPlaceHolder: "Contact",
    FieldMaxLength: 30
  });

  return (
    <div id="register-container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="card rounded-3 shadow-lg text-black m-lg-5 m-md-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="card-body p-5">

                <div className="text-center m-4">
                  <img src={educationIcn} style={{ width: "100px" }} alt="logo" />
                </div>

                <form>
                  <h4 className="mb-4">Please Register to your account</h4>

                  <div className="form-outline mb-4">
                    {FirstNameField}
                  </div>

                  
                  <div className="form-outline mb-4">
                    {LastNameField}
                  </div>

                  <div className="form-outline mb-4">
                    {PasswordField}
                  </div>

                  <div className="form-outline mb-4">
                    {NumberField}
                  </div>

                  <div className="d-flex align-items-center justify-content-center mt-4">
                    <button type="button" className="btn btn-outline-danger" onClick={handleRegisterButton}>Submit</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage