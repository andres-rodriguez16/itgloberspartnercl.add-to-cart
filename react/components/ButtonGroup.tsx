import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import './styles.css'

const ButtonGroup = () => {
  const CSS_HANDLES = ['container__buttons', 'link']
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={handles.container__buttons}>
      <div>
        <a href="/" className={handles.link}>
          CHECK OUT
        </a>
      </div>
      <div>
        <a href="/" className={handles.link}>
          Continuar comprando
        </a>
        <a href="/cart" className={handles.link}>
          Ir al carrito
        </a>
      </div>
    </div>
  )
}

export default ButtonGroup
