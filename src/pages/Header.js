// import React from 'react'
// import headerbackground from '../assets/images/headerbackground.png'
// import logo from '../assets/images/logo.png'
// import './Header.css'
// const Header = () => {
//   const backgroundStyle = {
//     background: `url(${headerbackground})`,
//     // backgroundColor: 'rgb(0, 0, 0)',
//     color: 'aliceblue',
//     // paddingTop: '10px',
//     // position: 'relative', // To position the logo absolutely
//   };

//   const logoStyle = {
//     // backgroundImage: `url(${logo})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'right',
//     padding: '10px',
//     // backgroundSize: 'auto',
//     width: '100px', // Adjust the width and height as needed
//     // height: '50px',
//     // position: 'absolute',
//     // top: '10px', // Adjust the top and left values for positioning
//     // left: '100px',
//     paddingTop:'2px',
//     transform: translate('20px','10px'),

//   };

//   return (
//     // <div>
//     //   <div className=''>
//     //   <img src={headerbackground} alt='' width="100%" height="20%" className='backgroundStyle'></img>

//     // {/* <img src={logo} alt='' width="10%"></img> */}
//     //   </div>
//     // </div>




//     <div className='logoStyle bg-danger'>
//       <img src={logo} alt='logo' width="7%" />
//     </div>
//   )
// }

// export default Header

import React from 'react';
import headerbackground from '../assets/images/headerbackground.png';
import logo from '../assets/images/logo.png';
import './Header.css';

const Header = () => {
  const backgroundStyle = {
    background: `url(${headerbackground})`,
    // backgroundColor: 'rgb(0, 0, 0)',
    color: 'aliceblue',
    paddingTop: '20%',
    paddingBottom: '5%',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'COVER',
  };

  const logoStyle = {
    width: '25%',
    height: 'auto',
    padding: '10px',
    position: 'absolute',
    top: '0',
    right: '0',
  };

  return (<>
  
    <div style={backgroundStyle} className=' ' >
      <img src={logo} alt="logo" style={logoStyle} />
      



      <div className=''>
          <div className='text-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-around' }}>
            <div
             className='textStyleHeader' style={{ fontSize: '22px', color: 'white', fontWeight: '500', fontFamily: 'Janna LT'}}>
          العمل الميدانى
          </div>
           </div>
         </div>
 




        {/* <div className=''>
          <div className='text-center' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-around' }}>
            <div
             className='textStyleHeader' style={{ fontSize: '22px', color: 'white', fontWeight: '500', fontFamily: 'Janna LT'}}>
              مرحبًا بعودتك!  Fahd Abd Elaziz
             </div>
          </div>
        </div> */}




      </div>
 </> );
}

export default Header;
