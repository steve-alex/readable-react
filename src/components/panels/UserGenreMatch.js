import React from "react";
import { Button } from "semantic-ui-react";
import "./panels.scss";

export const UserGenreMatch = ({ genreMatch }) => {
  return (
    <div className="userGenreMatch">
      {genreMatch && (
        <div>
          <h1 className="genreMatchHeader">Genre Match</h1>
          {genreMatch &&
            genreMatch[0].map((genre, index) => {
              if (index === 0) {
                return <Button basic color="green" content={genre} />;
              } else if (index === 1 || index === 2) {
                return <Button basic color="olive" content={genre} />;
              } else if (index === 3) {
                return <Button basic color="yellow" content={genre} />;
              }
            })}
          {genreMatch &&
            genreMatch[1].map((genre, index) => {
              if (index === 0 || index === 1) {
                return <Button basic color="orange" content={genre} />;
              } else if (index === 2 || index === 3) {
                return <Button basic color="red" content={genre} />;
              }
            })}
        </div>
      )}
    </div>
  );
};
