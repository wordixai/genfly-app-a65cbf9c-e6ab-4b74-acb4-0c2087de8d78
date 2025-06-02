import { ExternalLink } from 'lucide-react';

const AboutSection = () => {
  const cards = [
    {
      title: "Core Views on AI Safety",
      bgColor: "u-bg-oat",
      image: "/api/placeholder/120/120",
      link: "/news/core-views-on-ai-safety"
    },
    {
      title: "Anthropic's Responsible Scaling Policy",
      bgColor: "u-bg-cactus",
      image: "/api/placeholder/120/120",
      link: "/rsp-updates"
    },
    {
      title: "Anthropic Academy: Learn to build with Claude",
      bgColor: "u-bg-heather",
      image: "/api/placeholder/120/120",
      link: "/learn"
    }
  ];

  return (
    <section className="py-16">
      <div className="u-container">
        <div className="u-vflex-stretch-top u-gap-xl">
          {/* Divider */}
          <div className="w-full h-px bg-border"></div>
          
          <div className="u-grid-desktop">
            <div className="u-column-4">
              <h2 className="u-display-m u-max-width-20ch">
                At Anthropic, we build AI to serve humanity's long-term well-being.
              </h2>
            </div>
            <div className="u-column-7">
              <div className="u-paragraph-m u-mb-8 space-y-4">
                <p>
                  While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects.
                </p>
                <p>
                  That's why we focus on building tools with human benefit at their foundation, like Claude. Through our daily research, policy work, and product design, we aim to show what responsible AI development looks like in practice.
                </p>
              </div>
            </div>
            
            {/* Cards */}
            {cards.map((card, index) => (
              <div key={index} className="u-column-4">
                <a href={card.link} className="block">
                  <div className={`card ${card.bgColor} h-full`}>
                    <div className="card-body">
                      <div className="u-vflex-left-top u-height-full u-gap-m">
                        <div className="w-full max-w-32 aspect-square mx-auto">
                          <img src={card.image} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div className="u-vflex-stretch-between u-gap-l flex-1">
                          <h3 className="u-display-s text-white">{card.title}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;