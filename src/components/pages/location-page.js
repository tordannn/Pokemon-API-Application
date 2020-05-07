import React from "react";

import {LocationList} from "../poke-components";
import { withRouter } from 'react-router-dom';

const LocationPage = ({history}) => {

        return (
            <LocationList onItemSelected={(itemId) => history.push(itemId)} />
        )
}

export default withRouter(LocationPage)