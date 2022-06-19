import React from 'react';

const Cv1 = () => {
    return (
        <div>

            <div className='w-10/12 mx-auto bg-slate-50 rounded-lg my-10'>

                <h1 className='text-md text-blue text-center font-semibold'>{firstname}{" "}{lastName}</h1>
                <p className='text-center text-sm'>{profession}</p>

            </div>

        </div>
    );
};

export default Cv1;