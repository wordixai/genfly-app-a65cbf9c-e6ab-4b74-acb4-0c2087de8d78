import { Play } from 'lucide-react';
import { useState } from 'react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="g_section_wrap py-16">
      <div className="u-container u-radius-medium">
        <div className="u-grid-desktop">
          <div className="u-column-8">
            <div className="video_wrap">
              {!isPlaying ? (
                <div className="video_player_wrap">
                  <div className="video_player_thumbnail" onClick={handlePlay} role="button" tabIndex={0} aria-label="Play video: Video Player">
                    <img 
                      src="https://img.youtube.com/vi/02nFRuEo0bc/sddefault.jpg" 
                      alt="Video thumbnail" 
                      className="video_player_thumbnail_img"
                      loading="lazy"
                    />
                    <button className="video_player_play_btn" aria-label="Play video">
                      <div className="u-icon-32">
                        <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.875 10.3505C18.375 10.6392 18.375 11.3608 17.875 11.6495L2.125 20.7428C1.625 21.0315 0.999999 20.6706 0.999999 20.0933L1 1.90673C1 1.32938 1.625 0.968539 2.125 1.25721L17.875 10.3505Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="video_player_iframe_container">
                  <iframe
                    src="https://www.youtube.com/embed/02nFRuEo0bc?autoplay=1"
                    title="Video Player"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </div>
          <div className="u-column-4 u-align-self-center">
            <p className="quote_mark">"</p>
            <div className="u-vflex-stretch-top">
              <p className="u-paragraph-l u-mb-gutter mb-8">
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
    </section>
  );
};

export default VideoSection;