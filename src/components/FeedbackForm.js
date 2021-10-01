import clsx from "clsx";
import React, { useState, useRef } from "react";
import StyledFeedbackForm from "../styled/StyledFeedbackForm";

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    rating: "",
    userFeedback: "",
  });

  const feedbackFormRef = useRef(undefined);
  const selected = (value) => feedbackData.rating === value;

  const emojis = [
    { id: "sad-emoji", value: "sad", symbol: "😥" },
    { id: "neutral-emoji", value: "neutral", symbol: "😐" },
    { id: "happy-emoji", value: "happy", symbol: "😀" },
    {
      id: "amazing-emoji",
      value: "amazing",
      symbol: "😇",
    },
  ];

  const onEmojiClick = (value) => {
    setFeedbackData((currentState) => {
      return {
        ...currentState,
        rating: value,
      };
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const data = [...event.target.elements]
      .filter((element) => Boolean(element.name))
      .reduce((json, element) => {
        json[element.name] = element.value;
        return json;
      }, {});
    fetch(event.target.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  }

  return (
    <StyledFeedbackForm>
      <form
        ref={feedbackFormRef}
        id="feedbackForm"
        name="feedbackForm"
        method="POST"
        data-netlify="true"
        submit={handleFormSubmit}
      >
        <div className="card-layout layout-medium">
          <div className="content">
            <h3 id="hey">Hey, got a second?</h3>
            <p>What do you think of this post?</p>

            <div className="emojis">
              {emojis.map((emoji, index) => (
                <>
                  <span
                    role="button"
                    key={emoji.id}
                    className={clsx([
                      "eachEmoji",
                      selected(emoji.value) ? "selected" : "",
                    ])}
                    value={emoji.value}
                    onClick={() => onEmojiClick(emoji.value)}
                  >
                    {emoji.symbol}
                  </span>
                  <input
                    type="hidden"
                    name="feedbackRating"
                    value={feedbackData.rating}
                  />
                </>
              ))}
            </div>

            <h3 className="title-medium">
              What are your biggest pain points right now?
            </h3>
            <textarea
              name="users-feedback"
              id="users-feedback"
              onInput={(e) =>
                setFeedbackData((data) => ({
                  ...data,
                  userFeedback: e.target.value,
                }))
              }
            ></textarea>

            <input
              type="hidden"
              aria-label="feedbackForm-name"
              name="form-name"
              value="feedbackForm"
            />

            <div className="user-actions">
              <button type="submit">Send</button>{" "}
            </div>
          </div>
        </div>
      </form>
    </StyledFeedbackForm>
  );
};

export default FeedbackForm;
