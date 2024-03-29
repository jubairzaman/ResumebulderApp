import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import Styles from '../../styles';


// Create Document Component
const CvProgressbar6 = ({ skillName, value }) => {

    return (
        <>
           <View style={{ width:"80%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",marginLeft:"5px", alignContent: "center",marginTop:"7px"}}>
        
        <View style={{ textAlign: "left", width: '100%',marginLeft:'10px' }}>
            <Text style={{ color: "#ABB2B9", textTransform: "capitalize", fontSize: "8px" }}>{(skillName != null && skillName !== "") ? skillName : "Skill Name"}</Text>
        </View>
        
        <View style={{ height: "4px", width: "80%" , backgroundColor: "#BABABA",}}>
            <View style={{ height: "4px", width: (value ?? 10) + "%", backgroundColor: "#000000" }}>
            </View>
        </View>

    </View>
           
        </>
    )
};
export default CvProgressbar6;