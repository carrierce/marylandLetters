import Letters from "../components/Letters";
import Layout from "../components/Layout";
import Filters from "../components/Filters";
import React from "react";
import axios from "axios";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const fetch = require("node-fetch");

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      filtersShown: false,
      filterApplied: false,
      letters: [],
      filters: {
        year: "",
        fromFirstName: "",
        day: "",
        month: "",
        wordCount: "",
        fromLastName: "",
        notes: "",
        openingNote: "",
        place: "",
        postmark: "",
        text: "",
        toAddress: "",
        toPersonFromPerson: "",
        to: "",
      },
    };
  }

  getLetters = async () => {
    let letters = await axios(
      "https://lettersbowlinggreen.com/api/letters/?fromFirstName=Mary"
    );
    const data = letters.data;
    this.setState({
      letters: this.state.letters.concat(data),
    });
  };

  handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }
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
      "to",
    ];
    for (let i = 0; i < filterList.length; i++) {
      if (this.state.filters[filterList[i]] !== "") {
        filters[filterList[i]] = this.state.filters[filterList[i]];
      }
    }
    this.setState({
      letters: [],
    });
    const response = await axios(
      "https://lettersbowlinggreen.com/api/letters/",
      {
        params: filters,
      }
    );
    this.setState({
      letters: response.data,
      filterApplied: true,
    });
  };

  handleClearFilter = (filterName) => {
    console.log(filterName);
    this.setState(
      {
        filters: {
          ...this.state.filters,
          [filterName]: "",
        },
      },
      this.handleSubmit
    );
  };

  handleInput = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({
      filters: {
        ...this.state.filters,
        [name]: e.target.value,
      },
    });
  };

  showFilters = () => {
    this.setState({
      filtersShown: !this.state.filtersShown,
    });
  };

  componentDidMount() {
    this.getLetters();
  }

  render() {
    return (
      <Layout>
        <div className="filter-nav-div">
          <span className="font-semibold text-xl">Filters</span>
          {!this.state.filtersShown && (
            <KeyboardArrowRightIcon
              className="arrow-icon"
              onClick={this.showFilters}
            />
          )}
          {this.state.filtersShown && (
            <KeyboardArrowDownIcon
              className="arrow-icon"
              onClick={this.showFilters}
            />
          )}
        </div>
        {this.state.filtersShown && (
          <Filters
            filter={this.state.filters}
            filterApplied={this.state.filterApplied}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            handleClearFilter={this.handleClearFilter}
          />
        )}
        <Letters data={this.state.letters} />
      </Layout>
    );
  }
}

export default Index;
