import React, { useEffect, useState } from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import API from "../../adapters/api.js";

export const FinishedReadingPanel = ( {finishedBook, finishedReading, setFinishedReading} ) => {
  const [book, setBook] = useState(undefined);

  useEffect(() => {
    if (finishedReading) {
      API.getCopy(book).then(res => setBook(res));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setFinishedReading(false);
  };

  const removeBookFromCurrentlyReading = () => {
    API.removeBookFromCurrentlyReading(finishedBook).then(() => handleClose());
  };

  return (
    <>
      <Modal open={finishedReading} onClose={e => handleClose(e)}>
        <Modal.Header>Finished Reading!</Modal.Header>
        <Modal.Content>
          <h3>
            Would you like to remove this book from your currently Reading?
          </h3>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            onClick={() => removeBookFromCurrentlyReading()}
            inverted
          >
            <Icon name="checkmark" /> Yes
          </Button>
          <Button color="red" onClick={() => handleClose()} inverted>
            <Icon name="checkmark" /> No
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};
