import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="main pt-5">{props.children}</div>
    </div>
  );
};

export default Layout;
