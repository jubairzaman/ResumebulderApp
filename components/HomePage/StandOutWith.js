import React from 'react';
import Modal from '../modal';

const StandOutWith = () => {
    return (
        <div className='my-32'>
            <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">


                <div >
                    <div className='mt-28'>
                        <h1 className='font-semibold text-4xl '>Stand out with a personalized Online Resume Website</h1>
                        <p className='my-3'>There is no better first impression than having your own online resume website. After you created your resume, all it takes is one click to create your own website!</p>

                        <div className='my-10 '><Modal></Modal></div>

                    </div>

                </div>

                <div>
                    <img className='' src='mk2.png'></img>
                </div>
            </div>

        </div>
    );
};

export default StandOutWith;