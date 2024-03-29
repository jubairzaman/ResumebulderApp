import React from 'react';
import { View, Text } from '@react-pdf/renderer';


// Create Document Component
const Jumbotron = ({ heading, content }) => {
    return (
        <View style={{ padding: "15px" }}>

            <View style={{ width: '100%', }}>
                <Text style={{ color: "black" }}>{heading ?? "Heading"}</Text>
                <Text style={{ fontSize:'10px', textAlign: "justify", lineHeight: "1.4px", paddingTop: "12px", paddingRight: "30px", color: "rgb(71 85 105)", }}>{content ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</Text>
            </View>
        </View>
    )
};

export default Jumbotron;