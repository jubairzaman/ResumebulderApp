import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import Styles from '../../styles';
import { style } from '@mui/system';


// Create Document Component
const cvProgressbar5 = ({ skillName, value }) => {

    return (
        <>
            <View style={{...Styles.row,...{marginTop:"5px"}}}></View>
            <View style={{ textAlign: "left", width: '100%' }}>
                <Text style={{ color: "#000", textTransform: "capitalize", fontSize: "8px" }}>{(skillName != null && skillName !== "") ? skillName : "Your Skill Name"}</Text>
            </View>
            <View style={{ height: "3px", width: "80%", }}></View>
            <View style={{ height: "4px", width: "80%", backgroundColor: "#BABABA", }}>
                <View style={{ height: "4px", width: (value ?? 10) + "%", backgroundColor: "#000000" }}>
                </View>
            </View>
           
        </>
    )
};
export default cvProgressbar5;