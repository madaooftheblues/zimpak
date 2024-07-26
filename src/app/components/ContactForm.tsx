"use client";

import { FormEvent } from "react";
import InputGroup from "./InputGroup";

const ContactForm = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    console.log(event.currentTarget);

    formData.append("access_key", `${process.env.contactKey}`);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      form.reset();
    }
  }

  return (
    <section className="wrapper relative">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <h2 className="place-self-center text-2xl font-bold">Contact Us</h2>
        <InputGroup
          id="name"
          label="Name"
          type="text"
          placeholder="Enter your name"
          required
        />
        <InputGroup
          id="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <div>
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message here"
            id="message"
            className="w-full min-h-52 p-2 resize-none"
            required
          ></textarea>
        </div>
        <button type="submit" className="place-self-center">
          Submit Form
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
