import React, { useState } from 'react';
import { Play } from 'lucide-react';

const LazyYouTubeEmbed = ({ videoId, title, aspectRatio = '16/9', autoplay = false, loop = false, videoSrc = null }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle local video files
  if (videoSrc) {
    return (
      <div style={{ aspectRatio }}>
        <video
          src={videoSrc}
          title={title}
          autoPlay={autoplay}
          muted={autoplay}
          loop={loop}
          controls
          className="project-video-embed"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    );
  }

  // Handle YouTube videos
  if (!isLoaded) {
    return (
      <div 
        className="youtube-thumbnail-container"
        style={{ aspectRatio }}
        onClick={() => setIsLoaded(true)}
      >
        <img 
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="youtube-thumbnail-image"
          loading="lazy"
        />
        <div className="youtube-play-overlay">
          <div className="youtube-play-button">
            <Play size={36} color="#000" fill="#000" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="youtube-iframe-wrapper" style={{ aspectRatio }}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&mute=${autoplay ? 1 : 0}&controls=1&modestbranding=1&rel=0&playlist=${loop ? videoId : ''}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="project-video-embed"
      />
    </div>
  );
};

export default LazyYouTubeEmbed;