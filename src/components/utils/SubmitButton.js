function SubmitButton(props) {
    // todo: define the submit behaviour.
    const submit = () => console.log(props.uri);

    return (
        <input type="submit" value={props.value} onClick={submit}/>
    );
}

export {SubmitButton};