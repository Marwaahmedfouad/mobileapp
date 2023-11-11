// import React from 'react'

// const Balagat = () => {
//   return (
//     <div>Balagat</div>
//   )
// }

// export default Balagat

/////////////////////////////////


import React, { Component } from 'react';
import back from '../assets/images/back.png'
import './Balagat.css';

class Balagat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trespassStatus: 'نعم',
            propertyStatus: 'جديد',
            city: '',
            propertyType: 'منزل',
            propertyGeneralStatus: '',
            propertyOwner: '',
            locationDescription: '',
            suggestions: '',
            selectedFile: null,
            trespassType: '',
        };

    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFileChange = (event) => {
        const file = event.target.files[0];
        this.setState({ selectedFile: file });
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className='container col-lg-3 pt-3'>
                <div className='container'>
                    <h1 className='h4 titleStyle'>رصد حالة تعدي</h1>
                    {/* <img src={back} alt=''></img> */}
                </div>
                <div className='borderStyle mb-3'></div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='d-flex flex-row pb-0'>
                            <div className='radio1'>
                                <div>
                                    <label className='textStyle'>حالة التعدي <span className='starStyle'>*</span></label>
                                </div>
                                <div className='d-flex flex-column px-5 textStyle'>
                                    <label>
                                        <input
                                            type="radio"
                                            name="trespassStatus"
                                            value="نعم"
                                            checked={this.state.trespassStatus === 'نعم'}
                                            onChange={this.handleInputChange}
                                        />
                                        نعم
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="trespassStatus"
                                            value="لا"
                                            checked={this.state.trespassStatus === 'لا'}
                                            onChange={this.handleInputChange}
                                        />
                                        لا
                                    </label>
                                </div>
                            </div>
                            <div className='radio2'>
                                <div>
                                    <label className='textStyle'>الحالة <span className='starStyle'>*</span></label>
                                </div>
                                <div className='d-flex flex-column px-5 textStyle'>
                                    <label>
                                        <input
                                            type="radio"
                                            name="propertyStatus"
                                            value="جديد"
                                            checked={this.state.propertyStatus === 'جديد'}
                                            onChange={this.handleInputChange}
                                        />
                                        جديد
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="propertyStatus"
                                            value="مستعمل"
                                            checked={this.state.propertyStatus === 'مستعمل'}
                                            onChange={this.handleInputChange}
                                        />
                                        مستعمل
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='form-group '>
                            <label className='pt-2 pb-1 textStyle'>المدينة / المحافظة <span className='starStyle'>*</span></label>
                            <div className='selectStyle'>
                                <select
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    className='custom-select droupdawnStyle'
                                >
                                    <option value="المحافظة 1">المحافظة القاهرة</option>
                                    <option value="المحافظة 2">المحافظة الحيزة</option>
                                </select>
                            </div>
                        </div>


                        <div className='form-group '>
                            <div className=''>
                                <label className='pt-2 pb-1 textStyle'>العقار <span className='starStyle'>*</span></label>
                            </div>
                            <div className='selectStyle'>
                                <select
                                    name="propertyType"
                                    value={this.state.propertyType}
                                    onChange={this.handleInputChange}
                                    className='custom-select droupdawnStyle '
                                >
                                    <option value="منزل">منزل</option>
                                    <option value="شقة">شقة</option>
                                    <option value="أرض">أرض</option>
                                </select>
                            </div>
                        </div>




                        <div className='form-group '>
                            <label className='pt-2 pb-1 textStyle'>نوع التعدى <span className='starStyle'>*</span></label>
                            <div className='selectStyle'>
                                <select
                                    name="trespassType"
                                    value={this.state.trespassType}
                                    onChange={this.handleInputChange}
                                    className='custom-select droupdawnStyle'
                                >
                                    <option value="نوع 1" className='optionStyle'>نوع 1</option>
                                    <option value="نوع 2">نوع 2</option>
                                </select>
                            </div>
                        </div>



                        <div className='form-group'>
                            <label className='pt-2 pb-1 textStyle'>الحالة العامة للعقار <span className='starStyle'>*</span></label>
                            <input
                                type="text"
                                name="propertyGeneralStatus"
                                value={this.state.propertyGeneralStatus}
                                onChange={this.handleInputChange}
                                className='form-control droupdawnStyle'
                            />
                        </div>





                        <div className='form-group'>
                            <label className='pt-3 pb-1 textStyle'>الجهة المالكة <span className='starStyle'>*</span></label>
                            <input
                                type="text"
                                name="propertyOwner"
                                value={this.state.propertyOwner}
                                onChange={this.handleInputChange}
                                className='form-control droupdawnStyle'
                            />
                        </div>

                        <div className='form-group'>
                            <label className='pt-2 pb-1 textStyle'>وصف الموقع <span className='starStyle'>*</span></label>
                            <textarea
                                name="locationDescription"
                                value={this.state.locationDescription}
                                onChange={this.handleInputChange}
                                className='form-control droupdawnStyle'
                            />
                        </div>

                        <div className='form-group'>
                            <label className='pt-2 pb-1 textStyle'>المقترحات <span className='starStyle'>*</span></label>
                            <textarea
                                name="suggestions"
                                value={this.state.suggestions}
                                onChange={this.handleInputChange}
                                className='form-control droupdawnStyle'
                            />
                        </div>

                        <div className='form-group'>
                            <div>
                                <label className='pt-2 pb-1 textStyle'>تصفح الملفات لتحميلها</label>
                            </div>
                            <div className='selectStyle'>

                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={this.handleFileChange}
                                    className='form-control-file'
                                />
                            </div>
                        </div>

                        <div className='parentBtnStyle'>
                            <button type="submit" className='btnStyle  my-3 '>حفظ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Balagat;