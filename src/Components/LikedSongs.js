import React from "react";
import "./LikedSongs.css";

const LikedSongs = () => {
  return (
    <div className="likedSongs-page">
      <div className="container">
        <div className="col-xs-12 col-lg-3 col-xl-4">
          <img src="https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png" />
          <h3 className="label">Liked Songs</h3>
        </div>
        <div className="col-xs-12 col-lg-9 col-xl-8">
          <ul className="playlist">
            <li>
              <i className="fa fa-music music"></i>
              <span>Alby Etmnah</span>
              <i className="duration">4:53</i>
              <br />
              <i>
                <a href="he5">Amr Diab . </a> <a href="hee"> haha</a>
              </i>
            </li>
            <li>
              <i className="fas fa-music music"></i>
              <span> عامل ايه فى حياتك</span>
              <i className="duration">2:17</i>
              <br />
              <i>
                <a href="he5">Amer Mounib . </a> <a href="hee"> hehe</a>
              </i>
            </li>
            <li>
              <i className="fas fa-music music"></i>
              <span>حبه جنة</span> <i className="duration">3:29</i>
              <br />
              <i>
                <a href="he5">Sherine . </a> <a href="hee"> hoho</a>
              </i>
            </li>
            <li>
              <i className="fas fa-music music"></i>
              <span>Youm Talat</span>
              <i className="duration">5:30</i>
              <br />
              <i>
                <a href="he5">Amr Diab . </a> <a href="hee"> haha</a>
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default LikedSongs;
