import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {AppNavigation} from "./src/navigation";
import {initDb, OperationModel} from "./src/models";
import LoadingIndicator from "./src/components/LoadingIndicator";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loading: true};
    }

    componentDidMount() {
        initDb().then(() => this.setState({loading: false}));
    }

    render() {
        return (
            this.state.loading ?
                <LoadingIndicator/> :
                <NavigationContainer theme={theme}>
                    <AppNavigation/>
                </NavigationContainer>
        );
    }
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
    },
};
