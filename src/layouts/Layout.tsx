import { Navbar } from '../components/common/navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <main className="h-[300vh]">{children}</main>

      {/* <Footer /> */}
    </>
  );
};
