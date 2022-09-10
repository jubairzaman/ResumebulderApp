import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect,Font } from '@react-pdf/renderer';
import Jumbotron from '../../jumbotron';
import { Mobile } from '../../icons/mobile';
import { Call } from '../../icons/call';
import { Linkedini } from '../../icons/Linkedini';
import { Mail } from '../../icons/mail';



import { Address, Email } from '../../icons/address';
import { Workexperiancei } from '../../icons/WorkExperiance';
import { Education } from '../../icons/Education';
import { Reference } from '../../icons/reference';
import { Dot } from '../../icons/Dot';
import { Skill } from '../../icons/skill';
import CvProgressbar71 from './cvProgressbar3';
import LanguageProgressBar7 from './LanguageProgressBar3';


Font.register({ family: 'Roboto'});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',

  },
  section: {
    
    padding: 10,
    flexGrow: 1,
    marginTop:"20px",
    marginBottom:"30px",
    marginLeft:"20px",
    marginRight:"20px"
  
  },

  mainContainer: {
    flexDirection: 'row',
  },

  section2: {
   paddingLeft:"20px",
    width: "35%",
    backgroundColor: "rgba(92, 84, 164, 1)"
    
  },

  section1: {
    width: "65%",
  
    paddingRight:"30px"

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
    flex: "0 0 0 0 41.666667%",
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
  font1:{
    fontFamily: 'Roboto'
  }
});

