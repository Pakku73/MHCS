import { Navbar } from '../components/common/navbar';
import { Footer } from '../components/common/footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
      {/* className="h-[300vh]" */}

      <Footer />
    </>
  );
};
