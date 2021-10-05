import {Component} from 'react';
import {
    AddItemContainer,
    AppContainer,
    Application,
    GlobalCSS, MessageContainer,
} from "./styles/container";
import {ApplicationTitle} from "./styles/elements";
import {AddButton} from "./components/AddButton";
import {Message} from "./components/Message";


export default class App extends Component {

    state = {
        showMessage: false
    }

    handleAddItem = () => {
        this.setState((prevSate) => {
            return {
                showMessage: !prevSate.showMessage
            }
        })
    }

    render() {
        const { showMessage } = this.state;
        console.log(showMessage)
        return (
            <AppContainer>
                <GlobalCSS/>
                <Application>
                    <ApplicationTitle>Book list</ApplicationTitle>
                    {showMessage ? (
                        <MessageContainer>
                            <Message type='error'>message</Message>
                        </MessageContainer>
                    ) : null}
                    <AddItemContainer onClick={() => this.handleAddItem()}>
                        <AddButton>+</AddButton>
                    </AddItemContainer>
                    Hello word
                </Application>
            </AppContainer>
        )
    }
}