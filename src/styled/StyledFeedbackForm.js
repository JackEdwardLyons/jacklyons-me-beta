import styled from "styled-components";

export default styled.div`
  @import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@100;200;300;400;500;600;800;900&display=swap);
  @import url(https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap);

  :root {
    --dark: #110c22;
    --bg: #dcdee9;
    --primary: hsl(224, 100%, 62%);
    --primary-dark: hsl(224, 100%, 65%);
    --primary-light: hsl(224, 100%, 90%);
    --primary-lighter: hsl(224, 100%, 95%);
    --white: #ffffff;
    --grey: hsl(0, 0%, 95%);
    --grey-dark: hsl(0, 0%, 85%);
    --grey-light: hsl(0, 0%, 97%);
    --grey-lighter: hsl(0, 0%, 98%);
    --green: hsl(153, 100%, 22%);
    --green-light: hsl(153, 100%, 95%);
    --red: hsl(0, 97%, 37%);
    --red-light: hsl(0, 97%, 95%);
    --ff-titles: "Merriweather", serif;
    --ff-body: "IBM Plex Sans", sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
    font-family: var(--ff-body);
    box-sizing: border-box;
  }

  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    position: relative;
  }

  body {
    color: var(--dark);
    min-height: 100vh;
    background: var(--bg);
    display: grid;
  }

  section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 24px;
    flex-direction: column;
    margin: 32px auto;
    /* background: var(--white); */
    /* border-radius: 10px; */
    /* box-shadow: 0px 20px 55px -29px hsl(0, 0%, 80%); */
    max-width: 1024px;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    font-family: var(--ff-body);
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 160%;
    text-align: center;
    margin-bottom: 20px;
    color: var(--dark);
    text-align: left;
  }

  li:hover {
    cursor: pointer;
    color: var(--primary);
  }

  a.link {
    text-decoration: none;
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
  }

  a.link:hover {
    text-decoration: none;
    color: var(--primary);
    border-bottom: 1px solid transparent;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 16px;
  }

  .pageTitle {
    text-align: center;
    color: #fff;
    line-height: 100px;
  }

  button {
    font-size: 16px;
    /* padding: 24px 32px; */
    padding: 24px;
    margin: 16px 8px 16px 0;
    line-height: 0;
    width: 100%;
    vertical-align: top;
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    font-family: var(--ff-body);
    font-weight: 500;
    /* text-transform: uppercase; */
    min-width: 150px;
    max-width: max-content;
    letter-spacing: 1px;
    -webkit-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
    white-space: nowrap;
  }

  input:not([type="radio"]) {
    background: var(--white);
    border: 1px solid var(--grey);
    border-radius: 3px;
    padding: 16px 24px;
    min-width: 300px;
    width: 100%;
    font: normal 1em var(--ff-body);
  }

  input {
    font: 400 18px var(--ff-body);
  }

  .card-layout {
    position: relative;
    background: var(--white);
    box-shadow: 1rem 2rem 1rem -1rem rgba(41, 50, 100, 0.146715);
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    width: 100%;
    text-align: center;
    margin: 32px 0;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .title {
    font-family: var(--ff-titles);
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 160%;
    margin: 16px 0;
    color: var(--dark);
  }

  .title-medium {
    color: var(--dark);
    font-family: var(--ff-titles);
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    width: 100%;
  }

  p {
    font-family: var(--ff-body);
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;

    margin-bottom: 16px;
    text-align: center;
  }

  .design-credits {
    margin: 32px 0;
    color: hsl(0 0% 70% / 1);
    text-align: center;
  }

  .design-credits > a {
    border-bottom: 1px solid #000;
  }

  .spacer {
    height: 100px;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    background-color: #f1f1f1;
    color: #000;
    text-align: center;
  }

  footer a {
    text-decoration: none;
    color: inherit;
    border-bottom: 1px solid;
  }

  footer a:hover {
    border-bottom: 1px transparent;
  }

  /* Extra  */

  .flex-center {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .layout-small {
    width: 380px;
    height: 250px;
  }

  .layout-medium {
    width: 600px;
    height: auto;
    margin: auto;
  }

  .layout-medium .content {
    align-items: center;
    padding: 32px;
  }

  .layout-large {
    max-width: 760px;
    width: 100%;
    height: 380px;
    padding: 48px;
  }

  .emojis {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .eachEmoji {
    position: relative;
    font-size: 3rem;
    margin: 1.25rem;
    z-index: 100;
    vertical-align: middle;
    cursor: pointer;
    filter: grayscale(1);
    opacity: 0.8;
    cursor: pointer;
  }

  .eachEmoji:hover,
  .eachEmoji.selected {
    filter: grayscale(0);
    opacity: 1;
  }

  .eachEmoji::before {
    position: absolute;
    content: "";
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: inline-block;
    z-index: -10;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    /* background: var(--grey); */
  }

  .eachEmoji:hover::before {
    cursor: pointer;
    background: var(--grey);
  }

  #users-feedback {
    max-width: 400px;
    width: 100%;
    min-height: 150px;
    height: auto;
    padding: 16px;
    margin-bottom: 32px;
    font-size: 18px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  .follow-up-options > label {
    margin-right: 32px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .follow-up-options > label > input[type="radio"] {
    position: absolute;
    height: 0;
    width: 0;
    opacity: 0;
  }

  .radio-circle {
    width: 30px;
    height: 30px;
    display: inline-block;
    background: var(--white);
    border: 1px solid var(--primary);
    vertical-align: middle;
    margin-right: 8px;
    border-radius: 50%;
    padding: 5px;
  }

  .follow-up-options > label:hover .radio-circle {
    background: var(--primary-light);
  }

  .follow-up-options > label > input:checked ~ .radio-circle::after {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;

    border-radius: 50%;

    background: var(--primary);
  }

  @media screen and (max-width: 640px) {
    section {
      padding: 16px;
      margin: 0;
    }

    .layout-medium {
      width: 90%;
    }

    .layout-medium .content {
      padding: 16px;
    }
    .pageTitle {
      font-size: 100%;
    }

    .eachEmoji {
      font-size: 1em;
    }

    .eachEmoji::before {
      width: 45px;
      height: 45px;
    }

    .follow-up-options {
      margin: 16px auto;
    }

    .user-actions {
      margin-top: 16px;
    }
  }
`;