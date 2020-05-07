import React from "react";

import './item-details.css'
import {ClipLoader} from "react-spinners";

const Record = ( {item, field, value, extra1, extra2} ) => {

    if(extra1 && extra2) {
        return (
            <li className="list-group-item">
                <span className="term">{ value }:</span>
                <span>{ item[field][extra1][extra2] }</span>
            </li>
        )
    }

    if(extra1) {
        return (
            <li className="list-group-item">
                <span className="term">{ value }:</span>
                <span>{ item[field][extra1] }</span>
            </li>
        )
    }

    return (
            <li className="list-group-item">
                <span className="term">{ value }:</span>
                <span>{ item[field] }</span>
            </li>
    )
}

export {
    Record
}

export default class ItemDetails extends React.Component {

    state = {
        isLoading: false,
        item: null,
        image: {
            poke: null,
            ball: null,
            location: null
        }
    }

    componentDidMount()
    {
        this.updateItem();
    }

    componentDidUpdate(prevProps)
    {
        if (this.props.itemId !== prevProps.itemId) {
            setTimeout(() => this.updateItem(), 1500)
            this.setState({isLoading: true})
        }
    }

    updateItem() {

        const {itemId, getData } = this.props;

        if (!itemId) {
            return;
        }

        if(getData.toString().includes('pokemon')) {
            this.setState({image: {poke: true}})
        }
        if (getData.toString().includes('item')) {
            this.setState({image: {ball: true}})
        }
        if (getData.toString().includes('location')) {
            this.setState({image: {location: true}})
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    isLoading: false
                })
            })
    }

    render() {

        const {isLoading, item, image: {poke, ball, location}} = this.state;

        const { itemId, children: renderItem } = this.props;

        if (isLoading) {
            return <ClipLoader color={"#DF691A"} css={"margin: 0 auto"}/>
        }

        if (!item) {
            return <span>Choose a pokemon from a list.</span>
        }

        return (
            <div className="person-details card">
                {isLoading ?
                    <ClipLoader color={"#DF691A"} css={"margin: 0 auto"}/>
                    :
                    <React.Fragment>
                        {
                            poke ?
                            <img className="poke-image"
                            src={`https://pokeres.bastionbot.org/images/pokemon/${itemId}.png`} alt=''/>
                            : null
                        }
                        {
                            ball ?
                                <img className="poke-image"
                                     src={require(`./balls/${itemId}.png`)} alt=''/>
                                : null
                        }
                        {
                            location ?
                                <img className="poke-image"
                                     src={require(`./locations/${itemId}.png`)} alt=''/>
                                : null
                        }

                        <div className="card-body">
                            <h4>{item.name[0].toUpperCase() + item.name.slice(1)}</h4>
                            <ul className="list-group list-group-flush">
                                {
                                    React.Children.map(renderItem, (child) => {
                                        return React.cloneElement(child, {item})
                                    })
                                }
                            </ul>
                        </div>
                    </React.Fragment>
                }
            </div>
        )
    }
}
