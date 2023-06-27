import React from 'react';
import './Thanks.css';
import { Profile } from '../Profile/Profile';
import { Titles } from '../Titles/Titles';

const style = {
    styleThanks: 'styleThanks'
}

interface ThanksProps {
    ProfileValues: {
        src: string,
        size: number,
        circle: boolean,
        text: string,
    }
    TitlesProps: {
        sizeTitle: number,
        color: string,
        textTitle: string,
    }
}

/**
 * Thanks é um componente que permite associar uma imagem a um texto e um slogan ao lado.
 */
export function Thanks(props: ThanksProps) {
    return (
        <div className={style.styleThanks}>
            <div>
                <Profile src={props.ProfileValues.src} size={props.ProfileValues.size} circle={props.ProfileValues.circle} textProfile={props.ProfileValues.text} />

                <Titles size={props.TitlesProps.sizeTitle} color={props.TitlesProps.color} text={props.ProfileValues.text} />
                
                <p>{props.TitlesProps.textTitle}</p>
            </div>
        </div>
    )
}
