
import * as c from "./style";

function ComponentRender({ word, phonetic, definition, audio }) {
  return (
    <c.BoxRender>
      <c.P textTransform="uppercase">{word}</c.P>
      <c.P>{phonetic}</c.P>
      <div>
        <h2>Definition</h2>
        <c.P>{definition}</c.P>
      </div>
      <div>
        <h3>Phonetic Here</h3>
        {audio.map((audioInfo, audioIndex) => (
          <div key={audioIndex}>
            <span>{audioInfo.text}</span>
            <audio src={audioInfo.audio} preload="true" audio controls ></audio>
          </div>
        ))}
      </div>
    </c.BoxRender>
  );
}

export default ComponentRender;
