import React from 'react';

export default function Profile() {
  return (
    <div className="content-container">
      <div className="title">Profile</div>
      <div className="profile-box">
        <div>
          <img className="img profile-img" src="profile.png" alt="" />
          <div className="name">Song Jiyeon</div>
          <div className="sub-name">Frontend Web Developer</div>
        </div>
        <div className="profile-content-box">
          <div>
            <div className="small-title">EDUCATED AT</div>
            <div className="content">Vanilla Coding</div>
          </div>
          <div>
            <div className="small-title">SKILLS</div>
            <div className="content">Javascript</div>
            <div className="content">React</div>
            <div className="content">Redux</div>
            <div className="content">Node.js</div>
            <div className="content">Express</div>
          </div>
        </div>
      </div>
    </div>
  );
}