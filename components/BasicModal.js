import Link from "next/link";
import React, { useState,useImperativeHandle } from "react";
import ClickAwayListener from '@mui/base/ClickAwayListener';

const BasicModal = React.forwardRef (function BasicModal(props, ref, small) {
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

  useImperativeHandle(ref, () => ({
    childMethod() {
      show()
    }
  }))
  return <>
  
    {showModal ? (
      <>
        <>
          <div className="h-screen flex justify-center items-center  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
          {/* <ClickAwayListener onClickAway={handleClickAway}> */}
            <div className={`absolute z-10 my-6 mx-auto  overflow-y-auto h-3/4 w-full  ${!small?"lg:w-2/5 ":"lg:w-3/4"} h-max py-2 px-4` }>
              {props.children}
            </div>
            
            <div className="opacity-25 fixed inset-0 z-0 bg-black" onClick={hide}></div>
          </div>
          
        </>
      </>
    ) : null}
  </>
});

export default BasicModal;
