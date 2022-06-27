import React from 'react';
import { View,Text } from '@react-pdf/renderer';


// Create Document Component
const CvProgressBar = ({ skillName,value }) => {
    return (
        <>
        <View style={{ height: "12px", width: "100%",}}></View>
        <View style={{textAlign:"left", width:'100%'}}>
            <Text style={{color:"white"}}>{skillName??"Skill Name"}</Text>
        </View>
        <View style={{ height: "12px", width: "100%",}}></View>
        <View style={{ height: "6px", width: "100%", backgroundColor: "rgb(148 163 184)" ,}}>
            <View style={{ height: "6px",  width: (value??10)+"%", backgroundColor: "rgb(256 256 256)" }}>
            </View>
          </View>
        </>
    )
};

export default CvProgressBar;