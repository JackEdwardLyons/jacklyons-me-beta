import clsx from "clsx";
import React, { useState } from "react";
import StyledFeedbackForm from "../styled/StyledFeedbackForm";

const FeedbackForm = () => {
  const [feedbackData, setFeedbackData] = useState({
    rating: "",
  });

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

  return (
    <StyledFeedbackForm>
      <section>
        <div className="card-layout layout-medium">
          <div className="content">
            <h3>Hey, got a second?</h3>
            <p>What do you think of this post?</p>

            <div className="emojis">
              {emojis.map((emoji, index) => (
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
              ))}
            </div>

            {JSON.stringify(feedbackData)}

            <h3 className="title-medium">
              What are your biggest pain points right now?
            </h3>
            <textarea name="users-feedback" id="users-feedback"></textarea>

            <div className="user-actions">
              <button className="btn-primary">Send</button>
            </div>
          </div>
        </div>
      </section>
    </StyledFeedbackForm>
  );
};

export default FeedbackForm;