// Create Document Component
const Template7 = ({ cv, heading, content }) => {
  const valueText = (value, defaultValue) => {
    if (value != null && value !== "")
      return value
    if (defaultValue != null)
      return defaultValue
    return ""
  }

  return <Document>
    <Page size="A4" style={styles.page}>

      <View style={styles.mainContainer}>


        <View style={{ ...styles.section1, ...styles.column }}>


        <View style={{ padding: "20px" ,paddingLeft:"35px", marginTop:"30px"}}>
                    {/* Profile Name and contact Information  */}

        <View style={{ ...styles.justifyCenter, }}>
              <Text style={{ fontSize: "20px", color: "#42489E" }}>{valueText(cv.firstName, "First Name")} <Text style={{ fontSize: "20px", color: "#000" }}>{valueText(cv.lastName, "Last Name")}</Text></Text>
              

              <Text style={{ fontSize: "10px", color: "#000000", marginLeft: "2px" ,marginTop:"7px" }}>{valueText(cv.profession, "Job Title")}</Text>
            </View>



            <View style={{ ...{ marginTop: "15px" } }}>



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
             
                <Text style={{ fontSize: "10px",  color: "#000000" }}> <Address/> {cv.city ?? "Address"}</Text>
              </View>
            </View>
          </View>

        </View>


    




          <View style={{ padding: "15px" ,paddingLeft:"30px" }}>


            <View style={{ width: '100%', }}>
              <Text style={{ color: "#42489E" ,fontSize: "15px" }}> <Workexperiancei></Workexperiancei>{heading ?? "Work Experiance"}</Text>
              <View style={{ marginTop:"15px"}}>
                {
                  Object.keys(cv.experiences ?? []).map((key) => {
                    let exp = cv.experiences[key];
                    return <>
                  <View style={{...styles.flex,...styles.fRow}}>
                  <View style={{marginTop:"10px" , marginLeft:"10px"}}>
                  <Dot></Dot>
                  </View>
                      <View style={{marginLeft:"25px"}}>
                      <View style={{ ...{ marginTop: "5px"  } }}>
                       

                        <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop:"2px" ,color:"#000"   } }}>{valueText(exp.jobTitle, "Job Title")} </Text>
                        <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop:"2px"   } }}>At {valueText(exp.employer, "Companey Name")},{valueText(exp.address,"Job Address")}</Text>
                        <hr></hr>
                       <View style={{}}>
                        
                       <Text style={{ ...{ fontSize: "8px" } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>
                        <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(exp.address,"Your Job Address Here")}</Text>
                       </View>
                      </View>
                      <View style={{}}>
                        <Text style={{ ...{ fontSize: "10px" , paddingTop:"3px" ,color: "#AFAFAF"  } }}>{valueText(exp.description,"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}</Text>
                      </View>
                      </View>
                  </View>
                    </>
                  })
                }
              </View>
            </View>
          </View>

          <View style={{ padding: "15px" ,paddingLeft:"30px" }}>

          <View style={{ width: '100%', }}>
              <Text style={{  color: "#42489E",fontSize: "15px" }}> <Education></Education> {heading ?? "Education"}</Text>
              <View style={{ marginTop:"15px"}}>

                {
                  Object.keys(cv.education ?? []).map((key) => {
                    let edu = cv.education[key];
                    return <>
                  <View style={{...styles.flex,...styles.fRow}}>
                  <View style={{marginTop:"10px" , marginLeft:"10px"}}>
                  <Dot></Dot>
                  </View>
                  <View style={{marginLeft:"25px"}}>
                      <View style={{ ...{ marginTop: "10px"  } }}>
                        <Text style={{ ...{ fontSize: "12px" } }}>{valueText(edu.startdate, "Start Date")}- {valueText(edu.enddate, "End Date")}</Text>
                        <hr></hr>
                        <Text style={{ ...{ fontSize: "10px", fontStyle: "bold", paddingTop:"2px"   } }}>{valueText(edu.degree, "Degree")} At {valueText(edu.school, "School Name")},{valueText(edu.address,"School Address")}</Text>

                        {/* <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(exp.address,"Your Job Address Here")}</Text> */}
                      </View>
                      <View style={{}}>
                        <Text style={{ ...{ fontSize: "10px" , paddingTop:"3px" ,color: "#AFAFAF"  } }}>{valueText(edu.description,"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain")}</Text>
                      </View>
                      </View>
                  </View>
                    </>
                  })
                }
              </View>
            </View>
          </View>



          
          <View style={{ padding: "20px" ,paddingLeft:"30px" }}>

            <View style={{ width: '100%', }}>
              <Text style={{  color: "#42489E",fontSize: "15px" }}> <Reference></Reference>{heading ?? "Reference"}</Text>
              <View>
                {
                  Object.keys(cv.reference ?? []).map((key) => {
                    let ref = cv.reference[key];
                    console.log(ref)
                    return <>
                    <View style={{ ...{ marginTop: "10px" , marginLeft:"25px" } }}>
            <Text style={{ ...{ fontSize: "10px", fontStyle: "bold" } }}>{valueText(ref.rname, "Reference Name")}</Text>

            <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{valueText(ref.rdetails, "His Details")}</Text>
          </View>

                    </>
                  })
                }

              </View>
            </View>
          </View>










        </View>



        <View style={styles.section2}>

          {/* Profile History  */}
          <View style={{...{marginTop:"30px"}}}  >



</View>

<View>

<View style={{ width: '100%', }}>

  <Text style={{ fontSize: '10px', textAlign: "justify", lineHeight: "1.4px", paddingTop: "12px", paddingRight: "30px", marginTop:"20px" ,color: "#fff", }}>{valueText(cv.phistory, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five .......")}.</Text>
</View>


<View style={{ ...{ marginTop: "30px"} }}>
            <View>

            <Text style={{ ...{ color: "#FFF", fontWeight: "200px", fontSize: "12px",marginTop:"20px" } }}>TECHNICAL SKILLS </Text>

              {
                Object.keys(cv.skills ?? []).map((key) => {
                  return <CvProgressbar71 key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
                })
              }
            </View>
            <View style={{ ...{ marginTop: "30px" } }} >

            <Text style={{ ...{ color: "#FFF", fontWeight: "200px", fontSize: "12px" } }}>LANGUAGE SKILLS</Text>
              {
                Object.keys(cv.languages ?? []).map((key) => {

                  return <LanguageProgressBar7 key={key} languageName={valueText(cv.languages[key].languageName, "Language Name")} value={cv.languages[key].expartise ?? 0} />
                })
              }
            </View>
          </View>


</View>








        </View>


      </View>

    </Page>
  </Document>
};

export default Template7;