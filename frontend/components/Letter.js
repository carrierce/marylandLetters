const Letter = props => {
  const cleanedText = cleanText(props.data.text);
  return (
    <div className="container m-4">
      <hr className="pt-4" />
      <div>{props.data.fromFirstName}</div>
      <div dangerouslySetInnerHTML={{ __html: cleanedText }} />
    </div>
  );
};

const cleanText = letterText => {
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
