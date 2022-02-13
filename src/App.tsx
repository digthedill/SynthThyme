import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Synth } from "tone";

//utils and libraries
import { noteDictionary } from "./lib/noteDictionary";

//components
import Key from "./components/Key";
import MediumKnob from "./components/MediumKnob";
import KeyboardContainer from "./components/KeyboardContainer";
import SettingsContainer from "./components/SettingsContainer";
import LargeKnob from "./components/LargeKnob";
import SmallKnob from "./components/SmallKnob";
import Slider from "./components/Slider";

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
    <>
      <h1 style={{ textAlign: "center" }}>Da Synth </h1>
      <TheSynthContainer>
        <Controls>
          {/* 1:2 */}
          <div>
            <Controls>
              <SettingsContainer>
                <LargeKnob />
              </SettingsContainer>
              <SettingsContainer>
                <SmallKnob />
              </SettingsContainer>
            </Controls>
            <SettingsContainer>
              <MediumKnob />
              <MediumKnob />
              <MediumKnob />
            </SettingsContainer>
          </div>
          {/* 2:2 */}
          <SettingsContainer>
            <Slider />
            <Slider />
            <Slider />
            <Slider />
          </SettingsContainer>
        </Controls>

        {/* 1:1 */}
        <KeyboardContainer>
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
        </KeyboardContainer>
      </TheSynthContainer>
    </>
  );
};

const Controls = styled.div`
  display: flex;

  & > * {
    width: 50%;
  }
`;

const TheSynthContainer = styled.div`
  width: min-content;
  margin: auto;
  background: ${({ theme }) => theme.colors.backgroundColor};
  padding: 2rem;
  border-radius: 78px;
`;

export default App;
