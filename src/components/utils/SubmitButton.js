function SubmitButton(props) {
    // todo: define the submit behaviour.
    const submit = () => console.log(props.uri);

    return (
        <div>
            <input type="submit" value={props.value} onClick={submit} className='btn'/>
        </div>
    );
}

export {SubmitButton};