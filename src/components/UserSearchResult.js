import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

export const UserSearchResult = ({ user }) => {
  return (
    <Card fluid color="teal">
      <Card.Content>
        <Link to={`users/${user.id}`}>
          <Image
            floated="left"
            size="tiny"
            src={user.avatar}
            className="image-hoverable"
          />
        </Link>
        <Link to={`users/${user.id}`}>
          <Card.Header className="text-hoverable">{user.username}</Card.Header>
        </Link>
        <Card.Meta>Followers: {user.followers}</Card.Meta>
        <Card.Meta>Following: {user.following}</Card.Meta>
        <Card.Meta>Books: {user.book_count}</Card.Meta>
      </Card.Content>
    </Card>
  );
};
