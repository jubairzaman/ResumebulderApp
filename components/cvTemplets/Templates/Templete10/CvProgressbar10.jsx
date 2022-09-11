import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import Styles from '../../styles';


// Create Document Component
const CvProgressbar10 = ({ skillName, value }) => {

    return (
        <>
            <View style={{ display: "flex", flexDirection: "row", marginTop:"17px" ,width:"80%"}}>
        
        <View style={{ textAlign: "left", width: '100%',marginLeft:'1px' }}>
            <Text style={{ color: "#fff", textTransform: "capitalize", fontSize: "8px" }}>{(skillName != null && skillName !== "") ? skillName : "Skill Name"}</Text>
        </View>
        
        <View style={{ height: "6px", width: "80%" , backgroundColor: "#808080", borderRadius:"5px"}}>
            <View style={{ height: "6px", width: (value ?? 10) + "%", backgroundColor: "#fff", borderRadius:"5px" }}>
            </View>
        </View>

    </View>
           
        </>
    )
};
export default CvProgressbar10;