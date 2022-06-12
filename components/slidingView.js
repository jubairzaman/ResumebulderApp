import React from 'react';

const SlidingView = () => {
    let boundLogger;
    const test = (e) => {
        let self = e.currentTarget;
        let parent = self.closest('div.sliding-parent')
        boundLogger = handelMouseMove.bind(null,self);

        parent.addEventListener('mousemove',boundLogger,false)

        parent.addEventListener('mouseup', function(e){
            parent.removeEventListener('mousemove',boundLogger,false)
        })
        return false; 
    }
    
    const handelMouseMove = (cursor,e) => {
        let slidingBar = cursor.closest('div.slider-bar')
        slidingBar.style.left = e.pageX+"px";
    }
    
    const test2 = (e) => {
        let self = e.currentTarget;
        let parent = self.closest('div.sliding-parent')
        parent.removeEventListener('mousemove',boundLogger,true)
    }

    return (
        <div>
            <h1>Hello</h1>
            <div className='parent relative sliding-parent'>
                <img src='image 2.png ' className='view-1 w-full '></img>
                <img src='image 3.png' className='view-2  w-full absolute h-full top-0'></img>
                <div  className='slider-bar bg-red-900  absolute h-full top-0' style={{ width: 5+"px"}}>
                    <div onMouseDown={test} onMouseUp={test2} className='slider rounded-full bg-black absolute' style={{ width: 15+"px", height: 15+"px" , top: "calc(50% - 7px)",  left: "calc(50% - 7px)"}}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidingView;