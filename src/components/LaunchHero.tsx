import { ArrowRight, Play } from 'lucide-react';

const LaunchHero = () => {
  const cards = [
    {
      title: "Claude 4",
      bgColor: "u-bg-clay",
      image: "/api/placeholder/120/120",
      summary: "Introducing the next generation of Claude models: Opus 4 and Sonnet 4",
      link: "/news/claude-4"
    },
    {
      title: "API capabilities",
      bgColor: "u-bg-oat",
      image: "/api/placeholder/120/120",
      summary: "Four new capabilities to help developers build AI agents",
      link: "/news/agent-capabilities-api"
    },
    {
      title: "Claude Code",
      bgColor: "u-bg-coral",
      image: "/api/placeholder/120/120",
      summary: "Two powerful AI products — Claude Code and Claude apps, included in the Max plan",
      link: "/claude-code"
    },
    {
      title: "Research",
      bgColor: "u-bg-clay",
      image: "/api/placeholder/120/120",
      summary: "Gather comprehensive insights from hundreds of sources, in minutes",
      link: "/news/research"
    },
    {
      title: "Integrations",
      bgColor: "u-bg-oat",
      image: "/api/placeholder/120/120",
      summary: "Integrate Claude with external tools and apps for expert assistance",
      link: "/news/integrations"
    },
    {
      title: "Google Workspace",
      bgColor: "u-bg-coral",
      image: "/api/placeholder/120/120",
      summary: "Connect your Gmail, Calendar, and Docs for deeper insights",
      link: "/news/research"
    },
    {
      title: "Web search",
      bgColor: "u-bg-clay",
      image: "/api/placeholder/120/120",
      summary: "Search the internet for more up-to-date and relevant responses",
      link: "/news/web-search"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Header */}
      <div className="u-container u-mb-6">
        <div className="text-center">
          <p className="u-display-xxl u-animated-text mb-4">Introducing the</p>
          <h1 className="u-display-xl mb-8">Claude 4 model family</h1>
        </div>
      </div>

      {/* Explore Section */}
      <div className="u-container mb-8">
        <div className="flex items-center justify-center gap-4 text-center">
          <p className="u-detail-m">Explore the latest updates</p>
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="u-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <a key={index} href={card.link} className="block">
              <div className={`launch_hero_card ${card.bgColor}`}>
                <p className="u-font-display-serif u-display-m u-alignment-center text-white">
                  {card.title}
                </p>
                <div className="launch_hero_card_info">
                  <div className="launch_hero_card_front">
                    <img src={card.image} alt="" className="w-full h-full object-contain" />
                  </div>
                  <div className="launch_hero_card_back">
                    <p className="u-paragraph-m text-white">{card.summary}</p>
                  </div>
                </div>
                <p className="u-detail-m text-white/80">Read the announcement</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="u-grid-desktop">
          <div className="u-column-8">
            <div className="u-vflex-stretch-top">
              <p className="u-display-xxl u-mb-5 u-animated-text">Claude 4 model family</p>
              <p className="u-paragraph-s mb-8">
                Meet <a href="/claude/opus" className="underline">Claude Opus 4</a> and{' '}
                <a href="/claude/sonnet" className="underline">Claude Sonnet 4</a>, our most powerful models for coding, researching, and writing
              </p>
              <div className="u-btn-group">
                <div className="btn_main_wrap" data-wf--button-main--style="primary">
                  <span className="btn_main_text">Try Claude</span>
                </div>
                <div className="btn_main_wrap" data-wf--button-main--style="secondary">
                  <span className="btn_main_text">Build with Claude</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchHero;