import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="u-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <svg height="22" viewBox="0 0 35 24" fill="none" className="text-foreground">
              <path d="M24.5475 0H19.3384L28.8374 24H34.0465L24.5475 0Z" fill="currentColor"></path>
              <path d="M9.49897 0L0 24H5.31125L7.25395 18.96H17.1914L19.1341 24H24.4454L14.9464 0H9.49897ZM8.97193 14.5029L12.2227 6.06857L15.4735 14.5029H8.97193Z" fill="currentColor"></path>
            </svg>
            <span className="ml-2 text-lg font-semibold">ANTHROPIC</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/claude" className="text-sm font-medium hover:text-primary transition-colors">Claude</a>
            <a href="/api" className="text-sm font-medium hover:text-primary transition-colors">API</a>
            <a href="/solutions" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
            <a href="/research" className="text-sm font-medium hover:text-primary transition-colors">Research</a>
            <a href="/conversations" className="text-sm font-medium hover:text-primary transition-colors">Conversations</a>
            <a href="/learn" className="text-sm font-medium hover:text-primary transition-colors">Learn</a>
            <a href="/news" className="text-sm font-medium hover:text-primary transition-colors">News</a>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Try Claude
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="/claude" className="text-sm font-medium hover:text-primary transition-colors">Claude</a>
              <a href="/api" className="text-sm font-medium hover:text-primary transition-colors">API</a>
              <a href="/solutions" className="text-sm font-medium hover:text-primary transition-colors">Solutions</a>
              <a href="/research" className="text-sm font-medium hover:text-primary transition-colors">Research</a>
              <a href="/conversations" className="text-sm font-medium hover:text-primary transition-colors">Conversations</a>
              <a href="/learn" className="text-sm font-medium hover:text-primary transition-colors">Learn</a>
              <a href="/news" className="text-sm font-medium hover:text-primary transition-colors">News</a>
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors w-fit">
                Try Claude
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;