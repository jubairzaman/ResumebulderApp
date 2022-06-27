import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const Jumbotron = ({ heading, content }) => {
    return (
        <>
            <View style={{ height: "12px", width: "100%", }}></View>
            <View style={{  width: '100%' , backgroundColor:"red"}}>
                <Text style={{ color: "grey" }}>{heading ?? "Heading"}</Text>
                <View style={{ height: "12px", width: "100%", }}></View>
                <Text style={{ color: "grey", width:"100%" }}>{content ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</Text>
            </View>

        </>
    )
};

export default Jumbotron;