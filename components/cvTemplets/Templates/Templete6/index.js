import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';
import Jumbotron from '../../jumbotron';
import { Mobile } from '../../icons/mobile';
import { Call } from '../../icons/call';
import { Mail } from '../../icons/mail';
import { Address } from '../../icons/address';

import LanguageProgressBar6 from './LanguageProgressBar6';
import CvProgressbar6 from './cvProgressbar6';
import { Blackbox } from '../../icons/blackbox';
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',

  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },

  mainContainer: {
    flexDirection: 'row',
  },

  section1: {
    padding: "15px",
    width: "50%",
    backgroundColor: "rgb(255,255,255)"
  },

  section2: {
    width: "50%",

  },

  textName: {
    fontSize: "20px",
    color: 'white'
  },

  textSmall: {
    fontSize: "10px",
    color: 'white'
  },

  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },

  justifyContentCenter: {
    justifyContent: "center",
  },

  alignItemsCenter: {
    alignItems: "center",
  },

  textCenter: {
    textAlign: "center"
  },

  wFull: {
    width: "100%"
  },
  flex: {
    display: 'flex',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "row"
  },
  fRow: {
    flexDirection: 'row'
  },
  fColumn: {
    flexDirection: 'column'
  },

  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyBetween: {
    justifyContent: "between",
  },
  justifyEnd: {
    justifyContent: "flex-end"
  },

  alignStart: {
    alignItems: 'flex-start'
  },

  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: 'flex-end'
  },

  col1: {
    flex: "0 0 8.333333%",
    maxWidth: "8.333333%",
  },
  col2: {
    flex: "0 0 16.666667%",
    maxWidth: "16.666667%",
  },
  col3: {
    flex: "0 0 25%",
    maxWidth: "25%",
  },
  col4: {
    flex: "0 0 33.333333%",
    maxWidth: "33.333333%",
  },
  col5: {
    flex: "0 0 41.666667%",
    maxWidth: "0 0 41.666667%",
  },
  col6: {
    flex: "0 0 50%",
    maxWidth: "50%",
  },
  col7: {
    flex: "0 0 58.333333%",
    maxWidth: "58.333333%",
  },
  col8: {
    flex: "0 0 66.666667%",
    maxWidth: "66.666667%",
  },
  col9: {
    flex: "0 0 75%",
    maxWidth: "75%",
  },
  col10: {
    flex: "0 0 83.333333%",
    maxWidth: "83.333333%",
  },
  col11: {
    flex: "0 0 91.666667%",
    maxWidth: "91.666667%",
  },
  col12: {
    flex: "0 0 100%",
    maxWidth: "100%",
  },
});

// Create Document Component
const Tempalte6 = ({ cv, heading, content }) => {
  const valueText = (value, defaultValue) => {
    if (value != null && value !== "")
      return value
    if (defaultValue != null)
      return defaultValue
    return ""
  }

  return <Document>
    <Page size="A4" style={styles.page}>

     <View style={{...{padding:"25px"}}}>

     <View>
     <View   >

    <View style={{...styles.flex ,...styles.fRow }}>
    <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fColumn }}>
      <Image style={{ width: "80px", height: "80px", borderRadius: "10%", marginLeft: "20px", marginVertical: "20px" }} src={(cv.profileImage != null && cv.profileImage !== "") ? cv.profileImage : "/cvpimg.png"} alt="Profile Image"></Image>
    </View>
      <View style={{...{marginLeft:"15px",marginTop:"15px"}}}>
      <Text style={{ fontSize: "30px", color: "#000000" }}>{valueText(cv.firstName, "First Name")}</Text>
      <Text style={{ fontSize: "30px", color: "#000000" }}>{valueText(cv.lastName, "Last Name")}</Text>

      <View style={{...{borderTop:"1px solid #000000",width:"400px" ,marginTop:"3px",marginBottom:"3px"}}}></View>

 

<Text style={{ fontSize: "10px", color: "#000000", marginLeft: "2px" }}>{valueText(cv.profession, "Job Title")}</Text>
</View>
      </View>
    

  </View>

     </View>


     <View style={{...styles.mainContainer}}>


