const FeaturedSection = () => {
  const articles = [
    {
      title: "Tracing the thoughts of a large language model",
      category: "Interpretability",
      date: "Mar 27, 2025",
      link: "/research/tracing-thoughts-language-model"
    },
    {
      title: "Anthropic Economic Index",
      category: "Societal impacts",
      date: "Mar 27, 2025",
      link: "/economic-index"
    },
    {
      title: "Claude's extended thinking",
      category: "Product",
      date: "Feb 24, 2025",
      link: "/research/visible-extended-thinking"
    },
    {
      title: "Alignment faking in large language models",
      category: "Alignment science",
      date: "Dec 18, 2024",
      link: "/research/alignment-faking"
    },
    {
      title: "Introducing the Model Context Protocol",
      category: "Product",
      date: "Nov 25, 2024",
      link: "/news/model-context-protocol"
    }
  ];

  return (
    <section className="g_section_wrap">
      <div className="py-16"></div>
      <div className="u-container">
        <div className="u-grid-desktop">
          <div className="u-column-4">
            <div className="g_heading u-display-s u-max-width-20ch">
              <p>Featured</p>
            </div>
          </div>
          <div className="u-column-8">
            <ul aria-label="Accordion Control Group Buttons" role="list" className="w-list-unstyled">
              {articles.map((article, index) => (
                <li key={index} role="region">
                  <div className="article-list-item u-detail-m">
                    <div className="u-width-full">
                      <h3 className="u-weight-medium">{article.title}</h3>
                    </div>
                    <div className="u-hflex-between-center u-width-full u-max-width-30ch">
                      <div>
                        <div className="u-color-faded">{article.category}</div>
                      </div>
                      <div>
                        <div className="u-color-faded">&nbsp;{article.date}</div>
                      </div>
                    </div>
                    <a href={article.link} className="absolute inset-0 z-10">
                      <span className="sr-only">Read article</span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-16"></div>
      </div>
    </section>
  );
};

export default FeaturedSection;