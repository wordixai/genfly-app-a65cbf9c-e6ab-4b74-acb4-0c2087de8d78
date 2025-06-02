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
    <section className="py-16">
      <div className="u-container">
        <div className="u-grid-desktop">
          <div className="u-column-4">
            <h2 className="u-display-s u-max-width-20ch">Featured</h2>
          </div>
          <div className="u-column-8">
            <ul className="space-y-6">
              {articles.map((article, index) => (
                <li key={index}>
                  <a href={article.link} className="block group">
                    <div className="u-detail-m">
                      <div className="w-full">
                        <h3 className="u-weight-medium group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                      </div>
                      <div className="u-hflex-between-center w-full u-max-width-30ch mt-2">
                        <div className="u-color-faded">{article.category}</div>
                        <div className="u-color-faded">{article.date}</div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;