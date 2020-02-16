import fetch from "isomorphic-unfetch";
import { Fragment } from "react";

const Index = props => {
  return (
    <div className="container m-4">
      <div dangerouslySetInnerHTML={{ __html: props.data }} />
      {/* {props.data.map(letter => {
        return (
          <div key={letter.letter_id}>
            <p>{letter.text}</p>
            <br />
            <p>{letter.fromFirstName}</p>
          </div>
        );
      })} */}
    </div>
  );
};

Index.getInitialProps = async () => {
  const response = await fetch("http://localhost:5500/api/letter/1");
  const data = await response.json();
  let textToArray = data[0].text.split("");
  let testText =
    "\tMonday \tMay 9\rMrs. Jervis\rDear Madam,\rThe Dr. pronounced\rVery regard\r\tTruly yours,\r\tJ. H. Sullivan";
  // <span class="pl-4">Monday </span><span class="pl-4">May 9</span><p> Mrs. Jervis</p><p>Dear Madam,
  // </p><p>The Dr. pronounced</p><p>Very regard</p><p><span class="pl-4">Truly yours,
  // </span></p><p><span span class="pl-4">J. H. Sullivan</span></p>
  let testTextToArray = testText.split("");
  let paragraphOpen = false;
  let spanOpen = false;

  let inputArray = textToArray;

  for (let i = 0; i < inputArray.length; i++) {
    if (!spanOpen) {
      if (
        !paragraphOpen &&
        inputArray[i] == "\t" &&
        inputArray[i - 1] == "</span></p>"
      ) {
        paragraphOpen = true;
        spanOpen = true;
        inputArray[i] = '<p><span class="pl-4">';
      }
      if (inputArray[i] == "\t") {
        spanOpen = true;
        inputArray[i] = '<span class="pl-4">';
      }
    }
    if (spanOpen && !paragraphOpen) {
      if (testTextToArray[i] == "\r") {
        spanOpen = false;
        paragraphOpen = true;
        testTextToArray[i] = "</span><p>";
      }
      if (inputArray[i] == "\t") {
        inputArray[i] = '</span><span class="pl-4">';
      }
    }
    if (!paragraphOpen) {
      if (inputArray[i] == "\r") {
        paragraphOpen = true;
        inputArray[i] = "<p>";
      }
    }
    if (paragraphOpen && !spanOpen) {
      if (inputArray[i] == "\r") {
        paragraphOpen = true;
        inputArray[i] = "</p><p>";
      }
      if (inputArray[i] == "\t" && inputArray[i + 1] == "\r") {
        paragraphOpen = true;
        inputArray[i] = "</p>";
      }
    }
    if (i == inputArray.length - 1) {
      if (paragraphOpen && spanOpen) {
        inputArray.push("</span></p>");
        paragraphOpen = false;
        spanOpen = false;
      }
      if (paragraphOpen) {
        inputArray.push("</p>");
        paragraphOpen = false;
      }
      if (spanOpen) {
        inputArray.push("</span>");
        spanOpen = false;
      }
    }
    if (spanOpen && paragraphOpen) {
      if (inputArray[i] == "\r") {
        paragraphOpen = false;
        spanOpen = false;
        inputArray[i] = "</span></p>";
      }
    }
  }

  let outputText = inputArray.join("");

  console.log(inputArray.join(""));
  return { data: outputText };
};

export default Index;
