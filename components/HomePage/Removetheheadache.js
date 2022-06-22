import React from 'react';
import Modal from '../modal';

const Removetheheadache = () => {
    return (
        <div className='my-32'>
            <div className="w-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
                <div>
                    <img className='' src='mk1.png'></img>
                </div>

                <div >
                    <div className='mt-32 mx-10'>
                        <h1 className='font-semibold text-4xl '>Remove the headache from creating a resume</h1>
                        <p className='my-3'>We take care of the formatting, spell-check your content & even provide you with pre-written phrases to use. What could be easier?</p>

                        <div className='my-10 '><Modal></Modal></div>

                    </div>

                </div>
            </div>



        </div>
    );
};

export default Removetheheadache;