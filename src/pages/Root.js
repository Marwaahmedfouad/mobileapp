// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'
// import Group from '../assets/images/Group.png';
// import Userg from '../assets/images/Userg.png';
// import Vector from '../assets/images/Vectorg.png';
// import Chatsg from '../assets/images/Chatsg.png';
// import Calendarg from '../assets/images/Calendarg.png';

// const Root = () => {
//     return (
//         <div style={{ width: '75%', color: 'red' }}>
//             {/* <nav>
//                 Studytonight
//             </nav> */}
//             <div className='container'>
//                 <div className='row'>
//                     {/* <div className='col-md-12 flex-md-row d-md-flex flex-sm-column'> */}

//                         <div>
//                             {/* <div className="col text-center d-flex flex-column" > */}
//                                 <Link to="/">الرئيسية
//                                     <div> <img src={Vector} alt="Image" width="40%" /></div>
//                                 </Link>
//                             {/* </div> */}

//                         </div>



//                         <div>
//                             {/* <div className="col text-center d-flex flex-column" > */}
//                                 <Link to="/Contact">الإعدادات
//                                     <div> <img src={Userg} alt="Image" width="40%" /></div>
//                                 </Link>
//                             {/* </div> */}

//                         </div>



//                         <div>
//                             {/* <div className="col text-center d-flex flex-column" > */}
//                                 <Link to="/Projects"><img src={Group} alt="Image" width="75%" /></Link>
//                             {/* </div> */}
//                         </div>



//                         <div>
//                             {/* <div className="col text-center d-flex flex-column" > */}
//                                 <Link to="/products">المواقع المجدولة
//                                     <div> <img src={Calendarg} alt="Image" width="40%" /></div>
//                                 </Link>
//                             {/* </div> */}

//                         </div>



//                         <div>
//                             {/* <div className="col text-center d-flex flex-column" > */}
//                                 <Link to="/Tsh">البلاغات
//                                     <div> <img src={Chatsg} alt="Image" width="40%" /></div>
//                                 </Link>
//                             {/* </div> */}

//                         </div>




//                     </div>
//                 {/* </div> */}
//             </div>



//             <Outlet />

//         </div>
//     )
// }

// export default Root


// ----------------------------------------------------

import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Group from '../assets/images/Group.png';
import Userg from '../assets/images/Userg.png';
import Vector from '../assets/images/Vectorg.png';
import Chatsg from '../assets/images/Chatsg.png';
import Calendarg from '../assets/images/Calendarg.png';


const Root = () => {
    return (
        <div style={{ width: '100%', color: 'red' }}>


<Outlet />

            <div className='container-fluid bg-light pt-2 '>
                <div className='d-flex flex-row m-0'>
                    {/* <div className='col-md-12 flex-md-row d-md-flex flex-sm-column'> */}


                    <div>
                        <div className="col text-center d-flex flex-column" >
                            <Link to="/Contact">الإعدادات
                                <div> <img src={Userg} alt="Image" width="40%" /></div>
                            </Link>
                        </div>

                    </div>






                    <div>
                        <div className="col text-center d-flex flex-column" >
                            <Link to="/Settings">المهام
                            <div> <img src={Chatsg} alt="Image" width="40%" /></div>
                            </Link>
                        </div>

                    </div>







                    <div>
                        <div className="col text-center d-flex flex-column" >
                            <Link to="/Projects"><img src={Group} alt="Image" width="75%" /></Link>
                        </div>
                    </div>







                    <div>
                        <div className="col d-flex flex-column " >
                            <Link to="/Balagat">البلاغات
                                <div> <img src={Chatsg} alt="Image" width="40%" /></div>
                            </Link>
                        </div>

                    </div>




                    <div>
                        <div className="col text-center d-flex flex-column" >
                            <Link to="/products">المواقع
                                <div> <img src={Calendarg} alt="Image" width="40%" /></div>
                            </Link>
                        </div>

                    </div>




                    
                </div>
                {/* </div> */}
            </div>



           

        </div>
    )
}

export default Root



