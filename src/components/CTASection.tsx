const CTASection = () => {
  return (
    <section className="g_section_wrap u-alignment-center u-theme-color-light">
      <div className="py-16"></div>
      <div className="u-container">
        <div>
          <div className="u-vflex-center-center u-gap-row-8">
            <div className="g_heading u-display-l u-max-width-20ch u-child-contain">
              <h2>Want to help us build the future of safe AI?</h2>
            </div>
            <div className="u-display-contents">
              <div className="u-btn-group u-mt-0">
                <a href="/jobs" className="btn_main_wrap" data-wf--button-main--style="primary">
                  <span className="btn_main_text">See open roles</span>
                </a>
                <a href="/contact-sales" className="btn_main_wrap" data-wf--button-main--style="secondary">
                  <span className="btn_main_text">Speak with sales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16"></div>
    </section>
  );
};

export default CTASection;