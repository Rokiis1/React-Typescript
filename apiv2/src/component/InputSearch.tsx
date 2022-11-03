import { useState } from "react";
import { useGetSynonyms } from "../hooks/useGetSynonyms";
import InputResults from "./InputResults";

const InputSearch = () => {
  const [word, setWord] = useState("");
  const [isLoading, synonyms, getSynonyms] = useGetSynonyms();

  const handleFetchSynonym = (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  };
  return (
    <>
      <form onClick={handleFetchSynonym}>
        <label htmlFor="word-input">Your Word</label>
        <input
          className="text-black"
          id="word-input"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <InputResults
        word={word}
        isLoading={isLoading}
        synonyms={synonyms}
        getSynonyms={getSynonyms}
        setWord={setWord}
      />
    </>
  );
};

export default InputSearch;
