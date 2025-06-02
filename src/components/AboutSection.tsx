const AboutSection = () => {
  return (
    <section className="g_section_wrap py-16">
      <div className="u-container">
        <div className="u-vflex-stretch-top u-gap-xl">
          {/* Divider */}
          <div className="divider_wrap">
            <div className="divider_inner"></div>
          </div>
          
          <div className="u-grid-desktop">
            <div className="g_heading u-display-m u-max-width-20ch u-column-4">
              <p>At Anthropic, we build AI to serve humanity's long-term well-being.</p>
            </div>
            
            <div className="g_paragraph u-rich-text u-mb-8 u-child-contain u-column-7">
              <p>
                While no one can foresee every outcome AI will have on society, we do know that designing powerful technologies requires both bold steps forward and intentional pauses to consider the effects.
              </p>
              <p>
                That's why we focus on building tools with human benefit at their foundation, like Claude. Through our daily research, policy work, and product design, we aim to show what responsible AI development looks like in practice.
              </p>
            </div>
            
            {/* Card 1 */}
            <div className="u-column-4">
              <div className="card">
                <div className="u-bg-oat u-cover-absolute"></div>
                <div className="card-body">
                  <div className="u-vflex-left-top u-height-full u-gap-m">
                    <div className="u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center">
                      <div className="g_visual_wrap u-position-relative u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center">
                        <img 
                          src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd686b6d20bb1cd568c_Hands-Build.svg" 
                          alt="" 
                          className="g_visual_img u-cover-absolute"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="u-vflex-stretch-between u-gap-l u-height-full">
                      <div className="u-vflex-left-top u-gap-m">
                        <div className="u-vflex-wrap u-gap-m">
                          <h3 className="u-display-s">Core Views on AI Safety</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/news/core-views-on-ai-safety" className="absolute inset-0 z-10">
                  <span className="sr-only">Learn more</span>
                </a>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="u-column-4">
              <div className="card">
                <div className="u-bg-cactus u-cover-absolute"></div>
                <div className="card-body">
                  <div className="u-vflex-left-top u-height-full u-gap-m">
                    <div className="u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center">
                      <div className="g_visual_wrap u-position-relative u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center">
                        <img 
                          src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7bd72914c76f710d86fc_Hands-Stack.svg" 
                          alt="" 
                          className="g_visual_img u-cover-absolute"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="u-vflex-stretch-between u-gap-l u-height-full">
                      <div className="u-vflex-left-top u-gap-m">
                        <div className="u-vflex-wrap u-gap-m">
                          <h3 className="u-display-s">Anthropic's Responsible Scaling Policy</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/rsp-updates" className="absolute inset-0 z-10">
                  <span className="sr-only">Learn more</span>
                </a>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="u-column-4">
              <div className="card">
                <div className="u-bg-heather u-cover-absolute"></div>
                <div className="card-body">
                  <div className="u-vflex-left-top u-height-full u-gap-m">
                    <div className="u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center">
                      <div className="g_visual_wrap u-position-relative u-width-full u-max-width-16ch u-ratio-1-1 u-align-self-center">
                        <img 
                          src="https://cdn.prod.website-files.com/67ce28cfec624e2b733f8a52/67ed7b8d86b6d20bb1cd1292_Objects-Puzzle.svg" 
                          alt="" 
                          className="g_visual_img u-cover-absolute"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="u-vflex-stretch-between u-gap-l u-height-full">
                      <div className="u-vflex-left-top u-gap-m">
                        <div className="u-vflex-wrap u-gap-m">
                          <h3 className="u-display-s">Anthropic Academy: Learn to build with Claude</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="/learn" className="absolute inset-0 z-10">
                  <span className="sr-only">Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;