import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import Styles from '../../styles';


// Create Document Component
const LanguageProgressBar7 = ({ languageName, value }) => {
    const skillCount = parseInt(value / 25);


    return (
        <>
            <View style={{ height: "17px", width: "100%", }}></View>
            <View style={{  ...{ width: "100%" } }}>
                <View >
                    <View style={{ textAlign: "left", width: '100%',marginLeft:'1px' }}>
                        <Text style={{ color: "#fff", textTransform: "capitalize", fontSize: "8px" }}>{(languageName != null && languageName !== "") ? languageName :"Language Name"}</Text>
                    </View>

                </View>
                <View style={ {marginTop:"5px"}}>
                    <View style={{ height: "3px", width: "30%", marginTop: "4px" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>

                            {[...Array(5)].map((x, i) => {
                                return <View key={i} style={{ display: "flex", backgroundColor: "#BABABA", height: "7px", width: "7px", borderRadius: "50%" }}>
                                    {i <= skillCount ?
                                        <View key={i} style={{ backgroundColor: "#fff", height: "7px", width: "7px", borderRadius: "50%" }}></View>
                                        : <></>}
                                </View>;
                                //return <Text key={i} style={{ color: "red" }}>{i} ashas has has</Text>
                            })}

                        </View>
                    </View>

                </View>

            </View>







        </>
    )
};
export default LanguageProgressBar7;