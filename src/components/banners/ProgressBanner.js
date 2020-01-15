import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import "./banners.scss";

export const ProgressBanner = ({ progress }) => {
  const history = useHistory();
  const user = progress.user;

  const handleUserClick = () => {
    history.push(`/users/${user.id}`);
  };

  return (
    <Card.Content>
      <Image
        className="image-hoverable"
        onClick={() => handleUserClick()}
        floated="left"
        size="tiny"
        src={progress.user.avatar}
      />
      <Card.Header>
        <div className="post-header-metadata">
          <div></div>
          <div className="post-header-row-1">
            <div className="post-username">
              <p className="text-hoverable">
                <span onClick={e => handleUserClick()}>{user.username}</span>{" "}
                made progress{" "}
              </p>
            </div>
          </div>
          <div></div>
          <div className="post-created-at">{progress.time_since_upload}</div>
        </div>
      </Card.Header>
    </Card.Content>
  );
};
