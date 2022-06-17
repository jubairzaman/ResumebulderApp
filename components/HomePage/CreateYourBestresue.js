import React from 'react';
import SlidingView from '../slidingView';

const CreateYourBestresue = () => {
    return (
        <div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                    <div class="grid grid-rows-2 grid-flow-col gap-4">
                        <div><div class="flex ">

                            <i class=" mx-5 las la-file-alt la-3x"></i>

                            <div >
                                <p className=' text-2xl font-semibold' >Add your info</p>
                                <p className=' mt-3'>Use pre-written phrases and interactive layouts to create a winning resume</p>
                            </div>

                        </div></div>

                        <div><div class="flex ">

                            <i class=" mx-5 las la-file-alt la-3x"></i>

                            <div >
                                <p className=' text-2xl font-semibold' >Add your info</p>
                                <p className=' mt-3'>Use pre-written phrases and interactive layouts to create a winning resume</p>
                            </div>

                        </div></div>
                    </div>
                </div>

                <div><SlidingView></SlidingView></div>



                <div>
                    <div class="grid grid-rows-2 grid-flow-col gap-4">
                        <div><div class="flex ">

                            <i class=" mx-5 las la-file-alt la-3x"></i>

                            <div >
                                <p className=' text-2xl font-semibold' >Add your info</p>
                                <p className=' mt-3'>Use pre-written phrases and interactive layouts to create a winning resume</p>
                            </div>

                        </div></div>

                        <div><div class="flex ">

                            <i class=" mx-5 las la-file-alt la-3x"></i>

                            <div >
                                <p className=' text-2xl font-semibold' >Add your info</p>
                                <p className=' mt-3'>Use pre-written phrases and interactive layouts to create a winning resume</p>
                            </div>

                        </div></div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default CreateYourBestresue;