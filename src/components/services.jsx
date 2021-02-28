import React, { Component } from "react";
import bp from "./img/bp.svg";
import consulting from "./img/consulting.svg";
import ed from "./img/ed.svg";
import estimation from "./img/estimation.svg";
import survey from "./img/survey.svg";
import supervision from "./img/supervision.png";

const col = [bp, estimation, survey, ed, consulting, supervision];

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <img alt="dadad" src={col[i]} height="100" width="auto" />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
