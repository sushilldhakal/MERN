import React, { Component } from "react";

class MainSearch extends Component {
  render() {
    return (
      <div className="ws-slider-form dark-layout">
        <div className="container">
          <div className="row">
            <div
              className="ws-advance-form dark-layout wow fadeInUp text-left"
              data-wow-duration="0.4s"
              data-wow-delay="1s"
              id="ws-advance-form"
            >
              <form action="/action_page.php">
                <h3 className="text-white mt-0 font24 text-uppercase mb-15 font-weight-500 ">
                  search tours
                </h3>
                <div className="form-content-wrapper">
                  <div className="form-top-wrapper">
                    <div className="form-content">
                      <label
                        className="d-block ml-5 mb-5 mt-0 text-white"
                        htmlFor="ws-keyword"
                      >
                        Search Keyword
                      </label>
                      <input
                        type="text"
                        id="ws-keyword"
                        name="firstname"
                        placeholder="Search by keyboard"
                      />
                    </div>
                    <div className="form-content">
                      <label
                        className="d-block ml-5 mb-5 mt-0 text-white"
                        htmlFor="ws-destination"
                      >
                        Choose Destinations
                      </label>
                      <select
                        className="select form-control trip-destinations selectpicker show-menu-arrow show-tick"
                        data-live-search="true"
                        data-placeholder="Select Destination"
                        id="ws-destination"
                        data-size="10"
                        readonly="readonly"
                        onfocus="blur()"
                        onClick="focusbox()"
                      >
                        <optgroup label="Asia">
                          <option value="1">Nepal</option>
                          <option value="2">Bhutan</option>
                          <option value="3">India</option>
                          <option value="4">Thailand</option>
                        </optgroup>
                        <optgroup label="Europe">
                          <option value="11">Germany</option>
                          <option value="12">England</option>
                          <option value="13">Span</option>
                          <option value="14">France</option>
                          <option value="15">Austria</option>
                          <option value="16">Turkey</option>
                          <option value="17">Russia</option>
                          <option value="18">Portugal</option>
                        </optgroup>
                        <optgroup label="North America">
                          <option value="21">USA</option>
                          <option value="22">Canada</option>
                          <option value="23">Cuba</option>
                          <option value="24">Mexico</option>
                        </optgroup>
                        <optgroup label="South America">
                          <option value="31">Brazil</option>
                          <option value="32">Argentina</option>
                          <option value="33">Cuba</option>
                        </optgroup>
                      </select>
                    </div>
                    <div className="form-content">
                      <label
                        className="d-block ml-5 mb-5 mt-0 text-white"
                        htmlFor="ws-trip-type"
                      >
                        Choose Trip Type
                      </label>
                      <select
                        className="select form-control trip-type selectpicker show-menu-arrow show-tick"
                        id="ws-trip-type"
                        data-live-search="true"
                        readonly="readonly"
                        data-placeholder="Select Trip Type"
                        data-selected-text-format="count"
                        multiple
                      >
                        <option value="31">Rafting</option>
                        <option value="32">Paragliding</option>
                        <option value="33">Jungle Safari</option>
                        <option value="34">Trekk</option>
                        <option value="35">Boating</option>
                        <option value="36">Sight Seeing</option>
                      </select>
                    </div>
                    <div className="form-content">
                      <label
                        className="d-block ml-5 mb-5 mt-0 text-white"
                        htmlFor="ws-trip-duration"
                      >
                        Choose Trip duration
                      </label>
                      <select
                        className="select form-control trip-duration selectpicker show-menu-arrow show-tick"
                        data-placeholder="Select Duration"
                        id="ws-trip-duration"
                        data-live-search="true"
                        readonly="readonly"
                        data-size="10"
                      >
                        <option value="41">2 days</option>
                        <option value="42">4 days</option>
                        <option value="43">1 week</option>
                      </select>
                    </div>
                    <div className="form-content wp-travel-form-field wp-travel-trip-duration">
                      <label className="d-block ml-5 mb-5 mt-0 text-white">
                        Trip Start End Range
                      </label>
                      <input
                        type="text"
                        data-range="true"
                        data-multiple-dates-separator=" - "
                        data-language="en"
                        placeholder="Select a date range"
                        className="range-datepicker"
                        readonly="readonly"
                      />
                    </div>
                    <div className="prices price-min-max">
                      <label
                        className="d-block ml-5 mb-5 mt-0 text-white"
                        htmlFor="ws-min-price"
                      >
                        Price Range
                      </label>
                      <input
                        className="irs-hidden-input"
                        type="number"
                        name=""
                        id="ws-min-price"
                        readonly="readonly"
                      />
                    </div>
                  </div>

                  <input type="submit" value="Search" className="button" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSearch;
