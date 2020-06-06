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
        <section class="artistMusic">
          <div class="contentSpacing">
            <section class="artistTopTracks">
              <h1 class="popularHeader" dir="auto">Popular</h1>
              <section class="trackListContainer trackListContainerBugHack fullWidth">
                <ol class="tracklist">
                <div class="reactContextMenuWrapper">
                    <div draggable="true">
                      <li class="trackListRow trackListRowOneline" role="button" tabindex="0" data-testid="trackListRow">
                        <div class="trackListCol positionOuter">
                          <div class="tracklistPlayPause tracklistMiddleAlign">
                            <svg class="iconPlay" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklistMiddleAlign">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="trackListCol trackListColCoverArtThumb">
                          <div class="coverArt shadow tracklistMiddleAlign coverArt--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                        <div class="trackListCol ">
                          <div class="trackNameWrapper tracklistMiddleAlign">
                            <div class="tracklistName ellipsisOneLine" dir="auto">Tamaly ma3ak</div>
                          </div>
                        </div>
                        
                        <div class="trackListCol trackListColDuration">
                          <div class="tracklistDuration tracklistMiddleAlign">
                            <span>3:51</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>

                  <div class="reactContextMenuWrapper">
                    <div draggable="true">
                      <li class="trackListRow trackListRowOneline" role="button" tabindex="0" data-testid="trackListRow">
                        <div class="trackListCol positionOuter">
                          <div class="tracklistPlayPause tracklistMiddleAlign">
                            <svg class="iconPlay" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklistMiddleAlign">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="trackListCol trackListColCoverArtThumb">
                          <div class="coverArt shadow tracklistMiddleAlign coverArt--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                        <div class="trackListCol ">
                          <div class="trackNameWrapper tracklistMiddleAlign">
                            <div class="tracklistName ellipsisOneLine" dir="auto">Tamaly ma3ak</div>
                          </div>
                        </div>
                        
                        <div class="trackListCol trackListColDuration">
                          <div class="tracklistDuration tracklistMiddleAlign">
                            <span>3:51</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>

                  <div class="reactContextMenuWrapper">
                    <div draggable="true">
                      <li class="trackListRow trackListRowOneline" role="button" tabindex="0" data-testid="trackListRow">
                        <div class="trackListCol positionOuter">
                          <div class="tracklistPlayPause tracklistMiddleAlign">
                            <svg class="iconPlay" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklistMiddleAlign">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="trackListCol trackListColCoverArtThumb">
                          <div class="coverArt shadow tracklistMiddleAlign coverArt--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                        <div class="trackListCol ">
                          <div class="trackNameWrapper tracklistMiddleAlign">
                            <div class="tracklistName ellipsisOneLine" dir="auto">Tamaly ma3ak</div>
                          </div>
                        </div>
                        
                        <div class="trackListCol trackListColDuration">
                          <div class="tracklistDuration tracklistMiddleAlign">
                            <span>3:51</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>

                  <div class="reactContextMenuWrapper">
                    <div draggable="true">
                      <li class="trackListRow trackListRowOneline" role="button" tabindex="0" data-testid="trackListRow">
                        <div class="trackListCol positionOuter">
                          <div class="tracklistPlayPause tracklistMiddleAlign">
                            <svg class="iconPlay" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklistMiddleAlign">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="trackListCol trackListColCoverArtThumb">
                          <div class="coverArt shadow tracklistMiddleAlign coverArt--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                        <div class="trackListCol ">
                          <div class="trackNameWrapper tracklistMiddleAlign">
                            <div class="tracklistName ellipsisOneLine" dir="auto">Tamaly ma3ak</div>
                          </div>
                        </div>
                        
                        <div class="trackListCol trackListColDuration">
                          <div class="tracklistDuration tracklistMiddleAlign">
                            <span>3:51</span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>

                  <div class="reactContextMenuWrapper">
                    <div draggable="true">
                      <li class="trackListRow trackListRowOneline" role="button" tabindex="0" data-testid="trackListRow">
                        <div class="trackListCol positionOuter">
                          <div class="tracklistPlayPause tracklistMiddleAlign">
                            <svg class="iconPlay" viewBox="0 0 85 100">
                              <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                                <title>PLAY</title>
                              </path>
                            </svg>
                          </div>
                          <div class="position tracklistMiddleAlign">
                            <span class="spoticon-track-16"></span>
                          </div>
                        </div>
                        <div class="trackListCol trackListColCoverArtThumb">
                          <div class="coverArt shadow tracklistMiddleAlign coverArt--with-auto-height" aria-hidden="true" mapStyle="width: 50px; height: auto;">
                            <div>
                              <div class="icon">
                                <svg width="80" height="81" viewBox="0 0 80 81" xmlns="http://www.w3.org/2000/svg">
                                  <title>Playlist Icon</title>
                                  <path d="M25.6 11.565v45.38c-2.643-3.27-6.68-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4 14.4-6.46 14.4-14.4v-51.82l48-10.205V47.2c-2.642-3.27-6.678-5.37-11.2-5.37-7.94 0-14.4 6.46-14.4 14.4s6.46 14.4 14.4 14.4S80 64.17 80 56.23V0L25.6 11.565zm-11.2 65.61c-6.176 0-11.2-5.025-11.2-11.2 0-6.177 5.024-11.2 11.2-11.2 6.176 0 11.2 5.023 11.2 11.2 0 6.174-5.026 11.2-11.2 11.2zm51.2-9.745c-6.176 0-11.2-5.024-11.2-11.2 0-6.174 5.024-11.2 11.2-11.2 6.176 0 11.2 5.026 11.2 11.2 0 6.178-5.026 11.2-11.2 11.2z" fill="currentColor" fill-rule="evenodd"></path>
                                </svg>
                              </div>
                             
                            </div>
                          </div>
                        </div>
                        <div class="trackListCol ">
                          <div class="trackNameWrapper tracklistMiddleAlign">
                            <div class="tracklistName ellipsisOneLine" dir="auto">Tamaly ma3ak</div>
                          </div>
                        </div>
                        
                        <div class="trackListCol trackListColDuration">
                          <div class="tracklistDuration tracklistMiddleAlign">
                            <span>3:51</span>
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














       
              

              <section class=" artistAlbums">
