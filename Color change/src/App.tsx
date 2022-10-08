import { useEffect, useState } from "react";
import "./app.css";
import { getRandomColor } from "./hooks";
import { Result } from "./enum";

const App = () => {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<String[]>([]);
  const [result, setResult] = useState<Result | undefined>(undefined);

  const pickColor = () => {
    const correctColor = getRandomColor();
    setColor(correctColor);
    setAnswers(
      [correctColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  useEffect(() => {
    pickColor();
  }, []);

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(Result.Correct);
      pickColor();
    } else {
      setResult(Result.Wrong);
    }
  };

  return (
    <div>
      <div>
        <div className="Box" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>
            {answer}
          </button>
        ))}
        {result === Result.Wrong && <div>Wrong answer</div>}
        {result === Result.Correct && <div>Correct answer</div>}
      </div>
    </div>
  );
};

export default App;
