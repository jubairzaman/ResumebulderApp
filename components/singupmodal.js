import React, { useState } from "react";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import SigninComponent from "./auth/signinComponent";

const Singupmodal = () => {
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
        <div>
            <>
                <div className="">

                    <button
                        className='rounded-lg bg-indigo-700 text-white py-3 px-4 mx-2  text-md'
                        type="button"
                        onClick={show}
                    >Sing Up
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



        </div>
    );
};

export default Singupmodal;