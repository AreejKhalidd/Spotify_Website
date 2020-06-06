import React from "react";
import SearchNavbar from "./SearchNavbar";
import CollectionNavbar from "./CollectionNavbar";
import LoginNavbar from "./LoginNavbar";
import HomeNavbar from "./HomeNavbar";
import LikedTracksNavbar from "./LikedTracksNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import "react-notifications-component/dist/theme.css";

class Navbar extends React.Component {
  render() {
    if (window.location.href === "http://localhost:3000/search") {
      return <SearchNavbar />;
    }
    if (
      window.location.href === "http://localhost:3000/collection/playlists" ||
      window.location.href === "http://localhost:3000/collection/podcasts" ||
      window.location.href === "http://localhost:3000/collection/artists" ||
      window.location.href === "http://localhost:3000/collection/albums" ||
      window.location.href === "http://localhost:3000/Recover" ||
      window.location.href === "http://localhost:3000/AccountoverView" ||
      window.location.href === "http://localhost:3000/EditProfile" ||
      window.location.href === "http://localhost:3000/account"  ||
      window.location.href === "http://localhost:3000/EditProfile" ||
      window.location.href === "http://localhost:3000/EditPassword" ||
      window.location.href === "http://localhost:3000/EditProfile" ||
      window.location.href === "http://localhost:3000/Movetoprem"
    ) {
      return <CollectionNavbar />;
    }

    if (window.location.href === "http://localhost:3000/login") {
      return <LoginNavbar />;
    }

    if (
      window.location.href === "http://localhost:3000/Home" ||
      window.location.href === "http://localhost:3000/amr-diab"
    ) {
      return <HomeNavbar />;
    }
    if (
      window.location.href === "http://localhost:3000/collection/tracks" ||
      window.location.href === "http://localhost:3000/browse/discover" ||
      window.location.href ===
        "http://localhost:3000/genre/featured-playlists" ||
      window.location.href === "http://localhost:3000/1"
    ) {
      return <LikedTracksNavbar />;
    }
    if (window.location.href === "http://localhost:3000/create") {
      return <div className="NavLayout"></div>;
    } else {
      return <div></div>;
    }
  }
}
export default Navbar;
