import React from "react";
import { Form } from "react-bootstrap";

const TextFieldComponent = ({
  FieldName,
  FieldReq,
  FieldLabel,
  FieldType,
  FieldDisable,
  FieldReadOnly,
  FieldValue,
  ClassName,
  onChange,
  onBlur,
  FieldValid,
  FieldMaxLength,
  FieldMinLength,
  FieldPlaceHolder,
  ref,
  FieldAutoComplete,
}) => {

  const _onChange = event => {
    onChange(event.target.value, event.target.id);
  };

  const _onBlur = event => {
    onBlur(event.target.value, event.target.id);
  };

  const TextField = (
    <div className="text-field-wrapper">
    
    {FieldLabel && <Form.Label htmlFor="">{FieldLabel}</Form.Label>}
      <Form.Control
        type={FieldType}
        placeholder={FieldPlaceHolder}
        disabled={FieldDisable}
        readOnly={FieldReadOnly}
        value={FieldValue}
        id={FieldName}
        name={FieldName}
        required={FieldReq}
        className={ClassName}
        onBlur={_onBlur}
        onChange={_onChange}
        maxLength={FieldMaxLength}
        minLength={FieldMinLength}
        isValid={FieldValid}
        ref={ref}
        autoComplete={FieldAutoComplete}
      />
    </div >
  );

  return { TextField };
};

export default TextFieldComponent;
