import React from 'react';
import './Thanks.css';
import { Profile } from './Profile';
import { Titles } from './Titles';

const style = {
    styleThanks: 'styleThanks'
}

interface Props {
    /**
     * Caminho da foto do Abraão
     */
    abraao: string,
    /**
     * Caminho da foto do Gleidson
     */
    gleidson: string,
    /**
     * Caminho da foto do Ronier    
     */
    ronier: string,
}

export function Thanks({ abraao, ronier, gleidson} : Props) {
    return (
        <div className={style.styleThanks}>
            <div>
                <Profile src={abraao} height={150} width={150} circle />
                <Titles size={40} color="white" text="Abraão Alves" />
                <Titles size={20} color="#FF4785" text="Mentor e dono de um belo bigode" />
            </div>
            <div>
                <Profile src={gleidson} height={150} width={150} circle />
                <Titles size={40} color="white" text="Gleidson Teixeira" />
                <Titles size={20} color="#FF4785" text="Professor Full Stack e ranger vermelho" />
            </div>
            <div>
                <Profile src={ronier} height={150} width={150} circle />
                <Titles size={40} color="white" text="Ronier Lima" />
                <Titles size={20} color="#FF4785" text="Professor tira dúvidas e salva vidas" />
            </div>
        </div>
    )
}
