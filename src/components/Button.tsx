import React from 'react'

interface Props  {
    children: string;
    color?:'primary' | 'secondary' | 'danger' | 'success';
    onClickBtn : () => void;
}

const Button = ({children , onClickBtn , color='primary'} : Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClickBtn}>{children}</button>
  )
}

export default Button