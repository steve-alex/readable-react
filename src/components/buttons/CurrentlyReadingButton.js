import React, { useState, useEffect, useRef } from "react";
import { Button, Popup } from "semantic-ui-react";
import API from "../../adapters/api.js";

export const CurrentlyReadingButton = ({ copy, setCopy, userId }) => {
  const [currentlyReading, setCurrentlyReading] = useState(undefined);
  const [onShelf, setOnShelf] = useState(undefined);

  useEffect(() => {
    if (!!copy) {
      setCurrentlyReading(copy.currently_reading);
      setOnShelf(true);
    } else {
      setCurrentlyReading(false);
      setOnShelf(false);
    }
  }, []);

  const handleStopReading = e => {
    e.preventDefault();
    API.stopReadingBook(copy.id).then(setCurrentlyReading(false));
  };

  const handleAddCurrentlyReading = e => {
    e.preventDefault();
    if (onShelf) {
      API.startReadingBook(copy.id).then(setCurrentlyReading(true));
    }
  };

  if (currentlyReading) {
    return (
      <div className="currentlyReadingButton">
        <Button
          onClick={handleStopReading}
          inverted
          color="yellow"
          animated="fade"
        >
          <Button.Content visible>Currently Reading</Button.Content>
          <Button.Content hidden>Stop Reading</Button.Content>
        </Button>
      </div>
    );
  } else {
    return (
      <div className="currentlyReadingButton">
        <Button
          onClick={handleAddCurrentlyReading}
          inverted
          animated="fade"
          color="green"
        >
          <Button.Content visible>Add to Currently Reading</Button.Content>
          {!onShelf ? (
            <Button.Content hidden>
              Add to a shelf to start reading
            </Button.Content>
          ) : (
            <Button.Content hidden>Start reading?</Button.Content>
          )}
        </Button>
      </div>
    );
  }
};
