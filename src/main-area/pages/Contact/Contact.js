import React from 'react'

import MainTitle from '../../components/MainTitle'
import { Grid } from "semantic-ui-react";
import ContactForm from '../../components/ContactForm'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Animated } from 'react-animated-css'
import * as emailjs from "emailjs-com";
import { reset } from 'redux-form';
import './Contact.sass'

class Contact extends React.Component {
  sendMessage = (data, dispatch) => {
      console.log(data)
    var templateParams = {
        from_name: `${data.name}(${data.email})`,
        to_name: "uearngold@outlook.com",
        subject: data.subject,
        message_html: data.message
    };
      emailjs.send(
        "outlook",
        "template_JF2XnplZ",
        templateParams,
        "user_xiIQlaVaMhxpSE3n1Zn2O"
      ).then(function(response) {
          dispatch(reset("contact"));
          console.log('Success!', response.status, response.text)
      }, function(err){
          console.log(err)
      })
  }

  render() {
    return (
      <div className="Contact">
        <MainTitle subTitle="GET IN TOUCH" title="CONTACT" />
        <div className="Contact__content">
          <Grid>
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <Animated animationIn="slideInLeft" isVisible={true}>
                <div>
                  <div className="Contact__content__item">
                    <div className="Contact__content__item__icon">
                      <FontAwesomeIcon
                        icon={["fab", "google"]}
                        size="2x"
                        color="#2c98f0"
                      />
                    </div>
                    <div className="Contact__content__item__text">
                      Your gmail address
                    </div>
                  </div>
                  <div className="Contact__content__item">
                    <div className="Contact__content__item__icon">
                      <FontAwesomeIcon
                        icon="envelope"
                        size="2x"
                        color="#2c98f0"
                      />
                    </div>
                    <div className="Contact__content__item__text">
                      Your outlook email address
                    </div>
                  </div>
                  <div className="Contact__content__item">
                    <div className="Contact__content__item__icon">
                      <FontAwesomeIcon
                        icon={["fab", "skype"]}
                        size="2x"
                        color="#2c98f0"
                      />
                    </div>
                    <div className="Contact__content__item__text">
                      Your Skype Id
                    </div>
                  </div>
                </div>
              </Animated>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className="Contact__content__right">
                <ContactForm sendMessage={this.sendMessage} />
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact
