import React from 'react';

const MainHeader = ({ selectedImages, onDelete }) => {

    return (
        <div>
            <div className='d-flex justify-content-between'>
                <div>
                    {selectedImages.length > 0 ? <>
                        <p className='ms-3 py-3 form-check'> <input class="form-check-input mt-2 me-3" type="checkbox" checked />   <span className='h4'> {selectedImages.length} Files Selected  </span> </p>
                    </> : <h4 className='ms-3 py-3 h4'> Gallery </h4>}
                </div>
                <div className='m-3'>
                    {
                        selectedImages.length > 0 ? <p role='button'
                            onClick={onDelete} className="text-danger delete-btn h4"> {selectedImages.length == 1 ? "Delete file" : "Delete files"} </p> : ''
                    }
                </div>
            </div>
            <hr />
        </div>
    );
};

export default MainHeader;