import React from 'react';

const MainHeader = ({ selectedImages }) => {
    console.log(selectedImages);
    return (
        <div>
            {/* <h4 className='ms-3 py-3'>  </h4> */}
            {selectedImages.length > 0 ? <>


                <p className='ms-3 py-3 form-check'> <input class="form-check-input mt-2 me-3" type="checkbox" checked />   <span className='h4'> {selectedImages.length} Files Selected  </span> </p>



            </> : <h4 className='ms-3 py-3 h4'> Gallery </h4>}
            <hr />
        </div>
    );
};

export default MainHeader;