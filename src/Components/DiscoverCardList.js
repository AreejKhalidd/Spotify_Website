import React from "react";
import DiscoverCard from "./DiscoverCard";

const DiscoverCardList = ({ Cards }) => {
  const cardComponents = Cards.map((user) => {
    return (
      <DiscoverCard
        key={user.id}
        img={user.img}
        header={user.header}
        description={user.description}
        link={user.link}
      />
    );
  });
  return <div>{cardComponents}</div>;
};

export default DiscoverCardList;