<View style={{ ...styles.section1, ...styles.column }}>
  

  <View>
    {/* <Text style={{ ...styles.textCenter, ...{ color: "#000000", fontWeight: "200px" } }}>Why Me ? </Text> */}
    <View style={{ width: '100%', }}>
    <Text style={{ color: "#000000", marginBottom:"15px" ,fontSize:"15px" }}><Blackbox></Blackbox>  {heading ?? "Profile"}</Text>


      <Text style={{ fontSize: '10px', textAlign: "justify", lineHeight: "1.4px", paddingTop: "12px", paddingRight: "30px", color: "rgb(71 85 105)", }}>{valueText(cv.phistory, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}.</Text>
    </View>



  </View>

  <View style={{ ...{ marginTop: "20px" } }}>
  <Text style={{ color: "#000000", marginBottom:"15px" ,fontSize:"15px" }}><Blackbox></Blackbox>  {heading ?? "Contact"}</Text>


    <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
      <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
     
        <Text style={{ fontSize: "10px",  color: "#000000" }}> <Call/> {cv.phone ?? "Phone Number"}</Text>
      </View>
    </View>


    <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
      <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
      
        <Text style={{ fontSize: "10px",  color: "#000000" }}> <Mail/> {cv.email ?? "Email"}</Text>
      </View>
    </View>

    <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
      <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
     
        <Text style={{ fontSize: "10px",  color: "#000000" }}> <Address/>  {cv.city ?? "Address"}</Text>
      </View>
    </View>
  </View>


  <View style={{ ...{ marginTop: "20px"} }}>
    <View>
    <Text style={{ color: "#000000", marginBottom:"15px" ,fontSize:"15px" }}><Blackbox></Blackbox>  {heading ?? "Professional Skills"}</Text>


      {
        Object.keys(cv.skills ?? []).map((key) => {
          return <CvProgressbar6  key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0}></CvProgressbar6>
        })
      }
    </View>
    <View style={{ ...{ marginTop: "20px" } }} >

    <Text style={{ color: "#000000", marginBottom:"15px" ,fontSize:"15px" }}><Blackbox></Blackbox>  {heading ?? "Language"}</Text>
      {
        Object.keys(cv.languages ?? []).map((key) => {

          return <LanguageProgressBar6 key={key} languageName={valueText(cv.languages[key].languageName, "Language Name")} value={cv.languages[key].expartise ?? 0} />
        })
      }
    </View>
  </View>

</View>





<View style={styles.section2}>



  <View style={{ padding: "15px" }}>

    <View style={{ width: '100%', }}>
    <Text style={{ color: "#000000", marginBottom:"15px" ,fontSize:"15px" }}><Blackbox></Blackbox>  {heading ?? "Work Experiance"}</Text>
      <View>
        {
          Object.keys(cv.experiences ?? []).map((key) => {
            let exp = cv.experiences[key];
            return <>
              <View style={{ ...{ marginTop: "10px" } }}>
                
                <hr></hr>
                <Text style={{ ...{ fontSize: "13px", fontStyle: "bold"  } }}>{valueText(exp.jobTitle, "Job Title")} at {valueText(exp.employer, "Employeer")}</Text>
                <Text style={{ ...{ fontSize: "10px", } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>

                <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{exp.address}</Text>
              </View>
              <View style={{}}>
                <Text style={{ ...{ fontSize: "10px" } }}> {valueText(exp.description, "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}</Text>
              </View>
            </>
          })
        }
      </View>
    </View>
  </View>

{/* EDUCATION PART   */}
  <View style={{ padding: "15px" }}>

    <View style={{ width: '100%', }}>
    <Text style={{ color: "#000000", marginBottom:"15px" ,fontSize:"15px" }}><Blackbox></Blackbox>  {heading ?? "  Education"}</Text>
      <View>
        {
          Object.keys(cv.education ?? []).map((key) => {
            let edu = cv.education[key];
            return <>
              <View style={{ ...{ marginTop: "10px" } }}>
                <View style={{ ...styles.flex, ...styles.fRow }}>
                  
                </View>
                <Text style={{ ...{ fontSize: "13px", fontStyle: "bold" } }}>{valueText(edu.school, "Job Title")} at {valueText(edu.degree, "Employeer")}</Text>
                <Text style={{ ...{ fontSize: "10px", } }}>{valueText(edu.startdate, "Start Date")}- {valueText(edu.enddate, "End Date")}</Text>
                  <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{edu.address}</Text>


              </View>
              <View style={{ ...{ width: "80%" } }}>
                <Text style={{ ...{ fontSize: "10px" } }}>{edu.description}</Text>
              </View>
            </>
          })
        }

      </View>
    </View>
  </View>

  

  <View style={{ padding: "15px" }}>

    <View style={{ width: '100%', }}>
    <Text style={{ color: "#000000", marginBottom:"15px" ,fontSize:"15px" }}><Blackbox></Blackbox>  {heading ?? " Referece"}</Text>      <View>
        {
          Object.keys(cv.reference ?? []).map((key) => {
            let ref = cv.reference[key];
            return <>
              <View style={{ ...{ marginTop: "10px" } }}>
                <Text style={{ ...{ fontSize: "13px", fontStyle: "bold" } }}>{valueText(ref.rname, "rname")}</Text>

                <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{ref.rdetails}</Text>
              </View>

            </>
          })
        }

      </View>
    </View>
  </View>




</View>


</View>
     </View>

    </Page>
  </Document>

};

export default Tempalte6;