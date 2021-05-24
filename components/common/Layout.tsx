import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
