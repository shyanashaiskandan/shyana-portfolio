"use client";
import React, { useState } from 'react'
import {Heading, Container, Button, FormControl, FormLabel, Input, ChakraProvider, Textarea, FormErrorMessage} from "@chakra-ui/react"


const initValues = {
  name: "", 
  email: "",
  subject: "",
  message: "", 
}
const initState = { values: initValues }
const contactme = () => {

  const [state, setState] = useState(initState)
  const[touched, setTouched] = useState({});
  const {values, isLoading} = state
  
  const onBlur = ({target}) => setTouched((prev) => ({...prev, [target.name]:true}));
  
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () =>  {
    setState((prev) => ({
      ...prev, 
      isLoading: true
    }))
  }
  return (
    <ChakraProvider>
    <Container maxWidth="450px" mt='{12}' textAlign="center" fontSize="2xl" p="1em"> 
      <Heading>Contact Me</Heading>

      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
        <FormLabel>Name: </FormLabel>
        <Input 
          type='text'
          name="name"
          errorBorderColor = "red.300"
          value = {values.name}
          onChange = {handleChange}
          onBlur = {onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      
      <FormControl isRequired isInvalid={touched.email && !values.name} mb={5}>
        <FormLabel>Email: </FormLabel>
        <Input 
          type='email'
          name="email"
          value = {values.email}
          onChange = {handleChange}
          onBlur = {onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.subject && !values.name} mb={5}>
        <FormLabel>Subject: </FormLabel>
        <Input 
          type='text'
          name="subject"
          value = {values.subject}
          onChange = {handleChange}
          onBlur = {onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl isRequired isInvalid={touched.message && !values.name} mb={5}>
        <FormLabel>Message: </FormLabel>
        <Textarea
          type='text'
          name="message"
          rows = {4}
          value = {values.message}
          onChange = {handleChange}
          onBlur = {onBlur}
        />
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={!values.name || !values.email || !values.subject || !values.message}
        onClick = {onSubmit}
      >Submit</Button>
    </Container>
    </ChakraProvider>
  )
}

export default contactme

// stopped at 13:19