import Link from "next/link";
import React, { useState } from "react";

import ClickAwayListener from '@mui/base/ClickAwayListener';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const handleClickAway = () => {
    
    setShowModal(false);
  };

  const show = () => {
    setShowModal(true);
  };
  return (


    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <button
          className='rounded-lg bg-indigo-700 text-white px-10 py-6 '
          type="button"
          onClick={show}
        >Create Resume
        </button>
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
                    <h3 className="text-xl font-semibold">
                      Pick your template to start
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
                      <div className="drop-shadow-2xl">
                        <Link href={"cv-builder/1"}>
                          <img className='' src='img-1.jpg'></img>
                        </Link>
                      </div>
                      <div className="hover:transition-all drop-shadow-2xl"><Link href={"cv-builder/1"}>
                        <img className='' src='img-2.jpg'></img>
                      </Link></div>
                      <div className="drop-shadow-2xl"><Link href={"cv-builder/1"}>
                        <img className='' src='img-1.jpg'></img>
                      </Link></div>
                      <div className="drop-shadow-2xl">
                        <Link href={"cv-builder/1"}>
                          <img className='' src='img-1.jpg'></img>
                        </Link>
                      </div>
                      <div className="drop-shadow-2xl"><Link href={"cv-builder/1"}>
                        <img className='' src='img-2.jpg'></img>
                      </Link></div>
                      <div className="drop-shadow-2xl"><Link href={"cv-builder/1"}>
                        <img className='' src='img-1.jpg'></img>
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
  );
}
