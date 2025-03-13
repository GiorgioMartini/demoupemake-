"use client";
import React, { useState } from "react";

type VideoT = {
  title: string;
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
};

function Video({ title, description, sources, subtitle, thumb }: VideoT) {
  return (
    <div>
      <video width="320" height="240" poster={thumb}>
        {sources.map((source, i) => {
          console.log(source);
          return <source key={i} src={source} />;
        })}
      </video>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>{subtitle}</p>
    </div>
  );
}

type VideosT = {
  videos: VideoT[];
};

function Slider({ videos }: VideosT) {
  // show only one video at a time
  // add arrows
  // start with 1st video, its main
  // if press arrow, offset main, hide last

  // use state for offset videos
  // if main video, play

  const [mainVideo, setMainVideo] = useState();

  return (
    <div>
      {videos.map((video, i) => {
        console.log(video);
        return (
          <div key={i + video.title}>
            <Video
              title={video.title}
              sources={video.sources}
              description={video.description}
              subtitle={video.subtitle}
              thumb={video.thumb}
            ></Video>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
