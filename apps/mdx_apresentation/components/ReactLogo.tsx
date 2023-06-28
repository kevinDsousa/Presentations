import React from 'react';
import './ReactLogo.css'

const style = {
  logo: 'logo'
}

interface ReactProps {
  size: number,
  src: string,
}

export function ReactLogo({ size, src }: ReactProps) {
  return (
    <div>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img width={size} height={size} className={style.logo} alt="React logo" src="https://raw.githubusercontent.com/kevinDsousa/Presentations/262924b76182cb657e8da8f79599ec70badc4d0b/mdx_apresentation/images/react.svg" />
      </a>
    </div>
  );
};
