import React from 'react';
import { render } from 'react-dom';
//import { ListItem, List, withStyles } from '@material-ui/core';

import { LayeredImage } from 'react-layered-image';

import turntable from '../../assets/images/turntable_edit.jpg';
import record from '../../assets/images/LP_record.png';
import table_arm from '../../assets/images/record_needle_arm.png';



const style = {
    position: "absolute" as "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const layers = [
    `${turntable}`,
    `${record}`,
    `${table_arm}`
];

render (
    <div style={style}>
        <LayeredImage layers={layers} style={{ width: 400 }} />
    </div>
    ,document.getElementById("root"),
);




// const StyledListItem = withStyles({

//     root: {

//         backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${turntable});`,
//         width: '100%',
//         height: '100%',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
//         position: 'absolute',
//     }
    
// })(ListItem);

// function TurnTable() {

//     return (
//         <List component = "nav">
//             <StyledListItem>default</StyledListItem>
            
//         </List>
//     );
// }
// export default TurnTable;