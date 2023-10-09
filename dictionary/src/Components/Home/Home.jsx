import { useEffect, useState } from "react";
import ComponentRender from "../ComponentRender/ComponentRender";
import Form from "../Form/Form";
import * as c from "./style";

function Home() {
  const [word, setWord] = useState("");
  const [wordSearched, setWordSearched] = useState([]);
  const handleWord = (event) => {
    setWord(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getWord(e.target.value);
    setWord("");
  };

  const api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  const getWord = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Error fetching");
      }

      const data = await response.json();
      setWordSearched(data);
    } catch (error) {}
  };

  useEffect(() => {
    getWord();
  }, []);

  return (
    <>
      <c.Container>
        <Form handleWord={handleWord} word={word} handleClick={handleClick} />
      </c.Container>
      <c.Container>
        {wordSearched.map((wd, index) => (
          <ComponentRender
            key={index}
            word={wd.word}
            phonetic={wd.phonetic}
            definition={wd.meanings.map((meaning) =>
              meaning.definitions.map((def) => def.definition).join(" ")
            )}
            audio={wd.phonetics.map((a) => a)}
          />
        ))}
      </c.Container>
    </>
  );
}

export default Home;
