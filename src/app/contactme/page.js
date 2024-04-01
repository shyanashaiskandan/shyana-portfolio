"use client";
import React, { useState } from 'react'
import {Heading, Container, FormControl, FormLabel, Input, ChakraProvider, Textarea} from "@chakra-ui/react"


const initValues = {
  name: "", 
  email: "",
  subject: "",
  message: "", 
}
const initState = { values: initValues }
const contactme = () => {

  const [state, setState] = useState(initState)

  const {values} = state
  
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  return (
    <ChakraProvider>
    <Container maxWidth="450px" mt='{12}' textAlign="center" fontSize="2xl" p="1em"> 
      <Heading>Contact Me</Heading>

      <FormControl isRequired mb={5}>
        <FormLabel>Name: </FormLabel>
        <Input 
          type='text'
          name="name"
          value = {values.name}
          onChange = {handleChange}
        />
      </FormControl>

      <FormControl isRequired mb={5}>
        <FormLabel>Email: </FormLabel>
        <Input 
          type='email'
          name="email"
          value = {values.email}
          onChange = {handleChange}
        />
      </FormControl>

      <FormControl isRequired mb={5}>
        <FormLabel>Subject: </FormLabel>
        <Input 
          type='text'
          name="subject"
          value = {values.subject}
          onChange = {handleChange}
        />
      </FormControl>

      <FormControl isRequired mb={5}>
        <FormLabel>Message: </FormLabel>
        <Textarea
          type='text'
          name="message"
          rows = {4}
          value = {values.message}
          onChange = {handleChange}
        />
      </FormControl>

    </Container>
    </ChakraProvider>
  )
}

export default contactme