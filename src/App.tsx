import React, { useEffect, useState, useCallback, useRef } from "react";
import styled from "styled-components";
import { Synth } from "tone";
import { noteDictionary } from "./lib/noteDictionary";
import Key from "./components/Key";

/**TODO:
 * 1- refactor synth start to ref?
 */

const App: React.FC = () => {
  const [keyboardInput, setKeyboardInput] = useState("");
  const [synth, setSynth] = useState(new Synth().toDestination());
  const [playNote, setPlayNote] = useState({ isPressed: false, note: "" });

  const handleUserKeyPress = useCallback(
    (event) => {
      const { key } = event;
      if (Object.keys(noteDictionary).includes(key)) {
        setKeyboardInput(key);
        let note = noteDictionary[key];
        triggerSynth(note, keyboardInput);
      }
    },
    [keyboardInput]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const triggerSynth = (note: string, input: string) => {
    setPlayNote({ isPressed: true, note });
    synth.triggerAttackRelease(`${note}`, "8n");
    setTimeout(() => {
      setPlayNote({ isPressed: false, note: "" });
    }, 300);
  };

  return (
    <div className="App">
      <SynthContainer>
        {Object.keys(noteDictionary).map((key) => {
          return (
            <Key
              key={key}
              note={noteDictionary[key]}
              keyboardInput={key}
              triggerSynth={triggerSynth}
              playNote={playNote}
            />
          );
        })}
      </SynthContainer>
    </div>
  );
};

const SynthContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default App;
