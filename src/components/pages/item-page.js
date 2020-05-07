import React from "react";

import {ItemsList} from "../poke-components";
import ItemsDetails from "../poke-components/item-details";
import Row from "../row/row";

export default class ItemsPage extends React.Component {

    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {

        const { selectedItem } = this.state;

        return (
            <Row
                left={<ItemsList onItemSelected={this.onItemSelected} />}
                right={<ItemsDetails itemId={selectedItem} />}
            />
        )
    }

}