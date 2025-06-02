const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Claude overview", href: "/claude" },
        { name: "Claude Haiku", href: "/claude/haiku" },
        { name: "Claude Sonnet", href: "/claude/sonnet" },
        { name: "Claude Opus", href: "/claude/opus" },
        { name: "Claude enterprise plan", href: "/claude/enterprise" },
        { name: "Claude for Work", href: "/claude/work" },
        { name: "Claude on mobile", href: "/claude/mobile" },
        { name: "Claude in apps", href: "/claude/apps" }
      ]
    },
    {
      title: "Research",
      links: [
        { name: "Research overview", href: "/research" },
        { name: "Publications", href: "/research/publications" },
        { name: "Claude models", href: "/claude/models" },
        { name: "Claude Sonnet 4", href: "/claude/sonnet-4" },
        { name: "Claude Haiku 3.5", href: "/claude/haiku-3-5" }
      ]
    },
    {
      title: "Conversations",
      links: [
        { name: "Transparency", href: "/transparency" },
        { name: "Constitutional AI", href: "/constitutional-ai" },
        { name: "Responsible scaling policy", href: "/rsp" },
        { name: "Safety and alignment", href: "/safety" },
        { name: "AI safety", href: "/ai-safety" },
        { name: "Customer support", href: "/support" }
      ]
    },
    {
      title: "Learn",
      links: [
        { name: "Anthropic Academy", href: "/learn" },
        { name: "Customer stories", href: "/customers" },
        { name: "Engineering at Anthropic", href: "/engineering" },
        { name: "Claude Explore", href: "/explore" }
      ]
    },
    {
      title: "Explore",
      links: [
        { name: "Become a partner", href: "/partners" },
        { name: "Careers", href: "/careers" },
        { name: "News", href: "/news" },
        { name: "Hire program", href: "/hire" }
      ]
    },
    {
      title: "Help and security",
      links: [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms of service", href: "/terms" },
        { name: "Privacy Choices", href: "/privacy-choices" },
        { name: "Responsible disclosure policy", href: "/responsible-disclosure" },
        { name: "Terms of service - consumer", href: "/terms-consumer" }
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="u-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <svg height="22" viewBox="0 0 35 24" fill="none" className="text-primary-foreground mb-4">
              <path d="M24.5475 0H19.3384L28.8374 24H34.0465L24.5475 0Z" fill="currentColor"></path>
              <path d="M9.49897 0L0 24H5.31125L7.25395 18.96H17.1914L19.1341 24H24.4454L14.9464 0H9.49897ZM8.97193 14.5029L12.2227 6.06857L15.4735 14.5029H8.97193Z" fill="currentColor"></path>
            </svg>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              © 2025 Anthropic, PBC
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;