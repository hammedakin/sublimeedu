import styled from "styled-components";
import { Button, Form, Input, Label, Select, TextTitle, Textarea } from "../../styles";
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { allCountries } from "../../utils/data";


const Contact = () => {
      const [formField, setFormField] = useState({
            fname: '', lname: '', email: '', phone: '', country: '', purpose: '', funds: '', message: ''
      });


      const [loading, setLoading] = useState(false);
      const [serviceId] = useState(process.env.REACT_APP_SERVICE_ID);
      const [templateId] = useState(process.env.REACT_APP_TEMPLATE_ID);
      const [publicKey] = useState(process.env.REACT_APP_PUBLIC_KEY);
      const form = useRef();

      const handleChange = (e) => {
            setFormField((inputs) => ({
                  ...inputs,
                  [e.target.name]: e.target.value
            }));
      };



      function clearForm() {
            setFormField({
                  fname: '', lname: '', email: '', phone: '', country: '', purpose: '', funds: '', message: ''
            });
      }
      const submitFn = (e) => {
            e.preventDefault();
            setLoading(true);

            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                  .then(() => {
                        clearForm();
                        toast.success('message sent successfully 😁');
                        setLoading(false);
                  }, () => {
                        toast.warn('message not sent, try again... 😔');
                        setLoading(false);
                  });
      };




      return (
            <div id="contact">
                  <StyledContact>
                        <div className="text-center light-text text-center col-11 col-md-12 mx-auto">
                              <TextTitle light center>
                                    Get in touch
                              </TextTitle>
                              <p className="col-md-6 mx-auto">
                                    Fill in your details below, and a consultant will be in touch as soon as they are able. Provide as much detail as possible about your purpose of travelling and where you would like to go.
                              </p>
                        </div>
                        <div className="col-md-7 mx-auto mt-5">
                              <div className="light-bg br-lg py-5 container">
                                    <div className="col-md-9 mx-auto">
                                          <Form ref={form} onSubmit={(e) => submitFn(e)}>

                                                <Label htmlFor="fname">
                                                      First Name
                                                </Label>
                                                <Input
                                                      type="text"
                                                      placeholder="Enter First Name"
                                                      id="fname"
                                                      name="fname"
                                                      onChange={handleChange}
                                                      value={formField?.fname}
                                                      required
                                                />

                                                <Label htmlFor="lname">
                                                      Last Name
                                                </Label>
                                                <Input
                                                      type="text"
                                                      placeholder="Enter Last Name"
                                                      id="lname"
                                                      name="lname"
                                                      onChange={handleChange}
                                                      value={formField?.lname}
                                                      required
                                                />

                                                <Label htmlFor="email">
                                                      Email Address
                                                </Label>
                                                <Input
                                                      type="email"
                                                      placeholder="Enter Email"
                                                      id="email"
                                                      name="email"
                                                      onChange={handleChange}
                                                      value={formField?.email}
                                                      required
                                                />

                                                <Label htmlFor="phone">
                                                      Phone Number
                                                </Label>
                                                <Input
                                                      type="number"
                                                      placeholder="Enter Phone Number"
                                                      id="phone"
                                                      name="phone"
                                                      onChange={handleChange}
                                                      value={formField?.phone}
                                                      required
                                                />

                                                <Label htmlFor="country">
                                                      Where do you currently reside?
                                                </Label>
                                                <Select
                                                      id="country"
                                                      name="country"
                                                      onChange={handleChange}
                                                      value={formField?.country}
                                                      required
                                                >
                                                      <option value="">Select your country </option>
                                                      {
                                                            allCountries?.map((item) =>
                                                                  <option value={item} key={item}>
                                                                        {item}
                                                                  </option>
                                                            )}
                                                </Select>

                                                <Label htmlFor="purpose">
                                                      Purpose of Travel?
                                                </Label>
                                                <Textarea
                                                      placeholder="Purpose of Travel"
                                                      id="purpose"
                                                      name="purpose"
                                                      rows='3'
                                                      onChange={handleChange}
                                                      value={formField?.purpose}
                                                      required
                                                />

                                                <Label htmlFor="funds">
                                                      Funds available for travelling (#) ?
                                                </Label>
                                                <Input
                                                      type="number"
                                                      placeholder="Enter Available funds"
                                                      id="funds"
                                                      name="funds"
                                                      onChange={handleChange}
                                                      value={formField?.funds}
                                                      required
                                                />

                                                <Label htmlFor="message">
                                                      How can we be of help?
                                                </Label>
                                                <Textarea
                                                      placeholder="How can we help?"
                                                      id="message"
                                                      name="message"
                                                      rows='3'
                                                      onChange={handleChange}
                                                      value={formField?.message}
                                                      required
                                                />

                                                <div className="text-center">
                                                      <Button
                                                            pry
                                                            className="btn"
                                                            type="submit"
                                                            disabled={loading}
                                                      >
                                                            {loading ? 'loading...' : 'Submit Now'}
                                                      </Button>
                                                </div>
                                          </Form>
                                    </div>
                              </div>
                        </div>
                  </StyledContact>
            </div>
      );
};

export default Contact;


const StyledContact = styled.section`
      background: linear-gradient(180deg, #0069E5 0%, #6360FF 99.99%, rgba(217, 217, 217, 0) 100%) ;

      padding:4rem 0;
      margin: 4rem 0 0;

`;