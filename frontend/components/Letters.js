import Letter from "./Letter";

const Letters = (props) => {
  console.log(props.data);
  return (
    <div className="letters-container">
      {props.data.length == 0 && (
        <div className="container m-4 pb-5">
          No Letters found, please adjust search
        </div>
      )}
      {props.data.map((letter) => {
        return <Letter key={letter.letter_id} data={letter} />;
      })}
    </div>
  );
};

export default Letters;
