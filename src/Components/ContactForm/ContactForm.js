import React from "react";
import { Label, Button } from "./ContactForm.styled";

class ContactForm extends React.Component {
  state = { name: "", number: "" };

  handleChangeInfo = (evt) => {
    console.log(evt.target.name);
    console.log(evt.target.value);

    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleAddContact({ ...this.state });
    this.resetForm();
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Label>
          {" "}
          name
          <input
            type="text"
            autoComplete="off"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChangeInfo}
          />
        </Label>
        <Label>
          {" "}
          number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChangeInfo}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          ></input>
        </Label>
        <Button type="submit"> Add contact </Button>
      </form>
    );
  }
}

export default ContactForm;
