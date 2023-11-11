import React from 'react'

const Tsh = () => {
  return (
    <div>Tsh</div>
  )
}

export default Tsh
///////////////////////////////////////////////
// import React from 'react'
// import './Tsh.css';

// const Tsh = () => {
//     constructor(props) {
//         super(props);
//         this.state = {
//             trespassStatus: 'نعم',
//             propertyStatus: 'جديد',
//             city: '',
//             propertyType: 'منزل',
//             propertyGeneralStatus: '',
//             propertyOwner: '',
//             locationDescription: '',
//             suggestions: '',
//             selectedFile: null,
//             trespassType: '',
//         };

//     }

//     handleInputChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     };

//     handleFileChange = (event) => {
//         const file = event.target.files[0];
//         this.setState({ selectedFile: file });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//     };
//   return (<>
//     <div>Tsh</div>



//     <div className='col-lg-3 py-4'>
//                 <div className='text-center '>
//                     <h1 className='h4'>رصد حالة تعدي</h1>
//                 </div>
//                 <div className='borderStyle mb-4'></div>

//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <div className='d-flex flex-row pb-3'>
//                             <div className='radio1'>
//                                 <div>
//                                     <label>حالة التعدي <span className='starStyle'>*</span></label>
//                                 </div>
//                                 <div className='d-flex flex-column px-5'>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="trespassStatus"
//                                             value="نعم"
//                                             checked={this.state.trespassStatus === 'نعم'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         نعم
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="trespassStatus"
//                                             value="لا"
//                                             checked={this.state.trespassStatus === 'لا'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         لا
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className='radio2'>
//                                 <div>
//                                     <label>الحالة <span className='starStyle'>*</span></label>
//                                 </div>
//                                 <div className='d-flex flex-column px-5'>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="propertyStatus"
//                                             value="جديد"
//                                             checked={this.state.propertyStatus === 'جديد'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         جديد
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="propertyStatus"
//                                             value="مستعمل"
//                                             checked={this.state.propertyStatus === 'مستعمل'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         مستعمل
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>المدينة / المحافظة <span className='starStyle'>*</span></label>
//                             <select
//                                 name="city"
//                                 value={this.state.city}
//                                 onChange={this.handleInputChange}
//                                 className='custom-select droupdawnStyle'
//                             >
//                                 <option value="المحافظة 1">المحافظة القاهرة</option>
//                                 <option value="المحافظة 2">المحافظة الحيزة</option>
//                             </select>
//                         </div>


//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>العقار <span className='starStyle'>*</span></label>
//                             <select
//                                 name="propertyType"
//                                 value={this.state.propertyType}
//                                 onChange={this.handleInputChange}
//                                 className='custom-select droupdawnStyle'
//                             >
//                                 <option value="منزل">منزل</option>
//                                 <option value="شقة">شقة</option>
//                                 <option value="أرض">أرض</option>
//                             </select>
//                         </div>




//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>نوع التعدى <span className='starStyle'>*</span></label>
//                             <select
//                                 name="trespassType"
//                                 value={this.state.trespassType}
//                                 onChange={this.handleInputChange}
//                                 className='custom-select droupdawnStyle'
//                             >
//                                 <option value="نوع 1">نوع 1</option>
//                                 <option value="نوع 2">نوع 2</option>
//                             </select>
//                         </div>



//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>الحالة العامة للعقار <span className='starStyle'>*</span></label>
//                             <input
//                                 type="text"
//                                 name="propertyGeneralStatus"
//                                 value={this.state.propertyGeneralStatus}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>





//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>الجهة المالكة <span className='starStyle'>*</span></label>
//                             <input
//                                 type="text"
//                                 name="propertyOwner"
//                                 value={this.state.propertyOwner}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>

//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>وصف الموقع <span className='starStyle'>*</span></label>
//                             <textarea
//                                 name="locationDescription"
//                                 value={this.state.locationDescription}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>

//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>المقترحات <span className='starStyle'>*</span></label>
//                             <textarea
//                                 name="suggestions"
//                                 value={this.state.suggestions}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>

//                         <div className='form-group'>
//                             <label className='pt-2 pb-1'>تصفح الملفات لتحميلها</label>
//                             <input
//                                 type="file"
//                                 accept=".pdf"
//                                 onChange={this.handleFileChange}
//                                 className='form-control-file'
//                             />
//                         </div>


