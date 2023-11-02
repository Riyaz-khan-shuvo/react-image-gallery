"use client"

import { useRef, useState } from 'react';
import data from '../../data.json';
import MainHeader from '@/components/layouts/mainLayout/MainHeader';

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

  const handleDelete = () => {
    // Filter out the selected images from the products state
    const updatedProducts = products.filter((product, index) => !selectedImages.includes(index));
    setProducts(updatedProducts);
  
    // Clear the selected images array
    setSelectedImages([]);
  };

  return (
    <main className="my-3">
      <div className="container">
        <div className="card">
        <MainHeader selectedImages={selectedImages} onDelete={handleDelete} />
          <div className="px-5">
            <div className="row">
              <div className="col-md-5 my-3">
                <div
                  className={`card products ${selectedImages.includes(0) ? 'selected' : ''}`}
                  draggable
                  onDragStart={() => (dragProduct.current = 0)}
                  onDragEnter={() => (draggedOverProduct.current = 0)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => handleImageSelection(0)}
                >
                  <div className="">

                    <div className="checkbox">
                      <input type="checkbox" checked={selectedImages.includes(0)} onChange={() => handleImageSelection(0)} />
                    </div>
                    <img className='img-fluid rounded' src={products[0].productImage} alt="" />

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
                      <div className="card products">

                        <div className="">
                          <div className="checkbox" onClick={(e) => e.stopPropagation()}>
                            <input type="checkbox" checked={selectedImages.includes(index + 1)} onChange={() => handleImageSelection(index + 1)} />
                          </div>
                          <img className='img-fluid rounded' src={product.productImage} alt="" />

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="custom-grid mb-3">
              {products.slice(7).map((product, index) => (
                <div
                  key={index + 7}
                  className={`custom-col card products ${selectedImages.includes(index + 7) ? 'selected' : ''}`}
                  draggable
                  onDragStart={() => (dragProduct.current = index + 7)}
                  onDragEnter={() => (draggedOverProduct.current = index + 7)}
                  onDragEnd={handleSort}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => handleImageSelection(index + 7)}
                >
                  
                  <div className="">

                    <div className="checkbox" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" checked={selectedImages.includes(index + 7)} onChange={() => handleImageSelection(index + 7)} />
                    </div>
                    <img className='img-fluid rounded w-100' src={product.productImage} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
