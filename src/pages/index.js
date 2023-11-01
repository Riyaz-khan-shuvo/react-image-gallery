import { useRef, useState } from 'react';
import data from '../../data.json';

export default function Home() {
  const [products, setProducts] = useState(data);
  const dragProduct = useRef(0);
  const draggedOverProduct = useRef(0);

  const handleSort = () => {
    const productsClone = [...products];
    const temp = productsClone[dragProduct.current];
    productsClone[dragProduct.current] = productsClone[draggedOverProduct.current];
    productsClone[draggedOverProduct.current] = temp;
    setProducts(productsClone);
  };

  console.log(products);

  return (
    <main className="">
      <div className="container">
        <h1 className="">List</h1>
        <div className="row">
          <div className="col-md-5">
            <div
              className="card"
              draggable
              onDragStart={() => (dragProduct.current = 0)}
              onDragEnter={() => (draggedOverProduct.current = 0)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="p-3">
                <img className='img-fluid' src={products[0].productImage} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              {products.slice(1, 7).map((product, index) => (
                <div
                  key={index + 1}
                  className="col-md-4 my-3"
                  draggable
                  onDragStart={() => (dragProduct.current = index + 1)}
                  onDragEnter={() => (draggedOverProduct.current = index + 1)}
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

          {/* {products.slice(7).map((product, index) => (
            <div
              key={index + 7}
              className="col-md-2 my-3 custom-col"
              draggable
              onDragStart={() => (dragProduct.current = index + 7)}
              onDragEnter={() => (draggedOverProduct.current = index + 7)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="card">
                <div className="p-3">
                  <img className='img-fluid' src={product.productImage} alt="" />
                </div>
              </div>
            </div>
          ))} */}
        </div>
        <div className="custom-grid">
          {products.slice(7).map((product, index) => (
            <div
              key={index + 7}
              className="custom-col" // Add a custom CSS class
              draggable
              onDragStart={() => (dragProduct.current = index + 7)}
              onDragEnter={() => (draggedOverProduct.current = index + 7)}
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
  );
}






// "use client"
// import { useRef, useState } from 'react'
// import data from '../../data.json'

// export default function Home() {
//   const [products, setProducts] = useState(data)
//   const dragProduct = useRef(0)
//   const draggedOverProduct = useRef(0)

//   const handleSort = () => {
//     const productsClone = [...products]
//     const temp = productsClone[dragProduct.current]
//     productsClone[dragProduct.current] = productsClone[draggedOverProduct.current]
//     productsClone[draggedOverProduct.current] = temp
//     setProducts(productsClone)
//   }

//   return (
//     <main className="">
//       <div className="container">
//         <h1 className="">List</h1>
//         <div className="row">
//           {products.map((product, index) => (
//             index == 0 ? <div
//               key={index}
//               className='col-md-3 my-3'
//               draggable
//               onDragStart={() => (dragProduct.current = index)}
//               onDragEnter={() => (draggedOverProduct.current = index)}
//               onDragEnd={handleSort}
//               onDragOver={(e) => e.preventDefault()}
//             >
//               <div className="card">
//                 <div className="p-3">
//                   <img className='img-fluid' src={product.productImage} alt="" />
//                 </div>
//               </div>
//             </div> : index < 7 ? <div
//               key={index}
//               className='col-md-2 my-3'
//               draggable
//               onDragStart={() => (dragProduct.current = index)}
//               onDragEnter={() => (draggedOverProduct.current = index)}
//               onDragEnd={handleSort}
//               onDragOver={(e) => e.preventDefault()}
//             >
//               <div className="card">
//                 <div className="p-3">
//                   <img className='img-fluid' src={product.productImage} alt="" />
//                 </div>
//               </div>
//             </div> : <div
//               key={index}
//               className='col-md-3 my-3'
//               draggable
//               onDragStart={() => (dragProduct.current = index)}
//               onDragEnter={() => (draggedOverProduct.current = index)}
//               onDragEnd={handleSort}
//               onDragOver={(e) => e.preventDefault()}
//             >
//               <div className="card">
//                 <div className="p-3">
//                   <img className='img-fluid' src={product.productImage} alt="" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }