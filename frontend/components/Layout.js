import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <div className="mx-5">
      <Header />
      <div className="main pt-5">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
