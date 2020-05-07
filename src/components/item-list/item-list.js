import React from "react";

import './item-list.css';

const ItemList = (props) => {

    const { data, children: renderLabel, onItemSelected, extractId } = props;

    const items = data.map((item) => {

        const id = extractId(item.url);

        data.length = 5;

        const label = renderLabel(item)

        return (
            <li
                className="list-group-item"
                onClick={() => onItemSelected(id)}
                key={id}>
                {label}
            </li>
        )
    });

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }

    export default ItemList;