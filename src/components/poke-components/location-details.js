import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";
import withPokeService from "../hoc-helpers/with-poke-service";

const LocationDetails = ({itemId, pokeService}) => {

    const {getLocation} = pokeService;

    return (
        <ItemDetails
            itemId={itemId}
            getData={getLocation}>

            <Record field="areas" extra1="0" extra2="name" value="Area" />
            <Record field="region" extra1="name" value="Region" />

        </ItemDetails>
    )
}


export default withPokeService(LocationDetails)