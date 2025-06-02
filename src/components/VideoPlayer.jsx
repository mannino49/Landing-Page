import React from 'react';

/**
 * VideoPlayer component for embedding MP4 videos
 * @param {Object} props - Component props
 * @param {string} props.src - Source URL of the video
 * @param {string} props.poster - Optional poster image URL
 * @param {boolean} props.autoPlay - Whether to autoplay the video
 * @param {boolean} props.loop - Whether to loop the video
 * @param {boolean} props.muted - Whether to mute the video
 * @param {boolean} props.controls - Whether to show video controls
 * @param {string} props.className - Additional CSS classes
 */
const VideoPlayer = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className = '',
}) => {
  return (
    <div className={`video-container ${className}`}>
      <video
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        className="video-player"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
