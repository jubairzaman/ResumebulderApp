import React from 'react';
import { useState } from 'react';
import Modal from '../modal';
import Link from "next/link";
import ClickAwayListener from '@mui/base/ClickAwayListener';

const Removetheheadache = () => {
    
    const [showModal, setShowModal] = useState(false);
    const handleClickAway = () => {
  
      setShowModal(false);
    };
  
    const show = () => {
      setShowModal(true);
    };
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

                        <div className='flex justify-center py-10 '>
          <span className='rounded-lg bg-indigo-700 text-white px-10 py-5 '>
            <>
              <ClickAwayListener onClickAway={handleClickAway}>
                <h1 onClick={show}>Create Resume</h1>

              </ClickAwayListener>

              {showModal ? (
                <>


                  <>

                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
                      <div className="relative w-auto my-6 mx-auto  overflow-y-auto h-3/4 w-3/4  ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-xl text-black font-semibold">
                              Pick your template to start . . .
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto ">
                            <div className="grid grid-cols-3 gap-4">
                              <div className="drop-shadow-2xl ">
                                <Link href={"cv-builder/1"}>
                                  <img className='' src='cvimages/cv1.jpg'></img>
                                </Link>
                              </div>
                              <div className="hover:transition-all drop-shadow-2xl">
                                <Link href={"cv-builder/2"}>
                                  <img className='' src='cvimages/cv7.jpg'></img>
                                </Link>
                              </div>
                              <div className="drop-shadow-2xl">
                                <Link href={"cv-builder/3"}>
                                  <img className='' src='cvimages/cv8.jpg'></img>
                                </Link>
                              </div>
                              <div className="drop-shadow-2xl">
                                <Link href={"cv-builder/4"}>
                                  <img className='' src='cvimages/cv3.jpg'></img>
                                </Link>
                              </div>
                              <div className="drop-shadow-2xl"><Link href={"cv-builder/5"}>
                                <img className='' src='cvimages/cv4.jpg'></img>
                              </Link></div>
                              <div className="drop-shadow-2xl"><Link href={"cv-builder/6"}>
                                <img className='' src='cvimages/cv12.png'></img>
                              </Link></div>
                              <div className="drop-shadow-2xl"><Link href={"cv-builder/7"}>
                                <img className='' src='cvimages/cv11.png'></img>
                              </Link></div>
                              <div className="drop-shadow-2xl"><Link href={"cv-builder/8"}>
                                <img className='' src='cvimages/cv13.png'></img>
                              </Link></div>
                              <div className="drop-shadow-2xl"><Link href={"cv-builder/9"}>
                                <img className='' src='cvimages/cv14.png'></img>
                              </Link></div>
                            </div>
                          </div>
                          {/*footer*/}
                        </div>
                      </div>
                    </div>

                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                </>
              ) : null}
            </>
          </span>
        </div>


                    </div>

                </div>
            </div>



        </div>
    );
};

export default Removetheheadache;