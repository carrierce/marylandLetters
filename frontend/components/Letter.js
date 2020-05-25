const Letter = (props) => {
  const cleanedText = cleanText(props.data.text);
  return (
    <div className="letter container">
      <div dangerouslySetInnerHTML={{ __html: cleanedText }} />
      <br />
      <div>
        <p>
          <span className="font-bold">From:</span>{" "}
          {props.data.fromFirstName ? (
            props.data.fromFirstName
          ) : (
            <span style={{ fontStyle: "italic" }}>Unknown</span>
          )}
          {props.data.fromLastName ? (
            props.data.fromLastName
          ) : (
            <span style={{ fontStyle: "italic" }}>Unknown</span>
          )}
        </p>
        <p>
          <span className="font-bold">To:</span>{" "}
          {props.data.to ? (
            props.data.to
          ) : (
            <span style={{ fontStyle: "italic" }}>Unknown</span>
          )}
        </p>
        <p>
          <span className="font-bold">Date</span> (mm/dd/yyyy):{" "}
          {props.data.month > 0 || props.data.month != ""
            ? props.data.month
            : "?"}
          /{props.data.day > 0 || props.data.day != "" ? props.data.day : "?"}/
          {props.data.year > 0 || props.data.year != "" ? props.data.year : "?"}
        </p>
        <p></p>
      </div>
    </div>
  );
};

const cleanText = (letterText) => {
  let textToArray = letterText.split("");
  let spanOpen = false;
  let inputArray = textToArray;

  for (let i = 0; i < inputArray.length; i++) {
    if (!spanOpen) {
      if (inputArray[i] == "\t") {
        inputArray[i] = '<span class="pl-4">';
        spanOpen = true;
      }
    } else if (spanOpen) {
      if (inputArray[i] == "\t") {
        inputArray[i] = '</span><span class="pl-4">';
        spanOpen = true;
      } else if (inputArray[i] == "\r") {
        inputArray[i] = "</span><br />";
        spanOpen = false;
      } else if (i == inputArray.length - 1) {
        inputArray.push("</span>");
        spanOpen = false;
      }
    }
    if (inputArray[i] == "\r") {
      inputArray[i] = "<br />";
    }
  }

  let text = inputArray.join("");
  return text;
};

export default Letter;
