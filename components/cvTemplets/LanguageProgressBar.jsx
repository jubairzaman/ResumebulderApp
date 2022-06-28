import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const LanguageProgressBar = ({ languageName, value }) => {

    //console.log(value / 25);

    return (
        <>
            <View style={{ height: "10px", width: "100%", }}></View>
            <View style={{ textAlign: "left", width: '100%' }}>
                <Text style={{ color: "black", textTransform: "capitalize" }}>{(languageName != null && languageName !== "") ? languageName : "Language Name"}</Text>
            </View>
            <View style={{ height: "5px", width: "100%", }}></View>
            <View style={{ height: "6px", width: "100%", backgroundColor: "rgb(148 163 184)", }}>
                <View style={{ height: "6px", width: (value ?? 10) + "%", backgroundColor: "rgb(30 64 175)" }}>
                </View>
            </View>

            <View>
                {Array.from(5).map((_, i) => {
                    console.log(i)
                    return <Text key={i} style={{ color: "red" }}>{i}</Text>
                })}
            </View>


        </>
    )
};
export default LanguageProgressBar;