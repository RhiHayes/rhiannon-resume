import React from "react"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from '@mui/material';
import {Container, Wrapper, Title,  ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton} from "./ContactStyle.js"


const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_22o0wve', 'template_2rna97j', form.current, 'WqRFi2l1B_Y1VWRnk')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }



  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Open to any questions or opportunities!</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact