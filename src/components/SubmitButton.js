function SubmitButton(props) {
    return (
        <div>
            {/*Pass the on click behaviour via props*/}
            <input type="submit" value={props.value} onClick={props.submit} className='btn'/>
        </div>
    );
}

export {SubmitButton};