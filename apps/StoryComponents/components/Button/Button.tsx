import React, { useState } from 'react'

interface ButtonProps {
  /**
   * Texto que aparecerá dentro do botão
   */
  texto: String,
  /**
   * Tipo do botão para a aplicação podendo ser a variação de 3 modelos
   */
  type: 'button' | 'reset' | 'submit',
  /**
   * Tamanho do botao
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Cor de fundo do botão
   */
  backgroundColor?: string;
  onClick?: (b : boolean) => void;
}

/**
 * Componente de botão padrão
 */
export const Button = (props: ButtonProps) => {
  
  const [click, setClick] = useState(false)

  return (
    <button 
    type={props.type} 
    style={{backgroundColor: props.backgroundColor}}
    onClick={() => {
      setClick(!click)
    if(props.onClick) {
      props.onClick(!click)
    }
    }}>{props.texto}</button>
  )
}
