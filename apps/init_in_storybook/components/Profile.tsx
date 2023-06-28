import React from 'react';

interface ImageProps {
  /**
   * Caminho da imagem
   */
  src: string;
  /**
   * Altura da image
   */
  height: number;
  /**
   * Largura da image
   */
  width: number;
  /**
   * Adiciona borda arredondada
   */
  circle?: boolean,
}

export function Profile(props: ImageProps) {
  return (
    <img
      src={props.src}
      alt="Imagem"
      width={props.width}
      height={props.height}
      style={
        props.circle ?
          {
            border: '5px solid #262626',
            borderRadius: '50%'
          }
          :
          {}
      }
    />
  );
};

