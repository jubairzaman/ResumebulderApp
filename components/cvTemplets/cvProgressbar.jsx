import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const CvProgressBar = ({ skillName, value }) => {

    return (
        <>
            <View style={{ height: "10px", width: "100%", }}></View>
            <View style={{ textAlign: "left", width: '100%' }}>
                <Text style={{ color: "black", textTransform: "capitalize", fontSize: "8px" }}>{(skillName != null && skillName !== "") ? skillName : "Skill Name"}</Text>
            </View>
            <View style={{ height: "3px", width: "80%", }}></View>
            <View style={{ height: "4px", width: "80%", backgroundColor: "rgb(148 163 184)", }}>
                <View style={{ height: "4px", width: (value ?? 10) + "%", backgroundColor: "rgb(30 64 175)" }}>
                </View>
            </View>
        </>
    )
};
export default CvProgressBar;