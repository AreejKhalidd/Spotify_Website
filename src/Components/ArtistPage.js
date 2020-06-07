import React from "react";
import "./ArtistPage.css";
import AboutArtistPage from "./AboutArtistPage";
import OverviewArtistPage from "./OverviewArtistPage";
import RelatedArtistPage from "./RelatedArtistPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Statistics from './Statistics'

class ArtistPage extends React.Component {
  render() {
    if (window.location.href === "http://localhost:3000/amr-diab/about") {
      return (
        <div className="ArtistPageLayout">
          <AboutArtistPage />
        </div>
      );
    } else if (
      window.location.href === "http://localhost:3000/amr-diab/overview" ||
      window.location.href === "http://localhost:3000/amr-diab"
    ) {
      return (
        <div className="ArtistPageLayout">
          <OverviewArtistPage  />
        </div>
      );
    }
    if (
      window.location.href === "http://localhost:3000/amr-diab/related-artists"
    ) {
      return (
        <div>
          <RelatedArtistPage />
        </div>
      );
    }
  }
}
export default ArtistPage;
