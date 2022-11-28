import React, {useState, useRef, useEffect} from 'react';
import '../css/iphone.css';
import IphoneForm from './IphoneForm';
import IphoneList from './IphoneList';
const Iphone = () => {
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || []);
    //로컬스토리지에 저장
    const seq = useRef(data.length + 1);
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
    }, [data]);

    const onAdd = (text) => {
        setData([
            ...data,
            {
                seq:seq.current++,
                text:text
            }
        ])
    }

    const onDel = (seq) => {
        setData(data.filter(todo => todo.seq !== seq)); 
    }
    
    return (
        <div className='iphoneTodo'>

        <div className="iphone14_Pro">
           <div className='frame'>
                {/* <img className='screen' src={iphoneImg}/> */}
                <div className='screen'>
                    <IphoneList data={data} onDel={onDel}/>
                    <IphoneForm onAdd={onAdd}/>
                </div>
           </div>
           <div className='stripe'>

           </div>
           {/* <div className='header'></div> */}
            {/* <div className='sensors'> */}

            {/* </div> */}
            <div className='btns'>

            </div>
            <div className='power'></div>
            <div className='home'>

            </div>
        </div>
        </div>
    );
};

export default Iphone;