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
                return (
                  <Button
                    content={genre}
                    key={genre}
                    disabled
                    inverted
                    color="green"

                  />
                );
              } else if (index === 1 || index === 2) {
                return (
                  <Button
                    content={genre}
                    key={genre}
                    disabled
                    inverted
                    color="olive"
                  />
                );
              } else if (index === 3) {
                return (
                  <Button
                    disabled
                    inverted
                    color="yellow"
                    content={genre}
                    key={genre}
                  />
                );
              }
            })}
          {genreMatch &&
            genreMatch[1].map((genre, index) => {
              if (index === 0 || index === 1) {
                return (
                  <Button
                    disabled
                    inverted
                    color="orange"
                    content={genre}
                    key={genre}
                  />
                );
              } else if (index === 2 || index === 3) {
                return (
                  <Button
                    disabled
                    invertedcolor="red"
                    content={genre}
                    key={genre}
                  />
                );
              }
            })}
        </div>
      )}
    </div>
  );
};