<div class="contentSpacing">
  <h1 class="albumsHeader" dir="auto">Albums</h1>
    <div class="containerFluid containerFluid--noSpaceAround">
      <div class="gridRow gridLimit row">
       
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
<div>
  <div draggable="true">
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img  src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Ahla w ahla</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
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
  <div class="mediaObject">
      <div class="mediaObjectHoverable">
          <div class="reactContextMenuWrapper">
              <a class="coverArt shadow coverArt--with-auto-height linking actionable" aria-hidden="true"  mapStyle="width: auto; height: auto;">
                  <div>
                      <div class="icon">
                          <svg width="80" height="79" viewBox="0 0 80 79" xmlns="http://www.w3.org/2000/svg">
                              <title>Album</title>
                              <path d="M76.8 3.138v72.126H3.2V3.138h73.6zM80 0H0v78.398h80V0zM40 20.8c-9.72 0-17.6 7.88-17.6 17.6C22.4 48.12 30.28 56 40 56c9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zm0 3.2c7.94 0 14.4 6.46 14.4 14.4S47.94 52.8 40 52.8s-14.4-6.46-14.4-14.4S32.06 24 40 24z" fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                      </div>
                      <div class="albumImage">
                          <div class="coverArt-image">
                            <img loading="lazy" src="https://i.scdn.co/image/ab67616d0000b2738a523d8df82dd2fb7f4e73b0" alt="" class="_31deeacc1d30b0519bfefa0e970ef31d-scss cover-art-image"></img>
                                   
                          </div>
                      </div>
                  </div>
                  <button class="coverArtPlayback" dir="ltr">
                      <svg class="iconPlay" viewBox="0 0 85 100">
                          <path fill="currentColor" d="M81 44.6c5 3 5 7.8 0 10.8L9 98.7c-5 3-9 .7-9-5V6.3c0-5.7 4-8 9-5l72 43.3z">
                              <title>PLAY</title>
                          </path>
                      </svg>
                  </button>
              </a>
          </div>
          <div class="mo-info">
              <div class="reactContextMenuWrapper">
                  <a class="mo-info-name" dir="auto">Album1</a>
              </div>
          </div>
      </div>
  </div>
</div>
</div>
</div>
    
</div>

</div>
</div>
</section>

       
       
        

      </div>
      </div>
    );
  }
}

export default OverviewArtistPage;
