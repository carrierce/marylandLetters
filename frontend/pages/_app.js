import React from "react";
import App from "next/app";
import "../css/tailwind.css";
import "../css/_main.css";
import PeopleContextProvider from "../context/PeopleContext";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <PeopleContextProvider>
        <Component {...pageProps} />
      </PeopleContextProvider>
    );
  }
}
export default MyApp;
