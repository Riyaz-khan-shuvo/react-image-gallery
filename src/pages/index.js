"use client"

import { useRef, useState } from 'react';
import data from '../../data.json';

export default function Home() {
  const [products, setProducts] = useState(data);
  const [selectedImages, setSelectedImages] = useState([]);
  const dragProduct = useRef(0);
  const draggedOverProduct = useRef(0);

  const handleSort = () => {
    const productsClone = [...products];
    const temp = productsClone[dragProduct.current];
    productsClone[dragProduct.current] = productsClone[draggedOverProduct.current];
    productsClone[draggedOverProduct.current] = temp;
    setProducts(productsClone);
  };

  const handleImageSelection = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  console.log(selectedImages);

  return (
    <main className="">
      <div className="container">
        <h1 className="">List</h1>
        <div className="row">
          <div className="col-md-5 my-3">
            <div
              className={`card ${selectedImages.includes(0) ? 'selected' : ''}`}
              draggable
              onDragStart={() => (dragProduct.current = 0)}
              onDragEnter={() => (draggedOverProduct.current = 0)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => handleImageSelection(0)}
            >
              <div className="p-3">

                <div className="checkbox">
                  <input type="checkbox" checked={selectedImages.includes(0)} onChange={() => handleImageSelection(0)} />
                </div>
                <img className='img-fluid' src={products[0].productImage} alt="" />

              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              {products.slice(1, 7).map((product, index) => (
                <div
                  key={index + 1}
                  className={`col-md-4 my-3 ${selectedImages.includes(index + 1) ? 'selected' : ''}`}
                  draggable
                  onDragStart={() => (dragProduct.current = index + 1)}
                  onDragEnter={() => (draggedOverProduct.current = index + 1)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => handleImageSelection(index + 1)}
                >
                  <div className="card">

                    <div className="p-3">
                      <div className="checkbox" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" checked={selectedImages.includes(index + 1)} onChange={() => handleImageSelection(index + 1)} />
                      </div>
                      <img className='img-fluid' src={product.productImage} alt="" />

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="custom-grid">
          {products.slice(7).map((product, index) => (
            <div
              key={index + 7}
              className={`custom-col card ${selectedImages.includes(index + 7) ? 'selected' : ''}`}
              draggable
              onDragStart={() => (dragProduct.current = index + 7)}
              onDragEnter={() => (draggedOverProduct.current = index + 7)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => handleImageSelection(index + 7)}
            >
              {/* {selectedImages.includes(index + 7) && (
                <div className="selected-icon">Selected</div>
              )} */}
              <div className="p-3">

                <div className="checkbox" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" checked={selectedImages.includes(index + 7)} onChange={() => handleImageSelection(index + 7)} />
                </div>
                <img className='img-fluid' src={product.productImage} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
