import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const CvProgressBar2 = ({ skillName, value }) => {

    return (
        <>

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>
        
            <View style={{ textAlign: "left", width: '100%',marginLeft:'10px' }}>
                <Text style={{ color: "#ABB2B9", textTransform: "capitalize", fontSize: "8px" }}>{(skillName != null && skillName !== "") ? skillName : "Skill Name"}</Text>
            </View>
            
            <View style={{ height: "4px", width: "80%" , backgroundColor: "#BABABA", }}>
                <View style={{ height: "4px", width: (value ?? 10) + "%", backgroundColor: "#2E86C1" }}>
                </View>
            </View>

        </View>
            
        </>
    )
};
export default CvProgressBar2;