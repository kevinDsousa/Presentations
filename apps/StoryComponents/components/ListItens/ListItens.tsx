import React from 'react'

interface ListProps {
    /**
     * Lista de principais pontos a ser mostrados
     */
    listItens?: Array<string>,
}



export function ListItens({listItens}: ListProps) {
    return (
        <div>
            <ul>{listItens ? listItens.map(item => <li>{item}</li>) : <li></li>}</ul>
        </div>
    )
}
