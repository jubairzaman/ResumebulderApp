
import {View,Text} from "@react-pdf/renderer"
import React from "react"
import SectionComponent from "./sectionComponent"
import SectionHeading from "./sectionHeading"
import Styles from "../styles"
function TitleLeft() {
    return null
  }
  
  function TitleRight() {
    return null
  }
  
  function ViewLeft() {
    return null
  }
  function ViewRight() {
    return null
  }

  function ViewCenter() {
    return null
  }
  
  class SectionLayout extends React.Component {
    static TitleLeft = TitleLeft
    static TitleRight = TitleRight
    static ViewLeft = ViewLeft
    static ViewRight = ViewRight
    static ViewCenter = ViewCenter
  
    render() {
      const {children} = this.props
      const titleLeft = children?.find(child => child.type === TitleLeft)?.props?.children??"Title Left"
      const titleRight = children.find(child => child.type === TitleRight)?.props?.children??"Title Right"
      const viewLeft = children.find(child => child.type === ViewLeft)?.props?.children??<Text>View Left</Text>
      const viewRight = children.find(child => child.type === ViewRight)?.props?.children??<Text>View Right</Text>
      const viewCenter = children.find(child => child.type === ViewCenter)?.props?.children
        
 
      
      
      return (
        <View>
            <SectionHeading title1={titleLeft} title2={titleRight}></SectionHeading>
            <View style={{marginTop:"12px"}}>
            <SectionComponent view1={viewLeft} view2 ={viewRight} viewCenter={viewCenter}></SectionComponent>
            </View>
        </View>
            
      )
    }
  }
  
  export default SectionLayout