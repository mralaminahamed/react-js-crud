import {Component} from 'react';
import {
    AddItemContainer,
    AppContainer,
    Application, FormContainer, FormElementContainer,
    GlobalCSS, MessageContainer,
} from "./styles/container";
import {ApplicationTitle, InputLabel} from "./styles/elements";
import {AddButton} from "./components/AddButton";
import {Message} from "./components/Message";
import InputElement from "./components/InputElement";
import {ResetButton, SubmitButton} from "./components/InputButtonElement";


export default class App extends Component {

    state = {
        showMessage: false,
        showForm: false,
    }

    handleAddItem = () => {
        this.setState((prevSate) => {
            return {
                ...this.state,
                showMessage: !prevSate.showMessage
            }
        })
    }

    handleShowForm = () => {
        this.setState((prevSate) => {
            return {
                ...this.state,
                showForm: !prevSate.showForm
            }
        })
    }

    render() {
        const { showMessage, showForm } = this.state;

        return (
            <AppContainer>
                <GlobalCSS/>
                <Application>
                    {/*app title*/}
                    <ApplicationTitle>Book list</ApplicationTitle>
                    {showMessage ? (
                        <MessageContainer>
                            <Message type='error'>message</Message>
                        </MessageContainer>
                    ) : null}

                    {/*form view and hide button*/}
                    <AddItemContainer onClick={() => this.handleShowForm()}>
                        <AddButton>+</AddButton>
                    </AddItemContainer>

                    {/*data insert form*/}
                    {showForm ? (
                        <FormContainer>
                            <FormElementContainer>
                                <InputLabel>
                                    {'Book Name'}
                                    <InputElement type={'text'} id={'name'} placeholder={'Book\'s name'}/>
                                </InputLabel>
                                <InputLabel>
                                    {'Book writer'}
                                    <InputElement type={'text'} id={'writer'} placeholder={'Book\'s writer name'}/>
                                </InputLabel>
                                <InputLabel>
                                    {'Book Isbn'}
                                    <InputElement type={'text'} id={'isbn'} placeholder={'Book\'s ISBN number'}/>
                                </InputLabel>
                            </FormElementContainer>
                            <FormElementContainer>
                                <SubmitButton id={'submit'} value={'Add Book'} job={'add'}/>
                                <ResetButton id={'reset'} value={'Reset'} job={'reset'}/>
                            </FormElementContainer>
                        </FormContainer>
                    ) : null}

                    {/*data table*/}
                </Application>
            </AppContainer>
        )
    }
}