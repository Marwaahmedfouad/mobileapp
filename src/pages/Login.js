import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import mainimg from '../assets/images/mainimg.png'
import './Login.css';

const Login = () => {
    return (
        <>
            <div className='container text-center m-auto'>


                <div className=' styleStyle'>
                    <div className="py-1">
                        <input
                            type='text'
                            placeholder='اسم المستخدم أو البريد الإلكترونى'
                            className='textStyleUser my-2 w-75 '
                        />

                    </div>

                    <div className='py-1'>
                        <input
                            type='text'
                            placeholder='كلمة المرور'
                            className='textStylePassword my-2 w-75'
                        />
                    </div>

                </div>






                <div className="d-flex justify-content-between align-items-center pb-3">
                    <div className="d-flex align-items-center ">
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe" className="px-2" style={{ fontSize: '12px', fontWeight: 400, color: '#4D4E4E' }}>تذكرنى</label>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '12px', fontWeight: 400, color: '#4D4E4E' }}>نسيت كلمة المرور؟</h3>
                    </div>
                </div>





                <div className='m-auto pt-3'>
                    <button type='submit' className='btnStyle w-75'
                        style={{ background: 'linear-gradient(110deg,#255454, #426829 )', fontSize: '20px', fontWeight: 400, color: 'white' }}>دخول</button>
                </div>





                <div className='container text-center pt-5 imgStyle'>
                    <img src={mainimg} alt='' />
                </div>


            </div>
        </>
    );
}

export default Login;


/////////////////////////////////////
// import React from 'react';
// import styles from './Login.module.css';
// import img1 from '../../assets/images/img1.png';

// const Login = () => {



//   return (
//     <>
//       <div className='container py-5'>
//         <div className="row">
//           <div className='col-md-6'>
//             <h3 className='text-center pt-5' style={{ color: '#4A7A39', fontSize: '24px', fontWeight: 700 }}> Faisal Abd Elaziz !مرحبًا بعودتك   </h3>
//             <div className='w-50 mx-auto'>
//               <div className="d-flex justify-content-end">
//                 <h3 className="py-4" style={{ color: '#333333', fontSize: '20px', fontWeight: 400 }}>تسجيل الدخول</h3>
//               </div>
//               <form className=' mx-auto'>
//                 <input
//                   className={`form-control mb-3 ${styles.formControl}`}
//                   type='email'
//                   name='email'
//                   id='email'
//                   dir='rtl'
//                   placeholder='اسم المستخم او البريد الالكتروني'
//                   style={{ fontSize: '16px', fontWeight: 400, color: '#636569' }}
//                 />
//                 <input
//                   className={`form-control mb-3 ${styles.formControl}`}
//                   type='password'
//                   name='password'
//                   id='password'
//                   dir='rtl'
//                   placeholder='كلمة المرور'
//                   style={{ fontSize: '16px', fontWeight: 400, color: '#636569' }}
//                 />
//                 <div className="d-flex justify-content-between align-items-center p-2">
//                   <div>
//                     <h3 style={{ fontSize: '16px', fontWeight: 400, color: '#636569' }}>نسيت كلمة المرور؟</h3>
//                   </div>
//                   <div className="d-flex align-items-center">
//                     <label htmlFor="rememberMe" className="px-2" style={{ fontSize: '16px', fontWeight: 400, color: '#636569' }}>تذكرنى</label>
//                     <input type="checkbox" id="rememberMe" name="rememberMe" />
//                   </div>
//                 </div>
//                 <button type='submit' className='btn w-100 m-auto p-1' style={{ background: 'linear-gradient(135deg,#255454, #426829 )', fontSize: '20px', fontWeight: 400, color: 'white' }}>
//                   الدخول
//                 </button>
//               </form>
//             </div>
//           </div>
//           <div className='col-md-6'>
//             <img src={img1} alt='img' />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;
