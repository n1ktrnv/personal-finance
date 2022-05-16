import React from 'react';
import LoadingIndicator from '../components/LoadingIndicator';


export default class DataScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', async () => {
            await this.fetchData();
        });
    }

    fetchData = async () => {
        const data = await this.props.fetchData();
        this.props.onChangeData(data);
        this.setState({loading: false});
    }

    componentWillUnmount() {
        if (this.focusListener != null && this.focusListener.remove) {
            this.focusListener.remove();
        }
    }

    render() {
        return this.state.loading ? <LoadingIndicator/> : this.props.children;
    }
}