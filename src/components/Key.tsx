import React from "react";
import styled from "styled-components";

interface KeyProps {
  note: string;
  keyboardInput: string;
  triggerSynth: Function;
  playNote: {
    isPressed: boolean;
    note: string;
  };
}

const Key = ({
  note,
  keyboardInput,
  triggerSynth,
  playNote,
}: KeyProps): JSX.Element => {
  const handleClick = () => {
    triggerSynth(note, keyboardInput);
  };

  const pianoKeyColor = (note: string): string => {
    if (note.includes("#")) {
      return "black";
    } else {
      return "white";
    }
  };

  return (
    <div>
      {pianoKeyColor(note) === "black" ? (
        <BlackKey onClick={handleClick} playNote={playNote} note={note}>
          {note}
        </BlackKey>
      ) : (
        <WhiteKey onClick={handleClick} playNote={playNote} note={note}>
          {note}
        </WhiteKey>
      )}
    </div>
  );
};

interface Props {
  playNote: { isPressed: boolean; note: string };
  note: string;
}

const BlackKey = styled.button<Props>`
  padding: 0.8rem;
  height: ${({ theme }) => theme.blackKey.height};
  width: ${({ theme }) => theme.blackKey.width};
  border-radius: ${({ theme }) => theme.blackKey.borderRadius};
  background: ${({ theme }) => theme.colors.keyColor};
  box-shadow: ${({ theme }) => theme.colors.keyShadow};
  margin: 0.3rem;
  color: white;
`;

const WhiteKey = styled.button<Props>`
  padding: 0.8rem;
  height: ${({ theme }) => theme.whiteKey.height};
  width: ${({ theme }) => theme.whiteKey.width};
  border-radius: ${({ theme }) => theme.whiteKey.borderRadius};
  background: ${({ theme }) => theme.colors.keyColor};
  box-shadow: ${({ theme }) => theme.colors.keyShadow};
  margin: 0.3rem;
`;

export default Key;
