import React from "react";
import {PokeServiceConsumer} from "../poke-service-context";

const withPokeService = (Wrapped) => {
    return (props) => {
        return (
            <PokeServiceConsumer>
                {
                    (pokeService) => {
                        return (
                            <Wrapped {...props} pokeService={pokeService} />
                        )
                    }
                }
            </PokeServiceConsumer>
            )
    }
}

export default withPokeService;