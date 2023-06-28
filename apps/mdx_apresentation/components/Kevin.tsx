import React from "react";
import './Kevin.css'

const style = {
    styleMyProfile: 'myProfile'
}

interface kevinProps {
    size: number;
    circle?: string,
    qrCode: string,
    sizeQrCode: number,
}

export function Kevin({ size, circle, qrCode, sizeQrCode }: kevinProps) {
    return (
        <>
            <h2>Kevin Sousa</h2>
            <div className={style.styleMyProfile}>
                <div>
                    <img
                        src="https://github.com/kevinDsousa.png"
                        alt="Imagem"
                        width={size}
                        height={size}
                        style={circle ? { border: '5px solid #262626', borderRadius: '50%' } : {}}
                    />
                    <ul>
                        <li>Aluno Digital College</li>
                        <li>Analista de Redes FTTH</li>
                        <li>Transição de carreira</li>
                    </ul>
                </div>
                <div>
                    <p>Escaneie o QRCode para ganhar um amigo</p>
                    <img src={qrCode} alt="QrCode" width={sizeQrCode}
                        height={sizeQrCode} />
                </div>
            </div>
        </>
    );
};