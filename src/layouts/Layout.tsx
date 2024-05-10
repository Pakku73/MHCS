import { Navbar } from '../components/common/navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      {/* <Footer /> */}
    </>
  );
};
