
import "../../mdx.css";


const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative">
      {children}
    </main>
  );
};

export default DocsLayout;
