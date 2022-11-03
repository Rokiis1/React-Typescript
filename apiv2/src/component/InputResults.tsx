import { Dispatch, SetStateAction } from "react";
import { Synonym } from "../interfaces/Synonym";

type Props = {
  word: string;
  isLoading: boolean;
  synonyms: Synonym[];
  getSynonyms(word: string): void;
  setWord: Dispatch<SetStateAction<string>>;
};

const InputResults = ({
  word,
  isLoading,
  synonyms,
  getSynonyms,
  setWord,
}: Props) => {
  const handleSynonymClicked = (newWord: string) => {
    setWord(newWord);
    getSynonyms(word);
  };

  return (
    <>
      {isLoading ? (
        <p>Laoding...</p>
      ) : (
        <ul>
          {synonyms?.map((synonym) => (
            <li
              onClick={() => handleSynonymClicked(synonym.word)}
              key={synonym.word}
            >
              {synonym.word}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default InputResults;
