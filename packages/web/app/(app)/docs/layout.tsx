
import "../../mdx.css";


const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-svh flex-1 flex p-8">
      {children}
    </main>
  );
};

export default DocsLayout;
