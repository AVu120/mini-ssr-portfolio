import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../../styles/components/common/Layout.module.css";
interface Props {
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.content}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
