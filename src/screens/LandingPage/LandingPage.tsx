import React from "react";
import {useState, useRef} from "react";
import "./style.css";

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video-player">
      <video
        ref={videoRef}
        width = "100%"
        height = "100%"
        controls
        onClick={onVideoPress}
        className="video-player__video"
        src="/vid/car.mp4"
      />
    </div>
  )
}

const ThumbnailColumn = () => ({videos, handleThumbnailClick}) => {
  return (
    <div>
      {videos.map((video, index) => (
        <div key={index} onClick={() => handleThumbnailClick(video)}>
          {video.thumbnail}
        </div>
      ))}
    </div>
  );
}

const videos = [
  {
    title: "Vehicle Physics",
    description: "Arcade-Style SphereCast vehicle physics (Unity, C#)",
    thumbnail: <img src="/vid/thumbnails/car.png" alt="Car System Thumbnail"/>,
    src: "/vid/car.mp4"
  },

  {
    title: "Rollback Networking",
    description: "Technical demo + tutorial for peer-to-peer rollback networking (Unity, C#)", 
    thumbnail: <img src="/vid/thumbnails/rollback.png" alt="Rollback Thumbnail"/>,
    src: "/vid/rollback.mp4"
  },

  {
    title : "Graphics Diorama",
    description: "Collection of shaders and effects (Unity, HLSL, C#)",
    thumbnail: <img src="/vid/thumbnails/shaders.png" alt="Shaders Thumbnail"/>,
    src: "/vid/shaders.mp4"
  },

  {
    title: "Card Creation Tool",
    description: "Node-based visual scripting tool for implementing card effects in digital card games (Unity, C#)",
    thumbnail: <img src="/vid/thumbnails/irp.png" alt="Cards Thumbnail"/>,
    src: "/vid/irp.mp4"
  },

  {
    title: "Portal Mechanics Showcase",
    description: "Seamless portal effect + other mechanics (Unreal, C++)",
    thumbnail: <img src="/vid/thumbnails/portal.png" alt="Portal Thumbnail"/>,
    src: "/vid/portal.mp4"
  }

]
        

export default VideoPlayer;

export const LandingPage = (): JSX.Element => {
  return (
    <div className="landing-page">
      <div className="div">
        <header className="header">
          <h1 className="header-text">
            <span className="text-wrapper">Hey, I’m</span>
            <span className="span">&nbsp;</span>
            <span className="text-wrapper-2">Zac</span>
            <span className="text-wrapper">. I make games. </span>
          </h1>
          <p className="body-text">
            <span className="text-wrapper-3">First-class</span>
            <span className="text-wrapper-4">
              {" "}
              graduate in Games Programming.
              <br />
            </span>
            <span className="text-wrapper-3">TIGA</span>
            <span className="text-wrapper-4"> Programming Graduate of the Year 2023.</span>
          </p>
        </header>
        <div className="profile">
          <div className="overlap">
            <div className="BG" />
            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
            <div className="pic" />
            <a href="mailto:zacpeelyates@gmail.com" rel="noopener noreferrer" target="_blank">
              <img className="img" alt="Button" src="/img/button-1.png" />
            </a>
            <a href="mailto:zacpeelyates@gmail.com" rel="noopener noreferrer" target="_blank">
              <img className="img" alt="Button" src="/img/button-2.png" />
            </a>
            <div className="divide" />
            <div className="icons">
              <a href="youtube.com/@zacpeel-yates7276" rel="noopener noreferrer" target="_blank">
                <img className="yt" alt="Yt" src="/img/yt.png" />
              </a>
              <a href="https://uk.linkedin.com/in/zac-peel-yates" rel="noopener noreferrer" target="_blank">
                <img className="lnk" alt="Lnk" src="/img/lnk.svg" />
              </a>
              <a href="github.com/zacpeelyates" rel="noopener noreferrer" target="_blank">
                <img className="git" alt="Git" src="/img/git.png" />
              </a>
              <a href="twitter.com/zacpeelyates" rel="noopener noreferrer" target="_blank">
                <img className="twt" alt="Twt" src="/img/twt.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="big-preview">
          <VideoPlayer/>
          </div>

          <div className="small-previews">
            <div className="small-preview" />
            <div className="small-preview-2" />
            <div className="small-preview-3" />
            <div className="small-preview-4" />
          </div>
          <div className="content-body">ProjectDescription</div>
          <div className="content-header">ProjectTitle</div>
        </div>
      </div>
    </div>
  );
};
