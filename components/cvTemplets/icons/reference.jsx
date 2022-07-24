import { Svg, G, Rect, Path,Image } from "@react-pdf/renderer";

export function Reference() {
    return (<Image style={{width:"30px"}} src={{uri:"https://img.icons8.com/material/344/for-experienced--v1.png", method: 'GET',}}/>)
}
