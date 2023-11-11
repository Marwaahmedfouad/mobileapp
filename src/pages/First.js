import { RouterProvider } from 'react-router-dom'
import first from '../assets/images/first.png'
// import first from '../assets/images/backFirst.png'

import './First.css'

function First() {

    return (
        <>
            <div className='backgroundStyle text-center'>
                <div className='fixed-bottom'>
                    <img src={first} alt='' ></img>
                </div>
                <div >
                    <p className='textStylefirst align-center '>
                        تطبيق  العمل الميدانى
                        <div className='lineStylefirst mt-2'></div>
                    </p>

                </div>
            </div>
        </>

    );
}

export default First;