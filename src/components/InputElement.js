import {InputTag} from "../styles/elements";

export default function InputElement({id, type, placeholder}) {
    return <InputTag type={type} id={id} placeholder={placeholder}/>
}