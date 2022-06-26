import React from 'react';
import { View } from '@react-pdf/renderer';


// Create Document Component
const CvProgressBar = ({  }) => {
    return (
        <View style={{ height: "6px", width: "100%", backgroundColor: "rgb(148 163 184)" , marginTop:"10px"}}>
            <View style={{ height: "6px", width: "50px", backgroundColor: "rgb(256 256 256)" }}>
            </View>
          </View>
    )
};

export default CvProgressBar;