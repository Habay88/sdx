import React from "react";
import PasswordField from "./PasswordField";

function LabelField({
  onChange,
  onBlur,
  maxLength,
  minLength,
  label,
  id,
  pattern,
  className,
  inputProps,
  name,
  title,
  type,
  data,
  placeholder,
  readOnly,
  required,
  tag,
  children,
  defaultValue,
  value,
  on,
  min,
  max
}) {
  //Set name as id if ID is not found
  id = id || name;
  let classname =
    className === undefined ? "label-field" : `${className} label-field`;
  const handleChange = (e) => {
    onChange(e);
  };

  const handleBlur = (e) => {
    if (onBlur !== undefined) {
      onBlur(e);
    }
  };

  var mainTag = null;
  switch (tag) {
    case "i":
      mainTag = (
        <input
          type={type}
          id={id}
          className={className}
          placeholder={placeholder}
          required={required}
          name={name}
          pattern={pattern}
          inputProps={inputProps}
          value={value}
          defaultValue={defaultValue}
          data-type={data}
          maxLength={maxLength}
          minLength={minLength}
          readOnly={readOnly}
          onBlur={handleBlur}
          onChange={handleChange}
          min={min}
          max={max}
        />
      );
      break;
    case "s":
      mainTag = (
        <select
          required={required}
          id={id}
          className={className}
          name={name}
          pattern={pattern}
          inputProps={inputProps}
          value={value}
          defaultValue={defaultValue}
          data-type={data}
          readOnly={readOnly}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {children}
        </select>
      );
      break;
    case "t":
      mainTag = (
        <textarea
          placeholder={placeholder}
          id={id}
          maxLength={maxLength}
          minLength={minLength}
          className={className}
          pattern={pattern}
          required={required}
          name={name}
          value={value}
          defaultValue={defaultValue}
          data-type={data}
          readOnly={readOnly}
          inputProps={inputProps}
          onBlur={handleBlur}
          spellCheck
          onChange={handleChange}
        />
      );
      break;
    case "p":
      mainTag = (
        <PasswordField
          placeholder={placeholder}
          id={id}
          className={className}
          required={required}
          name={name}
          pattern={pattern}
          inputProps={inputProps}
          maxLength={maxLength}
          minLength={minLength}
          onBlur={handleBlur}
          defaultValue={defaultValue}
          readOnly={readOnly}
          data-type={data}
          onChange={handleChange}
        />
      );
      break;
    default:
      mainTag = (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          className={className}
          required={required}
          maxLength={maxLength}
          name={name}
          pattern={pattern}
          inputProps={inputProps}
          minLength={minLength}
          data-type={data}
          value={value}
          readOnly={readOnly}
          onBlur={handleBlur}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      );
      break;
  }

  return (
    <div className={classname}>
      <label>
        <span>{on !== undefined ? "*" : "    "}</span>
        {label}
      </label>
      {mainTag}
    </div>
  );
}

export default LabelField;
