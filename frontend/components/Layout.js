import Header from "./Header";
import Footer from "./Footer";

const Layout = props => {
  return (
    <div className="container m-4">
      <Header />
      <div className="main">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
