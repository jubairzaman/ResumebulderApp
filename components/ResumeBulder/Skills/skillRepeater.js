import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
const Skillrepeater = ({updateSkillData}) => {

    const valuetext = (value) => {
        if (value == 25) {
            return "Biginner"
        } else if (value == 50) {
            return "Skillful"
        } else if (value == 75) {
            return "Experienced"
        } else if (value == 100) {
            return "Expert"
        } else {
            return "Novice"
        }
    }
    const [skillValues, setskillValues] = useState([{ skillName: "", expartise: "" }])

    let handleNameChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["skillName"] = value;
        setskillValues(newFormValues);
        updateSkillData(newFormValues);
        
    }

    let handleExpartiseChange = (i, value) => {
        let newFormValues = [...skillValues];
        newFormValues[i]["expartise"] = value;
        setskillValues(newFormValues);
        updateSkillData(newFormValues);
    }
    let addFormFields = () => {
        let newFormValues = [...skillValues,{ skillName: "", expartise: "0" }];
        setskillValues(newFormValues)
        updateSkillData(newFormValues);
    }

    let removeFormFields = (i) => {
        let newFormValues = [...skillValues];
        newFormValues.splice(i, 1);
        setskillValues(newFormValues)
        updateSkillData(newFormValues);
    }

    return (
        <>
            {skillValues.map((element, index) => (
               <div className='p-5'>
            
               <div>
   
               <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                       {element.skillName===""?"Not Specified":element.skillName}
                   </span>
                   <span className=" block text-sm font-medium text-slate-700">
                       {valuetext(element.expartise)}
                   </span>
                   <button onClick={
                       ()=>{
                           removeFormFields(index)
                       }
                   }>Delete</button>
   
                   <div className='grid grid-cols-2 gap-2 mt-4'>
                       <div>
                           <label class="block">
                               <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Skill</span>
                               <input onChange={
                                   (e)=>{
                                       handleNameChange(index,e.target.value);
                                       //setSkillName(e.target['value']);
                                   }
                               } value={element.skillName} type="text" name="website" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="" />
                           </label>
                       </div>
   
                       <div className='flex justify-center align-items-center'>
                           <div className='flex mt-5 w-full items-center px-4'>
                               <Slider
                                   aria-label="Level"
                                   value={element.expartise}
                                   valueLabelFormat={valuetext}
                                   valueLabelDisplay="on"
                                   step={25}
                                   marks
                                   min={0}
                                   max={100}
                                   onChange={
                                       (event, value, thumb)=>{
                                           //setexpartise(value);
                                           //console.log(value,thumb);
                                           handleExpartiseChange(index,value);
                                       }
                                   }
                               />
                               </div>
                           
                       </div>
   
                   </div>
   
               </div>
           </div>
            ))}
            <button className="button add" type="button" onClick={() => addFormFields()}>{skillValues.length?"Add More":"Add Skill"}</button>

        </>
    )
}
export default Skillrepeater;