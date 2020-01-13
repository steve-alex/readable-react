import React, { useState } from "react";
import { Form, Button, TextArea } from "semantic-ui-react";
import "../../forms/forms.scss";

export const SubmitProgressForm = ({ createProgress }) => {
  const [content, setContent] = useState("");

  return (
    <div>
      <Form
        className="submitProgressForm"
        onSubmit={e => createProgress(e, content)}
      >
        <Form.Field>
          <TextArea
            className="progressInput"
            placeholder="Share your latest progress..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </Form.Field>
        <Button className="progressButton" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
