import React, { Component } from "react";
import "./ArtistPage.css";
import Playbutton from "./PlayButton";
import Follow from "./Follow";
import axios from "axios";

/**
 * Overview Page for Artists that contains list of songs and albums for each artist
 */
class OverviewArtistPage extends Component {
 
  /**
   * Upload file
   * @property {Function} Onchange that choose file and uplaod it same as in About page
   * @param {}
   * @returns {void}
   */
  onChange(e) {
    let files = e.target.files;
    //console.warn("FILE", files[0]);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("DATA", e.target.result);
      const formData = { file: e.target.result };
      const URL = "http://localhost:8080/songs";
      axios
        .post(URL, formData)
        .then((response) => console.warn("RESULT", response));
    };
    return 1 * e;
  }

  render() {
   

    return (
      <div className="ArtistPageLayout">
        <div className="Artist-profile">
          <h1 className="name">Amr Diab</h1>
          <ul className="buttons">
            {/* <li id="play-btn">PLAY</li> */}
            <Playbutton />
            <Follow />
            <li
              className="pickFileButton"
              onClick={() => this.fileInput.click()}
            >
              <div onSubmit={this.onSubmit}>
                <input
                  type="file"
                  name="song"
                  style={{ display: "none" }}
                  onChange={(e) => this.onChange(e)}
                  ref={(fileInput) => (this.fileInput = fileInput)}
                />
              </div>
              Upload
            </li>
          </ul>
          <ul className="icons">
            <li>
              <a href="/amr-diab/overview" id="overview-icon">
                Overview
              </a>
            </li>
            <li>
              <a href="/amr-diab/related-artists" id="relate-icon">
                Related Artists
              </a>
            </li>
            <li>
              <a href="/amr-diab/about" id="about-icon">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
        <section class="artist-music">
          <div class="contentSpacing">
            <section class="artist-toptracks">
              <h1 class="_587844af67ca3c14dbf7deb3d5e64f69-scss" dir="auto">Popular</h1>
              <section class="tracklist-container tracklist-container--rendering-bug-hack-2019-07-08 full-width">
                <ol class="tracklist">
                  <div class="react-contextmenu-wrapper">
                    <div draggable="true">
                      <li class="tracklist-row tracklist-row--oneline" role="button" tabindex="0" data-testid="tracklist-row">
                        <div class="tracklist-col position-outer">
                          <div class="tracklist-play-pause tracklist-middle-align">
                            <svg class="icon-play" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklist-middle-align">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-cover-art-thumb">
                          <div class="cover-art shadow tracklist-middle-align cover-art--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                              <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss _62dbfd36511d6e3ae95fb3c6bbc86edc-scss">
                                <div class="cover-art-image" mapStyle="background-image: url(https://i.scdn.co/image/ab67616d0000b2734c614878cb234061701cac6c);">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col name">
                          <div class="track-name-wrapper tracklist-middle-align">
                            <div class="tracklist-name ellipsis-one-line" dir="auto">Never Too Much</div>
                          </div>
                        </div>
                        <div class="tracklist-col more">
                          <div class="tracklist-middle-align">
                            <div class="react-contextmenu-wrapper">
                              <button class="_2221af4e93029bedeab751d04fab4b8b-scss c74a35c3aba27d72ee478f390f5d8c16-scss" type="button">
                                <div class="spoticon-ellipsis-16"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-duration">
                          <div class="tracklist-duration tracklist-middle-align">
                            <span>3:50</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div class="react-contextmenu-wrapper">
                    <div draggable="true">
                      <li class="tracklist-row tracklist-row--oneline" role="button" tabindex="0" data-testid="tracklist-row">
                        <div class="tracklist-col position-outer">
                          <div class="tracklist-play-pause tracklist-middle-align">
                            <svg class="icon-play" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklist-middle-align">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-cover-art-thumb">
                          <div class="cover-art shadow tracklist-middle-align cover-art--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd">
                                  </path>
                                </svg>
                              </div>
                              <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss _62dbfd36511d6e3ae95fb3c6bbc86edc-scss">
                                <div class="cover-art-image" mapStyle="background-image: url(&quot;https://i.scdn.co/image/ab67616d0000b2739ff3f1aa161ac61c8dd2a08e&quot;);">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col name">
                          <div class="track-name-wrapper tracklist-middle-align">
                            <div class="tracklist-name ellipsis-one-line" dir="auto">Always and Forever</div>
                          </div>
                        </div>
                        <div class="tracklist-col more">
                          <div class="tracklist-middle-align">
                            <div class="react-contextmenu-wrapper">
                              <button class="_2221af4e93029bedeab751d04fab4b8b-scss c74a35c3aba27d72ee478f390f5d8c16-scss" type="button">
                                <div class="spoticon-ellipsis-16"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-duration">
                          <div class="tracklist-duration tracklist-middle-align">
                            <span>4:52</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div class="react-contextmenu-wrapper">
                    <div draggable="true">
                      <li class="tracklist-row tracklist-row--oneline" role="button" tabindex="0" data-testid="tracklist-row">
                        <div class="tracklist-col position-outer">
                          <div class="tracklist-play-pause tracklist-middle-align">
                            <svg class="icon-play" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklist-middle-align">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-cover-art-thumb">
                          <div class="cover-art shadow tracklist-middle-align cover-art--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd">
                                  </path>
                                </svg>
                              </div>
                              <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss _62dbfd36511d6e3ae95fb3c6bbc86edc-scss">
                                <div class="cover-art-image" mapStyle="background-image: url(&quot;https://i.scdn.co/image/ab67616d0000b2732ff5c4b27f21a58953871c80&quot;);">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col name">
                          <div class="track-name-wrapper tracklist-middle-align">
                            <div class="tracklist-name ellipsis-one-line" dir="auto">Dance With My Father - Radio Version</div>
                          </div>
                        </div>
                        <div class="tracklist-col more">
                          <div class="tracklist-middle-align">
                            <div class="react-contextmenu-wrapper">
                              <button class="_2221af4e93029bedeab751d04fab4b8b-scss c74a35c3aba27d72ee478f390f5d8c16-scss" type="button">
                                <div class="spoticon-ellipsis-16"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-duration">
                          <div class="tracklist-duration tracklist-middle-align">
                            <span>4:26</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div class="react-contextmenu-wrapper">
                    <div draggable="true">
                      <li class="tracklist-row tracklist-row--oneline" role="button" tabindex="0" data-testid="tracklist-row">
                        <div class="tracklist-col position-outer">
                          <div class="tracklist-play-pause tracklist-middle-align">
                            <svg class="icon-play" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklist-middle-align">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-cover-art-thumb">
                          <div class="cover-art shadow tracklist-middle-align cover-art--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd">
                                  </path>
                                </svg>
                              </div>
                              <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss _62dbfd36511d6e3ae95fb3c6bbc86edc-scss">
                                <div class="cover-art-image" mapStyle="background-image: url(&quot;https://i.scdn.co/image/ab67616d0000b2739ff3f1aa161ac61c8dd2a08e&quot;);">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col name">
                          <div class="track-name-wrapper tracklist-middle-align">
                            <div class="tracklist-name ellipsis-one-line" dir="auto">Endless Love (with Mariah Carey)</div>
                          </div>
                        </div>
                        <div class="tracklist-col more">
                          <div class="tracklist-middle-align">
                            <div class="react-contextmenu-wrapper">
                              <button class="_2221af4e93029bedeab751d04fab4b8b-scss c74a35c3aba27d72ee478f390f5d8c16-scss" type="button">
                                <div class="spoticon-ellipsis-16"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-duration">
                          <div class="tracklist-duration tracklist-middle-align">
                            <span>4:19</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div class="react-contextmenu-wrapper">
                    <div draggable="true">
                      <li class="tracklist-row tracklist-row--oneline" role="button" tabindex="0" data-testid="tracklist-row">
                        <div class="tracklist-col position-outer">
                          <div class="tracklist-play-pause tracklist-middle-align">
                            <svg class="icon-play" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklist-middle-align">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-cover-art-thumb">
                          <div class="cover-art shadow tracklist-middle-align cover-art--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd">
                                  </path>
                                </svg>
                              </div>
                              <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss _62dbfd36511d6e3ae95fb3c6bbc86edc-scss">
                                <div class="cover-art-image" mapStyle="background-image: url(&quot;https://i.scdn.co/image/ab67616d0000b273ffeacdb4866e75416b67b2fe&quot;);">
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col name">
                          <div class="track-name-wrapper tracklist-middle-align">
                            <div class="tracklist-name ellipsis-one-line" dir="auto">I'd Rather</div>
                          </div>
                        </div>
                        <div class="tracklist-col more">
                          <div class="tracklist-middle-align">
                            <div class="react-contextmenu-wrapper">
                              <button class="_2221af4e93029bedeab751d04fab4b8b-scss c74a35c3aba27d72ee478f390f5d8c16-scss" type="button">
                                <div class="spoticon-ellipsis-16"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="tracklist-col tracklist-col-duration">
                          <div class="tracklist-duration tracklist-middle-align">
                            <span>4:19</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                </ol>
              </section>
              </section>
              </div>
              </section>
              



       
       
        
      
              <section class=" artist-albums">
<div class="contentSpacing">
  <h1 class="_587844af67ca3c14dbf7deb3d5e64f69-scss" dir="auto">Albums</h1>
    <div class="container-fluid container-fluid--noSpaceAround">
      <div class="b7c8a052011f3edcfdec21922c905eb6-scss grid--limit row">
        <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
          <div>
            <div draggable="true">
              <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/5Cfmk0HX1XJZuY460NjwYJ" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Hidden Gems" dir="auto" href="/album/5Cfmk0HX1XJZuY460NjwYJ">Hidden Gems</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/5ddK6GvayMRt8gMsoWL99K" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b273b4df726e2f184eacb95261a9" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="New York City Band" dir="auto" href="/album/5ddK6GvayMRt8gMsoWL99K">New York City Band</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/5wq0AUenn2o3RXoBelNsxu" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2737c607f5d6a8f657998ad9936" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Live Radio City Music Hall 2003" dir="auto" href="/album/5wq0AUenn2o3RXoBelNsxu">Live Radio City Music Hall 2003</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/43Ci8cugIRwfmkXEyEgfVM" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2732d9f87aa8712f69aed19d68f" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Dance With My Father" dir="auto" href="/album/43Ci8cugIRwfmkXEyEgfVM">Dance With My Father</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/2YPEpjWlezCbj9jizr6ZeS" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b273477710b297411eb12928835d" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Luther Vandross" dir="auto" href="/album/2YPEpjWlezCbj9jizr6ZeS">Luther Vandross</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/7tcFetI7thjbKImCIXIDmT" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b273a2fe1e657e50598ca383ffaa" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="I Know" dir="auto" href="/album/7tcFetI7thjbKImCIXIDmT">I Know</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/3F4E8x0AIxDFBFjFlLYPeN" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2734259ffed781de4b68c120976" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Your Secret Love" dir="auto" href="/album/3F4E8x0AIxDFBFjFlLYPeN">Your Secret Love</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/6QkoN5LPk7PbD5c9RVrey6" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b273a57e351b00f7daf08e445300" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="This Is Christmas" dir="auto" href="/album/6QkoN5LPk7PbD5c9RVrey6">This Is Christmas</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/79RyzfidCUY1XvdzwW0AYy" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2734861e6bc90711f6aab9f714f" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Songs" dir="auto" href="/album/79RyzfidCUY1XvdzwW0AYy">Songs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/6LKej6X33QEOH1IIL9FWX5" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2732a37edda69e67266f05a9753" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Never Let Me Go" dir="auto" href="/album/6LKej6X33QEOH1IIL9FWX5">Never Let Me Go</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/4mSFu3YmqIHfPngFDqZl4f" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b27335f0ee93b7a038510fe0dad0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Power Of Love" dir="auto" href="/album/4mSFu3YmqIHfPngFDqZl4f">Power Of Love</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
    <div>
        <div draggable="true">
            <div class="media-object">
                <div class="media-object-hoverable">
                    <div class="react-contextmenu-wrapper">
                        <a class="cover-art shadow cover-art--with-auto-height linking actionable" aria-hidden="true" href="/album/1JJ0VNQJJU9AXQApfGC1dC" mapStyle="width: auto; height: auto;">
                            <div>
                                <div class="icon">
                                    <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                                        <title>Album</title>
                                        <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <div class="_60a28f9bc4e6da8926e466ec2cd3304c-scss">
                                    <div class="cover-art-image">
                                      <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b273d352e68d3f9ef21f6d167a96" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                    </div>
                                </div>
                            </div>
                            <button class="cover-art-playback" dir="ltr">
                                <svg class="icon-play" viewBox="0 0 85 100">
                                    <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                        <title>PLAY</title>
                                    </path>
                                </svg>
                            </button>
                        </a>
                    </div>
                    <div class="mo-info">
                        <div class="react-contextmenu-wrapper">
                            <a class="mo-info-name" title="Any Love" dir="auto" href="/album/1JJ0VNQJJU9AXQApfGC1dC">Any Love</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
<div class="a743e99e581d0a1fb0c41b002835fe42-scss">
    <button class="_2221af4e93029bedeab751d04fab4b8b-scss c74a35c3aba27d72ee478f390f5d8c16-scss" type="button">
        <span>SHOW MORE 
            <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg">
                <title>Down</title>
                <path d="M8 9.77L.62 1.13l.76-.65L8 8.23 14.62.48l.76.65" fill="currentColor" fill-rule="evenodd"></path>
            </svg>
        </span>
    </button>
</div>
</div>
</section>

        </div>
      </div>
    );
  }
}

export default OverviewArtistPage;
