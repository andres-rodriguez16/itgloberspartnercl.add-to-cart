import React from 'react'
import { useProduct } from 'vtex.product-context'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { generateBlockClass } from '@vtex/css-handles'

import ButtonGroup from './ButtonGroup'
import styles from './styles.css'

export default function AddToCartInfo({ blockClass }: { blockClass: string }) {
  const productInfo = useProduct()
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)

  const {
    orderForm: { items, totalizers },
  } = useOrderForm()

  console.log('este producto tiene esta información:', productInfo)
  console.log('toal', totalizers)

  return (
    <div className={container}>
      {items.map((item: any, index: number) => {
        return (
          <div key={index} className={container__item}>
            <div>
              <img src={item.imageUrls.at1x} />
            </div>
            <div>
              <p>{item.name}</p>
              <p>{item.id}</p>
              <p>{item.price}</p>
              <p>Cant: {item.quantify}</p>
            </div>
          </div>
        )
      })}
      <div>
        <p>Tenemos {items.length} items en tu compra</p>
        <p>total:{totalizers[0]?.value}</p>
      </div>
      <ButtonGroup />
    </div>
  )
}
