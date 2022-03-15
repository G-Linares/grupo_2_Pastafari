import React from "react";
import homeVideo from '../../../pictures/videos/homeVideo.mp4';

const MediaHome = () => {
  return (
    <>
      <section id="eventsMedia">
        <div className="container">
          <div className="eventsMedia__wrapper">
            <div className="eventsMedia__1">
              <video src={homeVideo} width="750" height="500" controls="controls" autoPlay="true" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaHome;
