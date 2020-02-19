import Letters from "../components/Letters";
import Layout from "../components/Layout";
const fetch = require("node-fetch");

const Index = props => {
  return (
    <Layout>
      <Letters data={props.data} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const response = await fetch(
    "http://localhost:5500/api/letters/?fromFirstName=Mary"
    // "http://localhost:5500/api/letters/?{this.state.filters}
  );
  const data = await response.json();
  return {
    data: data
  };
};

export default Index;
