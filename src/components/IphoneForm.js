import React, { useRef, useState } from 'react';
import '../css/iphoneForm.css';

const IphoneForm = ({onAdd}) => {
    const textRef = useRef();
    const [text, setText] = useState('');

    const onInput = (e) => {
        const {value} = e.target;
        setText(value);
    }
    const submit = (e) => {
        e.preventDefault();
        if(!text) return
        onAdd(text)
        setText('')

        textRef.current.focus();
    }
    return (
        <div className='iphoneForm'>
        <form className='screen_Sub' onSubmit={submit} >
            <input type='text' value={text} onChange={onInput} ref={textRef} className='Todo_Input' placeholder='TodoList를 적어주세요'/>
            <button type='submit' className='addBtn'/>
        </form>
        </div>
    );
};

export default IphoneForm;