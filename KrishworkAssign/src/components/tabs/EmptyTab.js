import React from "react";
import {Lock} from '@mui/icons-material'

const EmptyTab = (props) => {
    return <center>
        <Lock style={{fontSize: '48px'}} />
        <p> {props.tabName} Page</p>
    </center>
}

export default EmptyTab;
