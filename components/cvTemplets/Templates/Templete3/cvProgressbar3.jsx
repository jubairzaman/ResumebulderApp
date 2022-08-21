import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const CvProgressbar31 = ({ skillName, value }) => {

    return (
        <>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center",marginTop:"7px"}}>
        
        <View style={{ textAlign: "left", width: '100%',marginLeft:'40px' }}>
            <Text style={{ color: "#ABB2B9", textTransform: "capitalize", fontSize: "8px" }}>{(skillName != null && skillName !== "") ? skillName : "Skill Name"}</Text>
        </View>
        
        <View style={{ height: "4px", width: "80%" , backgroundColor: "#BABABA",}}>
            <View style={{ height: "4px", width: (value ?? 10) + "%", backgroundColor: "#B0A273" }}>
            </View>
        </View>

    </View>
        </>
    )
};
export default CvProgressbar31;