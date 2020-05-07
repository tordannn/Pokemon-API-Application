import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";
import withPokeService from "../hoc-helpers/with-poke-service";

const PokeDetails = ({itemId, pokeService}) => {

    const {getPokemon} = pokeService;

        return (
            <ItemDetails
                itemId={itemId}
                getData={getPokemon}>

                <Record field="height" value="Height" />
                <Record field="weight" value="Weight" />
                <Record field="order" value="Order" />

            </ItemDetails>
        )
}

export default withPokeService(PokeDetails);