import React from 'react';

import pixfie from '../../assets/pixfie.gif';
import dependency from '../../assets/dependency-summary.gif';

export default function MyWork () {
  return (
    <div className="content-container">
      <div className="title">My Works</div>
      <div className="my-work-box">
        <div>
          <div className="work-img-box">
            <img className="img pixfie-img" src={pixfie} alt="" />
          </div>
          <div>
            <div className="small-title">pixfie</div>
            <div className="project-description">
              <p>Face recognition mobile app that converts selfies into pixel character</p>
            </div>
            <a className="github" href="https://github.com/SongJiyeon/pixfie-frontend">https://github.com/SongJiyeon/pixfie-frontend</a>
          </div>
        </div>
        <div>
          <div className="work-img-box">
            <img className="img dependency-img" src={dependency} alt="" />
          </div>
          <div>
            <div className="small-title">dependency summary</div>
            <div className="project-description">
              <p>Desktop app that summarizes information about project module usage and dependency</p>
            </div>
            <a className="github" href="https://github.com/SongJiyeon/dependency-summary">https://github.com/SongJiyeon/dependency-summary</a>
          </div>
        </div>
      </div>
    </div>
  );
}