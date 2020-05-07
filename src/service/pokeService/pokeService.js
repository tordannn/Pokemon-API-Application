export default class pokeService {

    _apiBase = `https://pokeapi.co/api/v2`;

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return res.json();
    }

    getAllPokemon = async () => {
        return await this.getResource(`/pokemon/`);
    }

     getPokemon = async (id) => {
        return await this.getResource(`/pokemon/${id}`)
    }

     getAllItems = async () => {
        return await this.getResource(`/item/`)
    }

     getItem = async (id) => {
        return await this.getResource(`/item/${id}`)
    }

     getAllLocations = async () => {
        return await this.getResource(`/location/`)
    }

     getLocation = async (id) => {
        return await this.getResource(`/location/${id}`)
    }

    _extractId = (url) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const id = url.match(idRegExp)[1]

        return id;
    }

}

