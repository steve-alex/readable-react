import React, { useState, useEffect } from "react";
import { Progress, Form, Button, Popup } from "semantic-ui-react";
import { usePrevious } from "../hooks/usePrevious";
import "./../components/panels/panels.scss";

export const UpdateReadingProgressForm = ({
  pageCount,
  book,
  setPageToUpdate,
  createUpdate
}) => {
  const [typing, setTyping] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(undefined);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState(undefined)
  const [popupTimeout, setPopupTimeout] = useState(undefined);
  const [currentBookPage, setCurrentBookPage] = useState(undefined);
  const [bookPageDisplay, setBookPageDisplay] = useState(undefined)

  useEffect(() => {
    if (book.updates[0]) {
      setCurrentBookPage(book.updates[0].page_number);
      setBookPageDisplay(book.updates[0].page_number);
    } else {
      setCurrentBookPage(0);
    }
  }, []);

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
        if (!isNaN(parseInt(e.target.value))) {
          setBookPageDisplay(e.target.value);
        } 
      }, 500)
    );
  };

  const updateIsValid = () => {
    if (isNaN(parseInt(currentBookPage))) {
      setPopupMessage("Progress must be an Integer")
      return false
    } else {
      if (parseInt(currentBookPage) > parseInt(pageCount)) {
        setPopupMessage("Progress must be lower than page count")
        return false
      } else if (parseInt(currentBookPage) < parseInt((getPageCount()))){
        setPopupMessage("Progress must be greater than previous progress")
        return false 
      }
    }
    return true
  }

  const getPageCount = () => {
    if (book.updates[0]) {
      return book.updates[0].page_number;
    } else {
      return 0;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (updateIsValid()) {
      setPopupMessage("Your progress has been updated!")
      createUpdate(currentBookPage, pageCount);
    }
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
    <div className="reading-progress-form">
      <Progress
        percent={Math.round(
          (parseInt(bookPageDisplay) * 100) / parseInt(book.page_count)
        )}
        indicating
        progress
      />
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
            content={popupMessage}
            open={popupOpen}
            onClose={handleClose}
            onOpen={handleOpen}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
