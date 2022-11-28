import React from 'react';
import IphoneItem from './IphoneItem';
import '../css/iphoneList.css';

const IphoneList = ({data, onDel}) => {
    return (
        <div className='iphoneList'>
            <div className='scroll'>
            {
                data.map(todo => <IphoneItem key={todo.seq} todo={todo} onDel={onDel}/>)
            }

            </div>
        </div>
    );
};

export default IphoneList;