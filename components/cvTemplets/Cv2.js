import React from 'react';

const Cv2 = ({cv}) => {
    return (
        <div>

            <div className='w-10/12 mx-auto bg-slate-50 rounded-lg my-10'>
                <span>T 2</span>
                <h1 className='text-md text-blue text-center font-semibold'>{cv.firstName??""}{" "}{cv.lastName??""}</h1>
                <p className='text-center text-sm'>{cv.profession??""}</p>

            </div>

        </div>
    );
};

export default Cv2;