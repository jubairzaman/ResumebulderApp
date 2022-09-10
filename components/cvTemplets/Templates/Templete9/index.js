import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Svg, Path, G, Rect } from '@react-pdf/renderer';


import { BlueDot } from '../../icons/BlueDot';
import CvProgressbar91 from './CvProgressbar8';
import LanguageProgressBar91 from './LanguageProgressBar8';


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
    width: "38%",
    backgroundColor: "rgb(255,255,255)"
  },

  section2: {
    width: "70%",

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
const Tempalte9 = ({ cv, heading, content }) => {
  const valueText = (value, defaultValue) => {
    if (value != null && value !== "")
      return value
    if (defaultValue != null)
      return defaultValue
    return ""
  }

  return <Document>
    <Page size="A4" style={styles.page}>

      <View style={{...styles.mainContainer,...{padding:"20px"}}}>


        <View style={{ ...styles.section1, ...styles.column }}>
          <View  style={{...styles.flex,...styles.fRow}}  >

          <View style={{ ...styles.flex, ...styles.justifyCenter, ...styles.fColumn }}>
              <Image style={{ width: "48px", height: "48px", borderRadius: "50%", marginRight: "15px", marginVertical: "20px" }} src={(cv.profileImage != null && cv.profileImage !== "") ? cv.profileImage : "/cvpimg.png"} alt="Profile Image"></Image>
            </View>

          <View style={{ ...styles.justifyCenter, }}>
              <Text style={{ fontSize: "15px", color: "#0D6EFD" }}>{valueText(cv.firstName, "First Name")} {valueText(cv.lastName, "Last Name")}</Text>

              <Text style={{ fontSize: "10px", color: "#3D8BFD", marginLeft: "2px" ,paddingVertical:"4px" }}>{valueText(cv.profession, "Job Title")}</Text>
            </View>
            

          </View>

          <View>
            {/* <Text style={{ ...styles.textCenter, ...{ color: "#000000", fontWeight: "200px" } }}>Why Me ? </Text> */}
            <View style={{ width: '100%', }}>

              <Text style={{ fontSize: '10px', textAlign: "justify", lineHeight: "1.4px", paddingTop: "10px", paddingRight: "30px", color: "rgb(71 85 105)", }}>{valueText(cv.phistory, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio dolor et bibendum tristique ipsum tincidunt. Maecenas pharetra viverra mattis ac adipiscing purus. Mi feugiat in ac dignissim lacus. Leo lobortis purus vitae metus et.")}.</Text>
            </View>



          </View>

          <View style={{ ...{ marginTop: "20px" } }}>
            {/* <Text style={{ ...{ color: "#0D6EFD", fontWeight: "200px", fontSize: "12px" } }}>CONTACT ME </Text> */}


            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
             
                <Text style={{ fontSize: "10px",  color: "#000000" }}><BlueDot></BlueDot> {cv.phone ?? "Phone Number"}</Text>
              </View>
            </View>


            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
              
                <Text style={{ fontSize: "10px",  color: "#000000" }}><BlueDot></BlueDot> {cv.email ?? "Email"}</Text>
              </View>
            </View>

            <View style={{ ...styles.flex, ...styles.justifyStart, ...styles.fRow, ...{ marginVertical: "3px" } }}>
              <View style={{ ...styles.flex, ...styles.fRow, ...styles.alignCenter, }}>
             
                <Text style={{ fontSize: "10px",  color: "#000000" }}><BlueDot></BlueDot> {cv.city ?? "Address"}</Text>
              </View>
            </View>
          </View>


          <View style={{ ...{ marginTop: "20px"} }}>
            <View>

            <Text style={{ ...{ color: "#0D6EFD", fontWeight: "200px", fontSize: "12px" } }}>PROFESSIONAL SKILLS </Text>

              {
                Object.keys(cv.skills ?? []).map((key) => {
                  return <CvProgressbar91 key={key} skillName={valueText(cv.skills[key].skillName, "Skill Name")} value={cv.skills[key].expartise ?? 0} />
                })
              }
            </View>
            <View style={{ ...{ marginTop: "20px" } }} >

            <Text style={{ ...{ color: "#0D6EFD", fontWeight: "200px", fontSize: "12px" } }}>LANGUAGE</Text>
              {
                Object.keys(cv.languages ?? []).map((key) => {

                  return <LanguageProgressBar91 key={key} languageName={valueText(cv.languages[key].languageName, "Language Name")} value={cv.languages[key].expartise ?? 0} />
                })
              }
            </View>
          </View>

        </View>

        



        <View style={styles.section2}>



          <View style={{ padding: "15px",marginTop:"20px" }}>

            <View style={{ width: '100%', }}>
            <Text style={{ ...{ color: "#0D6EFD", fontWeight: "200px", fontSize: "16px" ,marginBottom:"10px" } }}>Experince</Text>
              <View style={{width:"90%" }}>
                {
                  Object.keys(cv.experiences ?? []).map((key) => {
                    let exp = cv.experiences[key];
                    return <>
                      <View style={{ ...{ marginTop: "15px" } }}>
                        
                        <hr></hr>
                        <Text style={{ ...{ fontSize: "10px", color:"#9EC5FE" } }}>{valueText(exp.startdate, "Start Date")}- {valueText(exp.enddate, "End Date")}</Text>
                        <Text style={{ ...{ fontSize: "13px", fontStyle: "bold" ,color:"#0D6EFD" } }}>{valueText(exp.jobTitle, "Job Title")} at {valueText(exp.employer, "Employeer")}</Text>
                        

                        {/* <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{exp.address}</Text> */}
                      </View>
                      <View style={{}}>
                        <Text style={{ ...{ fontSize: "10px",marginTop:"3px" } }}> {valueText(exp.description,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere molestie ullamcorper donec phasellus scelerisque congue et in. Laoreet habitant lacus, enim duis amet libero. Interdum pretium at magna netus nunc. A maecenas id quisque imperdiet non, nunc. Montes, aliquam fermentum molestie enim facilisis. Vitae pharetra.")}</Text>
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
            <Text style={{ ...{ color: "#0D6EFD", fontWeight: "200px", fontSize: "16px" , marginBottom:"10px"} }}>Education</Text>
              <View>
                {
                  Object.keys(cv.education ?? []).map((key) => {
                    let edu = cv.education[key];
                    return <>
                      <View style={{ ...{ marginTop: "15px" } }}>
                        <View style={{ ...styles.flex, ...styles.fRow }}>
                          
                        </View>
                        <Text style={{ ...{ fontSize: "10px",color:"#9EC5FE" } }}>{valueText(edu.startdate, "Start Date")}- {valueText(edu.enddate, "End Date")}</Text>
                        <Text style={{ ...{ fontSize: "13px", fontStyle: "bold",color:"#0D6EFD" } }}>{valueText(edu.school, "Institution")} at {valueText(edu.degree, "Course")}</Text>
                        
                          {/* <Text style={{ ...{ fontSize: "8px", color: "#AFAFAF" } }}>{edu.address}</Text> */}


                      </View>
                      <View style={{ ...{ width: "80%" } }}>
                        <Text style={{ ...{ fontSize: "10px",marginTop:"3px" } }}>{valueText(edu.description,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere molestie ullamcorper donec phasellus scelerisque congue et in. Laoreet habitant lacus, enim duis amet libero. Interdum pretium at magna netus nunc. A maecenas id quisque imperdiet non, nunc. Montes, aliquam fermentum molestie enim facilisis. Vitae pharetra.")}</Text>
                      </View>
                    </>
                  })
                }

              </View>
            </View>
          </View>

          

          <View style={{ padding: "15px" }}>

            <View style={{ width: '100%', }}>
            <Text style={{ ...{ color: "#0D6EFD", fontWeight: "200px", fontSize: "14px" } }}>REFERENCE</Text>
              <View>
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

    </Page>
  </Document>

};

export default Tempalte9;