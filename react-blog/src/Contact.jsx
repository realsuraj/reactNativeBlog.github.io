import React, { useState } from "react";


const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const { name, value} = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname} My phone number is ${data.phone} my email id is ${data.email} my message is ${data.msg}`)
    };

    return(
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container container_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Full name</label>
                            <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Full name" />
                        </div>

                        
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                            <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number" />
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} placeholder="emailHelp" />
                        </div>


                        <div className="form-group mb-3">
                            <label htmlFor="exampleFormControlTextarea1">message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                        </div>
                                                
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;