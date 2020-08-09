import Letters from "../components/Letters";
import Layout from "../components/Layout";
import Filters from "../components/Filters";
import React from "react";
import axios from "axios";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
const fetch = require("node-fetch");
const BASE_URI = "https://lettersbowlinggreen.com/api/letters";
class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      filtersShown: false,
      filterApplied: false,
      letters: [],
      isLoading: false,
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
    this.setState({
      isLoading: true,
    });
    let letters = await axios(`${BASE_URI}/?fromFirstName=Mary`);
    const data = letters.data;
    this.setState({
      letters: this.state.letters.concat(data),
      isLoading: false,
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
      isLoading: true,
    });
    const response = await axios(`${BASE_URI}/`, {
      params: filters,
    });
    this.setState({
      letters: response.data,
      filterApplied: true,
      isLoading: false,
    });
  };

  handleClearFilter = (filterName) => {
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
        [name]: e.target.value.toString(),
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
    this.setState({
      isLoaded: true,
    });
  }

  render() {
    return (
      <Layout>
        {this.state.isLoaded && (
          <div className="filter-nav-div">
            {!this.state.filtersShown && !this.state.isLoading && (
              <>
                <span className="font-semibold text-xl">Filters</span>
                <KeyboardArrowRightIcon
                  className="arrow-icon"
                  onClick={this.showFilters}
                />
              </>
            )}
            {this.state.filtersShown && (
              <>
                <span className="font-semibold text-xl">Filters</span>
                <KeyboardArrowDownIcon
                  className="arrow-icon"
                  onClick={this.showFilters}
                />
              </>
            )}
          </div>
        )}
        {this.state.filtersShown && (
          <Filters
            filter={this.state.filters}
            filterApplied={this.state.filterApplied}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            handleClearFilter={this.handleClearFilter}
          />
        )}
        <Letters data={this.state.letters} isLoading={this.state.isLoading} />
      </Layout>
    );
  }
}

export default Index;
