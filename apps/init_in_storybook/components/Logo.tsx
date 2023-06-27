import React, { useEffect, useState } from 'react';
import './story.css';

const style = {
  logo: 'logo'
};

interface Props {
  /**
   * Tamanho da logo
   */
  size: number,
  /**
   * Caminho da logo
   */
  src: string,
}

export function Logo({ size, src }: Props) {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(prevIsPulsing => !prevIsPulsing);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const logoClassName = isPulsing ? `${style.logo} pulsing` : style.logo;

  return (
    <div>
      <a href="https://storybook.js.org/docs/react/get-started/install/" target="_blank" rel="noopener noreferrer">
        <img
          width={size}
          height={size}
          className={logoClassName}
          alt="React logo"
          src={src}
        />
      </a>
    </div>
  );
}
