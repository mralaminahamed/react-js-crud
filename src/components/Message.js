import {MessageContent} from "../styles/elements";

export function Message (props){
    console.log(props)
    return (<MessageContent>{props.children}</MessageContent>);
}