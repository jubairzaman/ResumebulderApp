
import React, { useState } from "react";
import Link from "next/link"


import ClickAwayListener from '@mui/base/ClickAwayListener';
import SignIn from "./auth/signin";

export default function AuthModal() {

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
          className='rounded-lg bg-indigo-700 text-white '
          type="button"
          onClick={show}
        >Sing In
        </button>
      </ClickAwayListener>

      {showModal ? (
        <>


          <>


            <SignIn></SignIn>

            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        </>
      ) : null}
    </>
  );
}
