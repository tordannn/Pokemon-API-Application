import React from "react";
import pokeService from "../../service/pokeService/pokeService";
import withData from "../hoc-helpers/with-data";
import ItemList from "../item-list/item-list";

const PokeService = new pokeService();

const {
    getAllPokemon,
    getAllItems,
    getAllLocations,
    _extractId
} = PokeService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
                <Wrapped {...props} extractId={_extractId}>
                    {fn}
                </Wrapped>
            )
    }
}

const renderName = ({name}) =>
{
    const res = name[0].toUpperCase() + name.slice(1);
    return res
}

const PokeList = withData(withChildFunction(ItemList, renderName), getAllPokemon)

const ItemsList = withData(withChildFunction(ItemList, renderName), getAllItems)

const LocationList = withData(withChildFunction(ItemList, renderName), getAllLocations)

export {
    PokeList,
    ItemsList,
    LocationList
}