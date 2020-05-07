import React from "react";
import pokeService from "../../service/pokeService/pokeService";
import ClipLoader from 'react-spinners/ClipLoader';
import ErrorIndicator from "../error-indicator";

import './random-pokemon.css'

export default class RandomPokemon extends React.Component {

    pokeService = new pokeService();

    state = {
        details: {
            id: null,
            name: null,
            height: null,
            weight: null,
            order: null,
        },
        isLoading: true,
        error: false
    }

    componentDidMount() {
        setInterval(() => this.updatePokemon(), 3000);
    }

    onError = () => {
        this.setState({
            isLoading: false,
            error: true
        })
    }

    updatePokemon() {

        const randomId = Math.floor(Math.random()*180)+1;

        this.pokeService.getPokemon(randomId)
            .then((poke) => {
                this.setState({
                    details: {
                        id: randomId,
                        name: poke.name,
                        height: poke.height,
                        weight: poke.weight,
                        order: poke.order,
                    },
                    isLoading: false
                })
            })
            .catch(this.onError)
    }

    render() {

        const { isLoading, error } = this.state;

        const hasData = !(isLoading || error);

        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = isLoading ? <ClipLoader color={"#DF691A"} css={"margin: 0 auto"} /> : null;
        const content = hasData ? <PokeView poke={this.state.details}/> : null;

        return (
            <div className="random-pokemon jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }

}

const PokeView = ({ poke }) => {

    const { id, name, height, weight, order } = poke;

    return (
        <React.Fragment>
            <img className="poke-image" src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt='' />
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Height: </span>
                        <span>{height}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Weight: </span>
                        <span>{weight}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Order: </span>
                        <span>{order}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}