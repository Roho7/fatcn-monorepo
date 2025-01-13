

const Footer = () => {
  return (
    <footer className="py-4 text-center text-sm text-primary-foreground/50 border-t border-border/40">
          <p>
            Built by{" "}
            <a
              href="https://roho.live"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:underline"
            >
              Rohosen
            </a>{" "}
            and{" "}
            <a
              href="https://mistudesign.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground hover:underline"
            >
              Mistu
            </a>
          </p>
        </footer>
  )
}

export default Footer;
