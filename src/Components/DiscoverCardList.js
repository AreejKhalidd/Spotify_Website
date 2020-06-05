import React from "react";
import DiscoverCard from "./DiscoverCard";

/**
 *
 * @property {Function} DiscoverCardList - Discover Card list that contains list of cards
 * @param {} library Cards
 * @returns {} DiscoverCard with it's id, image, header, description and link
 */
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
