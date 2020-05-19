import React from 'react';

export default function MyWork () {
  return (
    <div className="content-container">
      <div className="title">My Works</div>
      <div className="my-work-box">
        <div>
          <div className="work-img-box">
            <img className="img pixfie-img" src="pixfie.gif" alt="" />
          </div>
          <div>
            <div className="small-title">pixfie</div>
            <div className="project-description">
              <p>Face recognition mobile app that converts selfies into pixel character</p>
            </div>
            <a className="github" href="https://www.github.com/SongJiyeon/pixfie">https://www.github.com/SongJiyeon/pixfie</a>
          </div>
        </div>
        <div>
          <div className="work-img-box">
            <img className="img dependency-img" src="dependency-summary.gif" alt="" />
          </div>
          <div>
            <div className="small-title">dependency summary</div>
            <div className="project-description">
              <p>Desktop app that summarizes information about project module usage and dependency</p>
            </div>
            <a className="github" href="https://www.github.com/SongJiyeon/dependency-summary">https://www.github.com/SongJiyeon/dependency-summary</a>
          </div>
        </div>
      </div>
    </div>
  );
}