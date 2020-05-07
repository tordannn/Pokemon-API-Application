import ItemDetails, {Record} from "../item-details/item-details";
import React from "react";
import withPokeService from "../hoc-helpers/with-poke-service";

const ItemsDetails = ({itemId, pokeService}) => {

    const { getItem } = pokeService;
    return (
        <ItemDetails
            itemId={itemId}
            getData={getItem}>

            <Record field="cost" value="Cost" />
            <Record field="category" extra1="name" value="Category name" />
            <Record field="effect_entries" extra1="0" extra2="short_effect" value="Flavor" />

        </ItemDetails>
    )
}


export default withPokeService(ItemsDetails);