import {ResetButtonTag, SubmitButtonTag} from "../styles/elements";

export function SubmitButton({id, value, job}) {
    return <SubmitButtonTag type={'submit'} id={id} value={value} data-job={job}/>
}
export function ResetButton({id, value, job}) {
    return <ResetButtonTag type={'reset'} id={id} value={value} data-job={job}/>
}