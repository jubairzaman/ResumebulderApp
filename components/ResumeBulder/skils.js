import React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const Skils = () => {
    function valuetext(value) {
        return `${value}°C`;
    }
    return (
        <div>

            <h1 className='font-semibold mx-5 my-5'>Skills And Experiance</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 px-5 py-5">
                <div>
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Skill
                        </span>

                        <div className='grid grid-cols-2 gap-2'>
                            <div>

                            </div>

                            <div>
                                <Box sx={{ width: 200 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={30}
                                        getAriaValueText={valuetext}
                                        valueLabelDisplay="auto"
                                        step={10}
                                        marks
                                        min={10}
                                        max={110}
                                    />

                                </Box>
                            </div>

                        </div>

                    </label>
                </div>


            </div>



        </div>
    );
};

export default Skils;