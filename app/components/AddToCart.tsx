'use client'
import React from 'react'
import styles from './ProductCard.module.css'

const AddToCart = () => {
  return (
    <div className={styles.card}>        
        <button onClick={()=>console.log('on Click event')}>Add To Cart</button>
    </div>
  )
}

export default AddToCart