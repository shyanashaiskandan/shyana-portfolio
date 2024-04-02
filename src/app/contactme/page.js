"use client";
import React, { useState } from 'react'
import {Heading, Container, Button, Text, FormControl, FormLabel, Input, ChakraProvider, useToast, Textarea, FormErrorMessage} from "@chakra-ui/react"
import { sendContactForm } from "../lib/api";


const initValues = {
  name: "", 
  email: "",
  subject: "",
  message: "", 
}
const initState = { isLoading: false, error: "", values: initValues }
const contactme = () => {

  const toast = useToast();
  const [state, setState] = useState(initState)
  const[touched, setTouched] = useState({});
  const {values, isLoading, error} = state
  
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
    }));
    try {

      await sendContactForm(values);
      setTouched({});
      setState(initState); 
      toast({
        title: "Message sent.",
        status: "success", 
        duration: "2000", 
        position: "top",
      })
      
    } catch (error) {
      setState((prev) => ({
        ...prev, 
        isLoading: false,
        error: error.message,
      }));
    }
   
  };
  return (
    <ChakraProvider>
    <Container maxWidth="450px" mt='{12}' textAlign="center" fontSize="2xl" p="1em"> 
      <Heading>Contact Me</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
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