//                         <button type="submit" className='btnStyle'>حفظ</button>
//                     </form>
//                 </div>
//             </div>
//   </>
//   )
// }

// export default Tsh




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import './Tsh.css';

// class Tsh extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             trespassStatus: 'نعم',
//             propertyStatus: 'جديد',
//             city: '',
//             propertyType: 'منزل',
//             propertyGeneralStatus: '',
//             propertyOwner: '',
//             locationDescription: '',
//             suggestions: '',
//             selectedFile: null,
//         };
//     }

//     handleInputChange = (event) => {
//         const { name, value } = event.target;
//         this.setState({ [name]: value });
//     };

//     handleFileChange = (event) => {
//         const file = event.target.files[0];
//         this.setState({ selectedFile: file });
//     };

//     handleSubmit = (event) => {
//         event.preventDefault();
//     };

//     render() {
//         return (
//             <div className='col-lg-3 py-4'>
//                 <div className='text-center '>
//                     <h1 className='h4'>رصد حالة تعدي</h1>
//                 </div>
//                 <div className='borderStyle mb-4'></div>

//                 <div>
//                     <form onSubmit={this.handleSubmit}>
//                         <div className='d-flex flex-row pb-3'>
//                             <div className='radio1'>
//                                 <div>
//                                     <label>حالة التعدي <span className='starStyle'>*</span></label>
//                                 </div>
//                                 <div className='d-flex flex-column px-5'>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="trespassStatus"
//                                             value="نعم"
//                                             checked={this.state.trespassStatus === 'نعم'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         نعم
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="trespassStatus"
//                                             value="لا"
//                                             checked={this.state.trespassStatus === 'لا'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         لا
//                                     </label>
//                                 </div>
//                             </div>
//                             <div className='radio2'>
//                                 <div>
//                                     <label>الحالة <span className='starStyle'>*</span></label>
//                                 </div>
//                                 <div className='d-flex flex-column px-5'>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="propertyStatus"
//                                             value="جديد"
//                                             checked={this.state.propertyStatus === 'جديد'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         جديد
//                                     </label>
//                                     <label>
//                                         <input
//                                             type="radio"
//                                             name="propertyStatus"
//                                             value="مستعمل"
//                                             checked={this.state.propertyStatus === 'مستعمل'}
//                                             onChange={this.handleInputChange}
//                                         />
//                                         مستعمل
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className='form-group '>
//                             <label>المدينة / المحافظة <span className='starStyle'>*</span></label>
//                             <select
//                                 name="city"
//                                 value={this.state.city}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             >
//                                 <option value="المحافظة 1">المحافظة القاهرة</option>
//                                 <option value="المحافظة 2">المحافظة الحيزة</option>
//                             </select>
//                         </div>

//                         <div className='form-group'>
//                             <label>العقار <span className='starStyle'>*</span></label>
//                             <select
//                                 name="propertyType"
//                                 value={this.state.propertyType}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             >
//                                 <option value="منزل">منزل</option>
//                                 <option value="شقة">شقة</option>
//                                 <option value="أرض">أرض</option>
//                             </select>
//                         </div>

//                         <div className='form-group'>
//                             <label>الحالة العامة للعقار <span className='starStyle'>*</span></label>
//                             <input
//                                 type="text"
//                                 name="propertyGeneralStatus"
//                                 value={this.state.propertyGeneralStatus}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>

//                         <div className='form-group'>
//                             <label>الجهة المالكة <span className='starStyle'>*</span></label>
//                             <input
//                                 type="text"
//                                 name="propertyOwner"
//                                 value={this.state.propertyOwner}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>

//                         <div className='form-group'>
//                             <label>وصف الموقع <span className='starStyle'>*</span></label>
//                             <textarea
//                                 name="locationDescription"
//                                 value={this.state.locationDescription}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>

//                         <div className='form-group'>
//                             <label>المقترحات <span className='starStyle'>*</span></label>
//                             <textarea
//                                 name="suggestions"
//                                 value={this.state.suggestions}
//                                 onChange={this.handleInputChange}
//                                 className='form-control droupdawnStyle'
//                             />
//                         </div>

//                         <div className='form-group'>
//                             <label>تصفح الملفات لتحميلها</label>
//                             <input
//                                 type="file"
//                                 accept=".pdf"
//                                 onChange={this.handleFileChange}
//                                 className='form-control-file'
//                             />
//                         </div>
//                         <button type="submit" className='btnStyle btn btn-primary'>حفظ</button>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Tsh;




