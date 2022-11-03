import { useState } from "react";
import { fetchSynonyms } from "../api/fetchSynonyms";
import { Synonym } from "../interfaces/Synonym";

export const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSynonyms = (word: string) => {
    setIsLoading(true);
    return fetchSynonyms(word)
      .then(setSynonyms)
      .then(() => setIsLoading(false));
  };

  return [isLoading, synonyms, getSynonyms] as const;
};
