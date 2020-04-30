import React, { Component } from "react";
import { InputForm } from "./inputForm/InputForm";
import { BtnFormSubmit } from "./btnFormSubmit/BtnFormSubmit";
import formOptions from "../../config.json";
import initialState from "./initialStateForm.json";

class Form extends Component {
  state = { ...initialState };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log("handleSubmit");
    console.log(this.state);
    this.setState({
      ...initialState,
    });
  };

  handleChange = (e) => {
    // console.log("e.tatget.value", e.target.value);
    // console.log("e.target.name", e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // console.log("re-render-Form");
    // const { name, maxLength, minLength, placeholder } = inputPassword;
    const { nickName, login, email, password, confirmPassword } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <InputForm
          options={formOptions.inputNickName}
          handleChange={this.handleChange}
          value={nickName}
        />
        <InputForm
          options={formOptions.inputLogin}
          handleChange={this.handleChange}
          value={login}
        />
        <InputForm
          options={formOptions.inputEmail}
          handleChange={this.handleChange}
          value={email}
        />
        <InputForm
          options={formOptions.inputPassword}
          handleChange={this.handleChange}
          value={password}
        />
        <InputForm
          options={formOptions.inputConfirmPassword}
          handleChange={this.handleChange}
          value={confirmPassword}
        />
        <BtnFormSubmit />
      </form>
    );
  }
}

export default Form;

