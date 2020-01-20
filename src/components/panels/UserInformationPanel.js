import React, { useEffect, useState } from "react";
import { FollowButton } from "../../components/buttons/FollowButton.js";
// import { Card } from "semantic-ui-react";

export const UserInformationPanel = ({ user, userFollows, followObject }) => {
  const [followerCount, setFollowerCount] = useState(undefined);
  const [followingCount, setFollowingCount] = useState(undefined);

  useEffect(() => {
    setFollowerCount(user.follower_count);
    setFollowingCount(user.following_count);
  }, []);

  return (
    <div className="userInformationPanel">
      <h1 className="username">{user.username}</h1>
      <div className="userAvatar">
        <img alt={user.username} src={`${user.avatar}`}></img>
      </div>
      <FollowButton
        followObject={followObject}
        userId={user.id}
        followerCount={followerCount}
        setFollowerCount={setFollowerCount}
      />
      <div className="followerCount text-hoverable">
        <span>
          <p>Followers</p>
          <p>{user.followers.length}</p>
        </span>
      </div>
      <div className="followingCount text-hoverable">
        <span>
          <p>Following</p>
          <p>{user.following.length}</p>
        </span>
      </div>
      <div className="bookCount">
        <p>Books</p>
        <p>{user.book_count}</p>
      </div>
      <div className="userAbout">
        <p>{user.about}</p>
      </div>
      <h2>{user.city}</h2>
    </div>
  );
};
