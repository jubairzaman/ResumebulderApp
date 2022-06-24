import React from 'react';
import Modal from '../modal';

const Innerpart1 = () => {
    return (
        <div>
            <div className='  grid grid-rows-2 gap-1 place-content-center mt-20 '>

                <div><img className='mx-auto' src='https://i.ibb.co/kHpZ4mg/Resumes.png'></img></div>

                <div>
                    <h1 className='text-center font-semibold text-3xl'>Build your own resume</h1>
                    <h1 className='text-center font-sm'>Create a resume in minutes and land your dream job. Try it today.</h1>
                    <div className='flex justify-center mt-5'><button
                        className='rounded-lg bg-indigo-700 text-white px-10 py-5 '
                        type="button"

                    ><Modal></Modal>
                    </button></div>

                </div>



            </div>

        </div>
    );
};

export default Innerpart1;