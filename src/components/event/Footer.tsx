export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10 px-6 md:px-12 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>
          © {new Date().getFullYear()} STEMist Education · 501(c)(3) nonprofit
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.joinstemist.org/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
            joinstemist.org
          </a>
          <a href="mailto:ssharda@joinstemist.org" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
