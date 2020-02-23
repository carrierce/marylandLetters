import Letters from "../components/Letters";
import Layout from "../components/Layout";
import Filters from "../components/Filters";
import React from "react";
import axios from "axios";
const fetch = require("node-fetch");

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      letters: [],
      filters: {
        year: {
          enabled: false,
          value: ""
        },
        fromFirstName: {
          enabled: false,
          value: ""
        },
        day: {
          enabled: false,
          value: ""
        },
        month: {
          enabled: false,
          value: ""
        },
        wordCount: {
          enabled: false,
          value: ""
        },
        fromLastName: {
          enabled: false,
          value: ""
        },
        notes: {
          enabled: false,
          value: ""
        },
        openingNote: {
          enabled: false,
          value: ""
        },
        place: {
          enabled: false,
          value: ""
        },
        postmark: {
          enabled: false,
          value: ""
        },
        text: {
          enabled: false,
          value: ""
        },
        toAddress: {
          enabled: false,
          value: ""
        },
        toPersonFromPerson: {
          enabled: false,
          value: ""
        },
        to: {
          enabled: false,
          value: ""
        }
      }
    };
  }

  getLetters = async () => {
    let letters = await axios(
      "http://localhost:5500/api/letters/?fromFirstName=Mary"
    );
    const data = letters.data;
    this.setState({
      letters: this.state.letters.concat(data)
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let filters = {};
    const filterList = [
      "year",
      "day",
      "month",
      "wordCount",
      "fromFirstName",
      "fromLastName",
      "notes",
      "openingNote",
      "place",
      "postmark",
      "text",
      "toAddress",
      "toPersonFromPerson",
      "to"
    ];
    for (let i = 0; i < filterList.length; i++) {
      if (this.state.filters[filterList[i]].enabled) {
        filters[filterList[i]] = this.state.filters[filterList[i]].value;
      }
    }
    this.setState({
      letters: []
    });
    const response = await axios("http://localhost:5500/api/letters/", {
      params: filters
    });
    this.setState({
      letters: response.data
    });
  };

  handleInput = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      filters: {
        ...this.state.filters,
        [name]: {
          ...this.state.filters[name],
          value: e.target.value
        }
      }
    });
  };

  handleCheckbox = e => {
    const target = e.target;
    const name = target.name;
    this.setState({
      filters: {
        ...this.state.filters,
        [name]: {
          ...this.state.filters[name],
          enabled: !this.state.filters[name].enabled
        }
      }
    });
  };

  componentDidMount() {
    this.getLetters();
  }

  render() {
    console.log(this.state.filters);
    return (
      <Layout>
        <Filters
          filter={this.state.filters}
          handleInput={this.handleInput}
          handleCheckbox={this.handleCheckbox}
          handleSubmit={this.handleSubmit}
        />
        <Letters data={this.state.letters} />
      </Layout>
    );
  }
}

export default Index;
