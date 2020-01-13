import React, { useEffect, useState } from "react";
import { TimelineContainer } from "./TimelineContainer.js";
import { HomePageCurrentlyReadingContainer } from "./HomePageCurrentlyReadingContainer.js";
import API from "../adapters/api.js";

export const HomePageContainer = ({ user, logout }) => {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    API.getTimeline().then(res => setTimeline(res.timeline));
  }, []);

  const createNewPost = () => {
    API.getTimeline().then(res => setTimeline(res.timeline));
  };

  return (
    <div>
      <HomePageCurrentlyReadingContainer
        userId={user.id}
        createNewPost={createNewPost}
        timeline={timeline}
        setTimeline={setTimeline}
      />
      {timeline && <TimelineContainer timeline={timeline} />}
      <button onClick={logout}>log out</button>
    </div>
  );
};

export default HomePageContainer;
