import React from 'react'

interface PropsInput {
  type: 'text' | 'email' | 'tel' | 'time' | 'url' | 'password' | 'color' | 'number' | 'radio',
  id?: string,
  name?: string,
  value?: string,
  placeholder?: string,
}

export const Input = ({type, id, name, value, placeholder}: PropsInput) => {
  return <input
    type={type}
    id={id}
    name={name}
    value={value}
    placeholder={placeholder} />
}