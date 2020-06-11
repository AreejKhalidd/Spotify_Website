import React, { Component } from "react";
import {SetPremiumUser} from './Components/IsPermium';
import "./PremiumCreddd.css";

class PremiumCred extends Component {

  constructor(props){
    super(props);
    this.handleGetPremium = this.handleGetPremium.bind(this);
  }

  handleGetPremium() {
    console.log("premium: ", this.props.isPremium);
    this.props.setIsPremium(true);
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <div>
            <div className="premium-checkout-container">
              <section className="premium-checkout-header ">
                <div className="header-container">
                  <h1>Get Premium</h1>
                  <ul className="list-checkmarks list-unstyled">
                    <li className="checkmark-item">
                      <span className="checkmark">
                        <svg
                          viewBox="0 0 24 24"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="1.5pt"
                        >
                          <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" />
                        </svg>
                      </span>
                      Listen without the distraction of ads
                    </li>
                    <li className="checkmark-item">
                      <span className="checkmark">
                        <svg
                          viewBox="0 0 24 24"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="1.5pt"
                        >
                          <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" />
                        </svg>
                      </span>
                      Play music with no phone service
                    </li>
                    <li className="checkmark-item">
                      <span className="checkmark">
                        <svg
                          viewBox="0 0 24 24"
                          fill="transparent"
                          stroke="currentColor"
                          strokeWidth="1.5pt"
                        >
                          <polyline points="3.32 12.86 8.9 19.4 20.99 5.26" />
                        </svg>
                      </span>
                      Skip as many songs as you want
                    </li>
                  </ul>
                </div>
              </section>

              <div className="container checkout-content">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 col-lg-10 col-lg-offset-1">
                    <div className="row">
                      <div className="col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">
                        <div className="selected-plan-header">
                          <div>Your plan</div>
                        </div>

                        <div className="card card-selected">
                          <div className="card-content">
                            <span className="card-badge">1-month free trial</span>
                            <h3 className="card-heading">Spotify Premium</h3>
                            <h4 className="card-subheading">
                              <p>
                                <strong>49.99 EGP</strong> / month after trial
                              </p>
                            </h4>
                            <div className="card-terms">
                              Cancel anytime.
                              <a
                                href="https://www.spotify.com/legal/premium-promotional-offer-terms/"
                                rel="noopener"
                              >
                                {" "}
                                Offer terms
                              </a>{" "}
                              apply.
                            </div>
                          </div>
                        </div>
                        <div className="credit credit-selected">
                          <div className="embeddable-checkout">
                            <p className="payment-picker-title">
                              Credit or debit card
                            </p>

                            <ul className="list-unstyled payment-method-icons">
                              <li className="payment-method-icon">
                                <img
                                  src="//www.scdn.co/bundles/spotifycheckout/svg/cards/visa.svg"
                                  alt=""
                                />
                              </li>
                              <li className="payment-method-icon">
                                <img
                                  src="//www.scdn.co/bundles/spotifycheckout/svg/cards/mastercard.svg"
                                  alt=""
                                />
                              </li>
                              <li className="payment-method-icon">
                                <img
                                  src="//www.scdn.co/bundles/spotifycheckout/svg/cards/amex.svg"
                                  alt=""
                                />
                              </li>
                            </ul>

                            <label className="cardLabel" for="number">
                              Card number
                            </label>
                            <input
                              type="tel"
                              id="number"
                              name="cardnumber"
                              placeholder="1111 2222 3333 4444"
                            ></input>

                            <div>
                              <label className="cardLabel" for="month">
                                Expiry date
                              </label>
                            </div>
                            <div>
                              <select
                                className="dropDown"
                                id="month"
                                name="month"
                              >
                                <option value="Month">Month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                              </select>

                              <select
                                className="dropDown"
                                id="year"
                                name="year"
                              >
                                <option value="Year">Year</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                              </select>
                            </div>

                            <div>
                              <label className="cardLabel" for="securityNum">
                                Security code
                              </label>
                            </div>
                            <input
                              type="number"
                              id="securityNum"
                              name="securityNum"
                            ></input>

                            <p className="text-legal">
                              You consent to get access to your Spotify
                              subscription immediately, and that if you don't
                              cancel before the trial ends on April 16, 2020,
                              you will automatically be charged the subscription
                              fee every month until you cancel. You will not be
                              entitled to a refund on cancellation. Full terms
                              and instructions on how to cancel are available{" "}
                              <a
                                href="https://www.spotify.com/legal/premium-promotional-offer-terms/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                here
                              </a>
                              .
                            </p>

                            <button className="ezXcOn eifmih" onClick={this.handleGetPremium}>
                              Start my Spotify Premium
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default PremiumCred;
