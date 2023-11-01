"use client"
import { useRef, useState } from 'react'
import data from '../../data.json'

export default function Home() {
  const [products, setProducts] = useState(data)
  const dragProduct = useRef(0)
  const draggedOverProduct = useRef(0)

  const handleSort = () => {
    const productsClone = [...products]
    const temp = productsClone[dragProduct.current]
    productsClone[dragProduct.current] = productsClone[draggedOverProduct.current]
    productsClone[draggedOverProduct.current] = temp
    setProducts(productsClone)
  }

  return (
    <main className="flex min-h-screen flex-col items-center space-y-4">
      <div className="container">
        <h1 className="text-xl font-bold mt-4">List</h1>
        <div className="row">
          {products.map((product, index) => (
            <div
              key={index}
              className='col-md-4 my-3'
              draggable
              onDragStart={() => (dragProduct.current = index)}
              onDragEnter={() => (draggedOverProduct.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="card">
                <div className="p-3">
                <img className='img-fluid' src={product.productImage} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}