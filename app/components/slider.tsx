"use client";
import React, { useState } from "react";

type VideoT = {
  title: string;
  description: string;
  sources: string[];
  subtitle: string;
  thumb: string;
};

function Video({ title, description, sources, subtitle }: VideoT) {
  return (
    <>
      <video className="w-full aspect-video" controls>
        {sources.map((source, i) => {
          console.log(source);
          return <source key={i} src={source} />;
        })}
      </video>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>{subtitle}</p>
    </>
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

  const [mainVideo, setMainVideo] = useState(videos[0]);

  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex w-full">
          {videos.map((video, i) =>
            videos[i].title === mainVideo.title ? (
              <div key={i + video.title} className="w-full flex-shrink-0">
                <Video
                  title={video.title}
                  sources={video.sources}
                  description={video.description}
                  subtitle={video.subtitle}
                  thumb={video.thumb}
                />
              </div>
            ) : null
          )}
          )
        </div>
      </div>
    </div>
  );
}

export default Slider;
