import React from 'react';
import PropTypes from 'prop-types';
import lesson1Vid from '../assets/dl-1-1/video.mp4';
import lesson2Vid from '../assets/dl-1-2/video.mp4';

const VIDEO_SOURCES = [lesson1Vid, lesson2Vid];

const VideoPlayer = (props) => {
  const { lesson } = props;

  return (
    <div className="VideoPlayer">
      <video
        id={lesson}
        key={lesson}
        // We must include key here so video player is re-rendered on props change
        controls
        width="100%"
        height="100%"
      >
        <source key={lesson} src={VIDEO_SOURCES[lesson]} type="video/mp4" />
        <track kind="captions" />
      </video>
    </div>
  );
};

VideoPlayer.propTypes = {
  lesson: PropTypes.number.isRequired,
};

export default VideoPlayer;
