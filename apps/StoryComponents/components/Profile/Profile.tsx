import React from "react";
import { ListItens } from "../ListItens/ListItens";
import '../../styles/global.css'

interface ProfileProps {
    /**
     * Texto do perfil
     */
    textProfile: string,
    /**
     * Caminho da imagem principal
     */
    src: string,
    /**
     * Tamanho da imagem principal
     */
    size: number;
    /**
     * Estilo de borda radius
     */
    circle?: boolean,
    /**
     * Src do QRcode
     */
    qrCode?: string,
    /**
     * Tamanho do QRcode
     */
    sizeQrCode?: number,
    /**
     * Texto que ficará acima do QRcode
     */
    textQrCode?: string,
    /**
     * Lista de principais pontos a ser mostrados
     */
    listItens?: Array<string>,
}

/**
 * Componente que renderiza um perfil/imagem e um QRcode. Algumas propriedades não são **obrigatórias** a implementação, como as funcionalidades do QRcode.
 */
export const Profile = ({ textProfile, src, size, circle, qrCode, sizeQrCode, textQrCode, listItens }: ProfileProps) => {
    return (
        <div className="grid gap-1 grid-cols-3 grid-rows-2">
            <div className="grid gap-1 grid-cols-1 grid-rows-2">
                <img
                    src={src}
                    alt={textProfile}
                    width={size}
                    height={size}
                    style={circle ? { borderRadius: '50%' } : {}}
                />
                <ListItens listItens={listItens}/>
            </div>
            <div>
                <p>{textQrCode}</p>
                {qrCode ? <img src={qrCode} alt="QrCode" width={sizeQrCode} height={sizeQrCode} /> : <></>}
            </div>
        </div>
    )
}