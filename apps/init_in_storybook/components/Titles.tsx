import React from 'react';

type TitleProps = {
  text: string;
  size?: number;
  color?: string;
};

export function Titles({ text, size = 24, color = 'black' }: TitleProps) {
  return <h1 style={{ fontSize: size, color, textShadow: "0px 6px 12px #00000080", textAlign: "center" }}>{text}</h1>;
}

