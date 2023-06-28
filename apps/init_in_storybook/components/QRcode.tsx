import React from "react"

interface Props {
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
     * Texto alternativo do qrcode
     */
    alt?: string,
    /**
     * Borda do QRcode
     */
    border: string
}

export const QRcode = (props: Props) => {
    return (
        <img 
        src={props.src} 
        alt={props.alt} 
        width={props.width} 
        height={props.height}
        style={{border: `8px solid ${props.border}`}}/>
    )
}