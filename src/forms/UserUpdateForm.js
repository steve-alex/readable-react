import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import API from "../adapters/api.js";

export const UserUpdateForm = ({ user, match }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [file, setFile] = useState("");
  const userId = user.id;

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fullname", fullname);
    formData.append("username", username);

    API.updateUserDetails(userId, formData)
      .then(console.log)
      .catch(console.log);
  };

  return (
    <div>
      <img src={user.avatar} alt={user.username}></img>
      <input
        type="file"
        onChange={e => setFile(e.target.files[0])}
        placeholder="Upload a profile picture"
      />
      <Form onSubmit={handleSubmit}>
        <Form.Field></Form.Field>
        <Form.Field>
          <input
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            placeholder="Full name"
          />
        </Form.Field>
        <Form.Field>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
          />
        </Form.Field>

        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
