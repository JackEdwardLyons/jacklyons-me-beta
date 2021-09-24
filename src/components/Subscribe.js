import React, { useRef, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from "styled-components";

const StyledSubscribe = styled.div`
  margin: 3rem 0;
  padding: 1rem;
  border: 2px solid #d8195e;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  button {
    margin: 1rem 0 0.5rem 0;
  }
`;

// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email;
  let name;

  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <>
      <input
        ref={(node) => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button onClick={submit}>Submit</button>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </>
  );
};

export default function Subscribe({ message = "" }) {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const url =
    "https://jacklyons.us16.list-manage.com/subscribe/post?u=9f82d3f200391b066ef73f021&amp;id=cf45a34209";

  return (
    <StyledSubscribe>
      {message ? (
        <h3>{message}</h3>
      ) : (
        <h3>Sign up for more tips like this in your inbox!</h3>
      )}

      <div>I'll only send emails when new content is posted. No spam.</div>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </StyledSubscribe>
  );
}
