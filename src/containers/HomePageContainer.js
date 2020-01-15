import React, { useEffect, useState } from "react";
import { TimelineContainer } from "./TimelineContainer.js";
import { HomePageCurrentlyReadingContainer } from "./HomePageCurrentlyReadingContainer.js";
import API from "../adapters/api.js";

export const HomePageContainer = ({ user, logout }) => {
  const [timeline, setTimeline] = useState([]);
  const [errors, setErrors] = useState(undefined);

  useEffect(() => {
    API.getTimeline()
      .then(res => setTimeline(res.timeline))
      .catch(res => setErrors("Unable to fetch timeline"));
  }, []);

  const createNewPost = () => {
    API.getTimeline()
      .then(res => setTimeline(res.timeline))
      .catch(res => setErrors("Unable to create progress"));
  };

  return (
    <div>
      <HomePageCurrentlyReadingContainer
        userId={user.id}
        createNewPost={createNewPost}
        timeline={timeline}
        setTimeline={setTimeline}
      />
      {errors && <h2>{errors}</h2>}
      {timeline && (
        <TimelineContainer timeline={timeline} commentsHidden={false} />
      )}
    </div>
  );
};

export default HomePageContainer;
