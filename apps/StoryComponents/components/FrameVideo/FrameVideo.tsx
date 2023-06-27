import React from 'react'

interface FrameVideoProps {
  /**
   * Caminho do video
   */
  src: string,
  /**
   * Titulo do video
   */
  title: string,
  /**
   * Largura do video
   */
  width: number,
  /**
   * Altura do video
   */
  height: number,
  /**
   * Propriedades do video 
   */
  allow?: string,
}

/**
 * Componente que renderiza um video na tela com base nas props passadas **Precisa** por default passar o caminho do video.
 */
export const FrameVideo = ({ src, title, width, height, allow }: FrameVideoProps) => {
  return (
    <div>
      <iframe width={width} height={height} src={src} title={title} allow={allow}></iframe>
    </div>
  )
}
