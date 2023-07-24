import React, { useState } from "react";
import { Form, Field } from 'react-final-form'
import axios from 'axios'
import { useLang } from "../../../contexts/lang-context";

const AdviceForm = () => {
  const [data, setData] = useState({ name: '', email: '', message: '' })
	const lg = useLang('advice')

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post('/addAdvices', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
  };


  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label>{lg('advice')}</label>
          <Field name="message" value={data.message} onChange={handleChange} component="textarea" placeholder="Conseil" />
        </div>

        <button type="submit">Submit</button>
      </form>
    )}
  />
}

export default AdviceForm