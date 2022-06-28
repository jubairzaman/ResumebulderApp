import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const CvProgressBar = ({ skillName, value }) => {

    return (
        <>
            <View style={{ height: "10px", width: "100%", }}></View>
            <View style={{ textAlign: "left", width: '100%' }}>
                <Text style={{ color: "black", textTransform: "capitalize" }}>{(skillName != null && skillName !== "") ? skillName : "Skill Name"}</Text>
            </View>
            <View style={{ height: "5px", width: "100%", }}></View>
            <View style={{ height: "6px", width: "100%", backgroundColor: "rgb(148 163 184)", }}>
                <View style={{ height: "6px", width: (value ?? 10) + "%", backgroundColor: "rgb(30 64 175)" }}>
                </View>
            </View>
        </>
    )
};
export default CvProgressBar;