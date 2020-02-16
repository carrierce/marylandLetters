import Letter from "./Letter";

const Letters = props => {
  return (
    <div>
      {props.data.map(letter => {
        return <Letter key={letter.letter_id} data={letter} />;
      })}
    </div>
  );
};

export default Letters;
