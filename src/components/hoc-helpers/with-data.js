import React from "react";
import {ClipLoader} from "react-spinners";

const withData = (View, getData) => {
    return class extends React.Component {

        state = {
            data: null
        }

        componentDidMount() {
            setTimeout(() => {
                getData()
                    .then((data) => {
                        this.setState({
                            data: data.results
                        });
                    })
            }, 1500)

        }

        render() {

            const { data } = this.state;

            if (!data) {
                return <ClipLoader color={"#DF691A"} css={"margin: 0 auto"}/>
            }

            return <View {...this.props} data={data} />
        }
    }
}

export default withData;
