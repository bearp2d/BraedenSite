import React from 'react'

import BasicForm from 'common/BasicForm'
import BasicInput from "common/BasicInput"
import BasicTextArea from 'common/BasicTextArea'
import { Field } from "redux-form";
import { email, required } from "redux-form-validators";
import { Animated } from 'react-animated-css'
import './ContactForm.sass'

const ContactForm = ({ sendMessage }) => {
  return (
    <Animated animationIn="slideInRight" isVisible={true} >
    <div className="ContactForm">
      <BasicForm
        className="ContactForm"
        form="contact"
        submitButtonText="Send Message"
        onSubmit={sendMessage}
      >
        <Field
          name="name"
          type="text"
          placeholder="name"
          validate={[required()]}
          required
          component={BasicInput}
        />
        <Field
          name="email"
          type="email"
          placeholder="email"
          validate={[email(), required()]}
          required
          component={BasicInput}
        />
        <Field
          name="subject"
          type="text"
          placeholder="subject"
          validate={[required()]}
          required
          component={BasicInput}
        />
        <Field
          name="message"
          type="text"
          placeholder="message"
          validate={[required()]}
          required
          component={BasicTextArea}
        />
      </BasicForm>
    </div>
    </Animated>
  );
}

export default ContactForm
