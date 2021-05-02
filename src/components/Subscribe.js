import React, { useRef, useState } from "react";
import styled from "styled-components";

const StyledSubscribe = styled.form`
  margin: 3rem 0;
  padding: 1rem;
  border: 2px solid #d8195e;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .button {
    margin: 1rem 0 0.5rem 0;
  }
`;

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };

  return (
    <StyledSubscribe onSubmit={subscribe}>
      <h3>Sign up for more Web Dev tips and tricks</h3>
      <label htmlFor="email-input">{"Email Address"}</label>
      <input id="email-input" name="email" placeholder="you@awesome.com" ref={inputEl} required type="email" />
      <div>{message ? message : `I'll only send emails when new content is posted. No spam.`}</div>
      <button type="submit" className="button">
        {"✨ Subscribe 💌"}
      </button>
    </StyledSubscribe>
  );
}
