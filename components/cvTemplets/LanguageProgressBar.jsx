import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const LanguageProgressBar = ({ languageName, value }) => {
    const skillCount = parseInt(value/25);
    

    return (
        <>
            <View style={{ height: "10px", width: "100%", }}></View>
            <View style={{ textAlign: "left", width: '100%' }}>
                <Text style={{ color: "black", textTransform: "capitalize" }}>{(languageName != null && languageName !== "") ? languageName : "Language Name"}</Text>
            </View>
            <View style={{ height: "5px", width: "100%", }}></View>
            

            <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

                {[...Array(5)].map((x, i) => {
                    return <View key={i} style={{backgroundColor:"rgb(148 163 184)", height:"10px", width:"10px", borderRadius:"50%"}}>
                        {i<=skillCount?
                        <View key={i} style={{backgroundColor:"rgb(30 64 175)", height:"10px", width:"10px", borderRadius:"50%"}}></View>
                        :<></>}
                    </View>;
                    //return <Text key={i} style={{ color: "red" }}>{i} ashas has has</Text>
                })}

            </View>


        </>
    )
};
export default LanguageProgressBar;