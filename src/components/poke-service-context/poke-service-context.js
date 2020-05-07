import React from "react";

const {Provider: PokeServiceProvider, Consumer: PokeServiceConsumer } = React.createContext();

export {
    PokeServiceConsumer, PokeServiceProvider
}