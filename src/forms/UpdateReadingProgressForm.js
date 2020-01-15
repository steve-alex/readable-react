import React, { useState, useEffect } from "react";
import { Input, Form, Button, Popup } from "semantic-ui-react";
import { usePrevious } from "../hooks/usePrevious";
import "./../components/panels/panels.scss";

export const UpdateReadingProgressForm = ({
  pageCount,
  currentBookPage,
  setCurrentBookPage,
  setPageToUpdate,
  createUpdate
}) => {
  const [typing, setTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(undefined);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTimeout, setPopupTimeout] = useState(undefined);

  useEffect(() => {}, []);

  const handleChange = e => {
    e.persist();
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setPageToUpdate(e.target.value);
    setCurrentBookPage(e.target.value);

    setTyping(true);
    setTypingTimeout(
      setTimeout(() => {
        setTyping(false);
      }, 1000)
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    createUpdate(pageCount);
    handleOpen();
  };

  const handleOpen = () => {
    setPopupOpen(true);
    setPopupTimeout(
      setTimeout(() => {
        setPopupOpen(false);
      }, 2500)
    );
  };

  const handleClose = () => {
    setPopupOpen(false);
    clearTimeout(popupTimeout);
  };

  return (
    <div class="reading-progress-form">
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group>
          <Form.Input
            width={4}
            value={currentBookPage}
            onChange={handleChange}
          />
          <Popup
            trigger={
              <Button
                className="readingProgressButton"
                type="submit"
                color="green"
                inverted
              >
                Update Progress
              </Button>
            }
            on="click"
            content="Your progress has been updated!"
            open={popupOpen}
            onClose={handleClose}
            onOpen={handleOpen}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
