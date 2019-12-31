import React, { useState, useEffect } from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../../App.css'

export const FollowersWithBookPanel = () => {
  const [followers, setFollowers] = useState([{name: "Steve"}, {name: "Alex"}])

  const MenuItem = ({text}) => {
    return <div>{text}</div>;
  };

  const Menu = () => {
    return followers.map(follower => {
      const {name} = follower;
      return <MenuItem text={name} key={name}/>;
    })
  };

  const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };

  const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
  const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

  return(
    <div className="App">
      <ScrollMenu
        data={Menu()}
        arrowLeft={ArrowLeft}
        arrowRight={ArrowRight}
      />
    </div>
  )
}