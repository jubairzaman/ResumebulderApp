import React from 'react';
import { useState } from 'react';
import Modal from '../modal';
import Link from "next/link";
import ClickAwayListener from '@mui/base/ClickAwayListener';

const DashNav = () => {

    const [showModal, setShowModal] = useState(false);
    const handleClickAway = () => {
  
      setShowModal(false);
    };
  
    const show = () => {
      setShowModal(true);
    };


    
    return (
        <div>



            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">

                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dashboard</span>
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

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



                        </button>


                        <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Resumes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cover Letters</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Virtual Resume</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>



        </div>
    );
};

export default DashNav;