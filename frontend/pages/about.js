import Letters from "../components/Letters";
import Layout from "../components/Layout";
const fetch = require("node-fetch");

const About = (props) => {
  return (
    <Layout>
      <div className="about">
        <p>
          Letters From Bowling Green is a collection of letters sent to Bowling
          Green, Maryland from 1778 to 1921.
        </p>
      </div>
    </Layout>
  );
};

export default About;
