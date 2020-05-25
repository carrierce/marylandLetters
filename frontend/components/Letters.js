import Letter from "./Letter";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useState, useEffect } from "react";

const Letters = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="letters-container">
      {props.isLoading && (
        <div className="flex container justify-center m-4 pb-5">
          <CircularProgress />
        </div>
      )}
      {props.data.length <= 0 && !props.isLoading && isLoaded && (
        <div className="container m-4 pb-5">
          <p>No Letters found, please adjust search</p>
        </div>
      )}
      {props.data.map((letter) => {
        return <Letter key={letter.letter_id} data={letter} />;
      })}
    </div>
  );
};

export default Letters;
