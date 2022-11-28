import React, { useState } from 'react';
import '../css/iphoneItem.css';

const IphoneItem = ({todo, onDel}) => {
    const {seq, text} = todo;
    const [time, setTime] = useState(new Date());
    console.log(time.toLocaleTimeString())
        
        
    return (
        <div className='iphoneItem'>
            <div className='iphoneItem_sub'>
                {text}
                <button className='iphone_delBtn' onClick={() => onDel(seq)}>x</button>
            </div>
            <div className='iphoneTime'>
                {time.toLocaleTimeString()}
            </div>
        </div>
    );
};

export default IphoneItem;