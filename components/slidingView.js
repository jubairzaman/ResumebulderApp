import React from 'react';

const SlidingView = () => {


    const handelMouseMove = (e) => {
        let bound = e.currentTarget.getBoundingClientRect();
        let parent = e.currentTarget;
        let slidingBar = parent.querySelector('div.slider-bar')
        let view1 = parent.querySelector('.view-1')
        let view2 = parent.querySelector('.view-2')
        slidingBar.style.left = (e.pageX - bound.x) + "px";
        view1.style.clip = "rect(auto, auto, auto, " + (e.pageX - bound.x) + "px)"
        view2.style.clip = "rect(auto, " + (e.pageX - bound.x) + "px, auto, auto)"
    }

    return (
        <div className='px-2 overflow-hidden '>
            <div className=''>
                <div className='parent relative sliding-parent overflow-hidden drop-shadow-lg rounded-md' onMouseMove={handelMouseMove}>
                    <img src='img-1.jpg ' className='view-1 w-full '></img>
                    <img src='img-2.jpg ' className='view-2  w-full absolute h-full top-0 left-0'></img>
                    <div className='slider-bar bg-blue-700  absolute h-full top-0' style={{ width: 5 + "px" }}>
                        <div className='slider rounded-full bg-blue-600 absolute' style={{ width: 15 + "px", height: 15 + "px", top: "calc(50% - 7px)", left: "calc(50% - 7px)" }}>

                        </div>

                        <div className="bg-violet-electric-indigo w-34px h-34px rounded-full flex items-center justify-center space-x-2.5px text-violet-electric-indigo"><div className="absolute top-0 left-5 text-xs font-medium">AFTER</div><div className="w-1.67px h-3 rounded-5px bg-white"></div><div className="w-1.67px h-3 rounded-5px bg-white"></div><div className="w-1.67px h-3 rounded-5px bg-white"></div><div className="absolute top-0 right-5 text-xs font-medium">BEFORE</div></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingView;