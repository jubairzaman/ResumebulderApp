import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import Styles from '../../styles';


// Create Document Component
const LanguageProgressBar2 = ({ languageName, value }) => {
    const skillCount = parseInt(value / 25);


    return (
        <>
            <View style={{ height: "10px", width: "100%", }}></View>
            <View style={{ ...Styles.row, ...{ width: "100%" } }}>
                <View style={{ ...Styles.col4 }}>
                <View style={{ textAlign: "left", width: '100%',marginLeft:'10px' }}>
                        <Text style={{ color: "#ABB2B9", textTransform: "capitalize", fontSize: "8px" }}>{(languageName != null && languageName !== "") ? languageName : "Language Name"}</Text>
                    </View>

                </View>
                <View style={{ ...Styles.col8 }}>
                    <View style={{ height: "3px", width: "50%", marginTop: "4px", marginLeft: "50px" ,marginRight:"50px" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", alignContent: "center" }}>

                            {[...Array(5)].map((x, i) => {
                                return <View key={i} style={{ display: "flex", backgroundColor: "#BABABA", height: "7px", width: "7px", borderRadius: "50%" }}>
                                    {i <= skillCount ?
                                        <View key={i} style={{ backgroundColor: "#04649F", height: "7px", width: "7px", borderRadius: "50%" }}></View>
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
export default LanguageProgressBar2;