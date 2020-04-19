import React from "react";
import "./ArtistPage.css";

import AboutArtistPage from "./AboutArtistPage";
import OverviewArtistPage from "./OverviewArtistPage";
import RelatedArtistPage from "./RelatedArtistPage";

class ArtistPage extends React.Component {
  render() {
    if (window.location.href === "http://localhost:3000/amr-diab/about") {
      return (
        <div>
          <AboutArtistPage />
        </div>
      );
    } else if (
      window.location.href === "http://localhost:3000/amr-diab/overview" ||
      window.location.href === "http://localhost:3000/amr-diab"
    ) {
      return (
        <div>
          <OverviewArtistPage />
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
