import * as React from "react";

interface FooterProps {
  logo: React.ReactNode;
  brandName: string;
  socialLinks: Array<{ icon: React.ReactNode; href: string; label: string }>;
  mainLinks: Array<{ href: string; label: string }>;
  legalLinks: Array<{ href: string; label: string }>;
  copyright: { text: string; license?: string };
}

export function Footer({ logo, brandName, socialLinks, mainLinks, legalLinks, copyright }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background pb-6 pt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            {logo}
            <span className="font-display text-xl text-primary">{brandName}</span>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                aria-label={l.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {mainLinks.map((l) => (
              <a key={l.label} href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-center">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="text-sm text-muted-foreground md:text-right">
            <p>{copyright.text}</p>
            {copyright.license && <p className="opacity-70">{copyright.license}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}
