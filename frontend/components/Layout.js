import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="w-4/5 m-auto">
      <Header />
      <div className="main pt-5">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
