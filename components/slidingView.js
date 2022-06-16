import React from 'react';

const SlidingView = () => {
 
    
    const handelMouseMove = (e) => {
        let bound = e.currentTarget.getBoundingClientRect();
        let parent =  e.currentTarget;
        let slidingBar = parent.querySelector('div.slider-bar')
        let view1 = parent.querySelector('.view-1')
        let view2 = parent.querySelector('.view-2')
        slidingBar.style.left = (e.pageX-bound.x)+"px";
        view1.style.clip = "rect(auto, auto, auto, "+(e.pageX-bound.x)+"px)" 
        view2.style.clip = "rect(auto, "+(e.pageX-bound.x)+"px, auto, auto)" 
    }
    
    return (
        <div>
            <div className='parent relative sliding-parent overflow-hidden' onMouseMove={handelMouseMove}>
                <img src='image 2.png ' className='view-1 w-full '></img>
                <img src='image 3.png' className='view-2  w-full absolute h-full top-0 left-0'></img>
                <div  className='slider-bar bg-red-900  absolute h-full top-0' style={{ width: 5+"px"}}>
                    <div className='slider rounded-full bg-black absolute' style={{ width: 15+"px", height: 15+"px" , top: "calc(50% - 7px)",  left: "calc(50% - 7px)"}}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingView;