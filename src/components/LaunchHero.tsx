import { ArrowRight } from 'lucide-react';

const LaunchHero = () => {
  const cards = [
    {
      title: "Claude 4",
      bgColor: "u-bg-clay",
      image: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682f42763b573855adea47ef_Claude-4-hero.svg",
      summary: "Introducing the next generation of Claude models: Opus 4 and Sonnet 4",
      link: "/news/claude-4"
    },
    {
      title: "API capabilities",
      bgColor: "u-bg-oat",
      image: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682e9ec60f57e3bb319199f4_Property%201%3DVariant2.svg",
      summary: "Four new capabilities to help developers build AI agents",
      link: "/news/agent-capabilities-api"
    },
    {
      title: "Claude\nCode",
      bgColor: "u-bg-coral",
      image: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd7ed0a04645bd3c2fd_Hands-Type.svg",
      summary: "Two powerful AI products — Claude Code and Claude apps, included in the Max plan",
      link: "/claude-code"
    },
    {
      title: "Research",
      bgColor: "u-bg-clay",
      image: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67d2158c590b5c5fb0248eb5_Hands-Tree.svg",
      summary: "Gather comprehensive insights from hundreds of sources, in minutes",
      link: "/news/research"
    },
    {
      title: "Integrations",
      bgColor: "u-bg-oat",
      image: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682def086450e428cc74ef6e_Hands-Puzzle.svg",
      summary: "Integrate Claude with external tools and apps for expert assistance",
      link: "/news/integrations"
    },
    {
      title: "Google Workspace",
      bgColor: "u-bg-coral",
      image: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682dee2b1413a3d7e05eccca_Nodes-Constellation.svg",
      summary: "Connect your Gmail, Calendar, and Docs for deeper insights",
      link: "/news/research"
    },
    {
      title: "Web\nsearch",
      bgColor: "u-bg-clay",
      image: "https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/682ded7772b34294f60482d8_Objects-GlobeCode.svg",
      summary: "Search the internet for more up-to-date and relevant responses",
      link: "/news/web-search"
    }
  ];

  return (
    <div className="launch_hero">
      <div className="launch_hero_sticky">
        <div className="py-16"></div>
        
        {/* Hero Header */}
        <div className="u-container u-mb-6">
          <div id="w-node-_6227ac8d-a637-59c4-a849-83b7efd2d942-9d838d65" className="launch_hero_top">
            <p aria-hidden="true" className="launch_hero_broken_tagline u-display-xxl u-animated-text">Introducing the</p>
            <p aria-hidden="true" className="launch_hero_headline u-display-xl">Introducing the Claude model 4 family</p>
            <h1 className="u-sr-only">
              <span className="u-sr-only">Introducing the Claude model 4 family</span>
            </h1>
          </div>
        </div>
        
        {/* Cards Grid */}
        <div className="launch_hero_card_row u-container">
          <div id="w-node-_4ba979a6-b914-501d-fc7b-e010ee0b926b-9d838d65" className="launch_hero_explore">
            <p className="u-detail-m u-alignment-center">Explore the latest updates</p>
            <div className="launch_hero_explore_icon">
              <ArrowRight size={20} />
            </div>
          </div>
          
          <div id="w-node-e5ed1a6a-1523-c784-20db-6070ea5cdce1-9d838d65" className="launch_hero_card_wrapper">
            {cards.map((card, index) => (
              <a key={index} href={card.link} className="launch_hero_card_link block mb-6">
                <div className={`launch_hero_card ${card.bgColor}`}>
                  <p className="u-font-display-serif u-display-m u-alignment-center text-white whitespace-pre-line">
                    {card.title}
                  </p>
                  <div className="launch_hero_card_info">
                    <div className="launch_hero_card_front">
                      <img src={card.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="launch_hero_card_back">
                      <p className="launch_hero_card_summary u-paragraph-m text-white">{card.summary}</p>
                    </div>
                  </div>
                  <p className="launch_hero_read_more u-detail-m text-white/80">Read the announcement</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="u-container u-mt-6">
          <div className="u-grid-desktop">
            <div id="w-node-_610ea239-1069-9a7b-2526-0c2784abc580-9d838d65" className="launch_hero_bottom">
              <div className="u-vflex-left-center">
                <p aria-hidden="true" className="launch_hero_broken_tagline u-display-xxl u-mb-5 u-animated-text">Claude 4 model family</p>
                <p className="u-paragraph-s u-rich-text mb-6">
                  Meet <a href="/claude/opus" className="underline">Claude Opus 4</a> and{' '}
                  <a href="/claude/sonnet" className="underline">Claude Sonnet 4</a>, our most powerful models for coding, researching, and writing
                </p>
                <div className="u-btn-group">
                  <a href="https://claude.ai/" className="btn_main_wrap" data-wf--button-main--style="primary">
                    <span className="btn_main_text">Try Claude</span>
                  </a>
                  <a href="https://console.anthropic.com/" className="btn_main_wrap" data-wf--button-main--style="secondary">
                    <span className="btn_main_text">Build with Claude</span>
                  </a>
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