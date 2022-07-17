import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const cvProgressbar3 = ({ skillName, value }) => {

    return (
        <>
            <View style={{ height: "10px", width: "100%", }}></View>
            <View style={{ textAlign: "left", width: '100%' }}>
                <Text style={{ color: "#fff", textTransform: "capitalize", fontSize: "8px" }}>{(skillName != null && skillName !== "") ? skillName : "Skill Name"}</Text>
            </View>
            <View style={{ height: "3px", width: "80%", }}></View>
            <View style={{ height: "4px", width: "80%", backgroundColor: "#BABABA", }}>
                <View style={{ height: "4px", width: (value ?? 10) + "%", backgroundColor: "#fff" }}>
                </View>
            </View>
        </>
    )
};
export default cvProgressbar3;