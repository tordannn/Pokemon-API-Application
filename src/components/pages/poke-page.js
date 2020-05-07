import React from "react";

import {PokeList} from "../poke-components";
import PokeDetails from "../poke-components/poke-details";
import Row from "../row/row";
import { withRouter } from 'react-router-dom';

const PokePage = ({history, match}) => {

        const { id } = match.params;

        return (
            <Row
                left={<PokeList onItemSelected={(id) => history.push(id)} />}
                right={<PokeDetails itemId={id} />}
            />
        )
}

export default withRouter(PokePage)