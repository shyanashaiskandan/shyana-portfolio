"use client";
import React from 'react'
// import "./style.css"

const contactme = () => {
  return (
    <div>
    <center><h1 className="pt-10 font-quicksand text-pink text-5xl font-bold">Contact Me</h1></center>
      
    <div className="name block">
        <div>
          <label htmlFor="frm-first">Name: </label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
      </div>

      <div className="email block">
        <label htmlFor="frm-email">Email Address: </label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message: </label>
        <textarea id="frm-message" name="message"></textarea>
      </div>
      <div className="button block">
        <button type="submit">Submit</button>
      </div>
      </div>
  )
}

export default contactme