import React from 'react';

type TitleProps = {
  /**
   * Texto a ser exibido
   */
  text: string;
  /**
   * Tamanho da fonte
   */
  size?: number;
  /**
   * Cor padrão do texto
   */
  color?: string;
};

/**
 * Titles é um componente responsável por padronizar os textos de tags H1, sendo possível realizar algumas estilizações ou usar as defaults.
 */
export function Titles({ text, size = 24, color = 'black' }: TitleProps) {
  return <h1 style={{ fontSize: size, color, textShadow: "0px 6px 12px #00000080" }}>{text}</h1>;
}

