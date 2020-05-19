import React from 'react';

export default function Contact () {
  return (
    <div className="content-container">
      <div className="title">CONTACT</div>
      <div className="contact-box">
        <div>
          <div className="small-title">e-mail</div>
          <div className="content">carol.jiyeon.song@gmail.com</div>
        </div>
        <div>
          <div className="small-title">github</div>
          <a className="content" href="https://www.github.com/SongJiyeon">https://www.github.com/SongJiyeon</a>
        </div>
        <div>
          <div className="small-title">resume</div>
          <a href="http://www.songcarol.com/songjiyeon_resume.pdf" download="resume_songjiyeon.pdf">Download</a>
        </div>
      </div>
    </div>
  );
}