
import React, { useState } from "react";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import SigninComponent from "./auth/signinComponent";


export default function AuthModal() {

  const [showModal, setShowModal] = useState(false);
  const handleClickAway = () => {

    setShowModal(false);
  };

  const show = () => {
    setShowModal(true);
  };

  const hide = () => {
    setShowModal(false);
  };
  return (

    <>
      <div className="">

        <button
          className=' text-indigo-700 mx-5 text-md '
          type="button"
          onClick={show}
        >Log In
        </button>


        {showModal ? (
          <>

            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
              <ClickAwayListener onClickAway={hide}>
                <div className="relative w-auto  overflow-y-auto w-3/4 ">
                  <SigninComponent></SigninComponent>
                </div>
              </ClickAwayListener>

            </div>

            <div className="opacity-25 fixed inset-0 z-40 bg-black" onMouseDown={hide}></div>

          </>
        ) : null}
      </div>
    </>
  );
}
