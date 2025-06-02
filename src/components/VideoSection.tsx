import { Play } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="py-16">
      <div className="u-container u-radius-medium">
        <div className="u-grid-desktop">
          <div className="u-column-8">
            <div className="video_wrap">
              {!isPlaying ? (
                <div className="video_player_thumbnail" onClick={handlePlay}>
                  <img 
                    src="https://img.youtube.com/vi/02nFRuEo0bc/sddefault.jpg" 
                    alt="Video thumbnail" 
                    className="video_player_thumbnail_img"
                  />
                  <button className="video_player_play_btn" aria-label="Play video">
                    <Play size={24} className="ml-1" />
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/02nFRuEo0bc?autoplay=1"
                  title="Video Player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
          <div className="u-column-4 flex items-center">
            <div>
              <p className="quote_mark">"</p>
              <div className="u-vflex-stretch-top">
                <p className="u-paragraph-l mb-8">
                  If knowledge is power and we're building machines that have more knowledge than us, what will happen between us and the machines?
                </p>
                <p className="u-detail-m u-color-faded">
                  Deep Ganguli<br />
                  Research Lead, Societal Impacts
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;