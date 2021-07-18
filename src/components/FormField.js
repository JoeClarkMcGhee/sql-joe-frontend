function FormField(props) {
    return (
        <div>
            <label>
                {props.label}
                <input type={props.type}/>
            </label>
        </div>
    );
}

export {FormField}