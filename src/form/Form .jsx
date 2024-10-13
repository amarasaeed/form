import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';  // Font Awesome
import { MdEmail,  MdPhoneInTalk, MdLocationOn } from 'react-icons/md';  // Material Design Icons



export default function Form() {
    return (
        <div className='mx-[16%] my-2  border border-white  bg-gray-50 rounded-lg ' >
            <div className='flex justify-between my-3  border bg-white mx-4 shadow-white: rgba(0, 0, 0, 0.2) rounded-lg '  >
            <div className='text-slate-500 space-y-3 p-5'>
                <h1 className='text-teal-300 font-bold mb-8'>Lets Get In Touch With Us</h1>
                <p className='flex '>   <span className='text-teal-300 mr-2 py-1'><MdEmail /></span>lorem@gmail.com</p>
                <p className='flex '>  <span className='text-teal-300 mr-2 py-1'><MdLocationOn /></span>faisalabad, pakistan</p>
                <p className='flex '> <span className='text-teal-300 mr-2 py-1'><MdPhoneInTalk /></span>072817283728</p>
                <h3 className='mt-8'>connect with me:
                </h3>
                <div  className='flex  mr-2 '>
                <span className='text-teal-300  px-1 '><FaFacebook /></span>
                <span className='text-teal-300  px-1 '><FaTwitter /></span>


                <span className='text-teal-300  px-1'><FaYoutube /></span>
                <span className='text-teal-300  px-1'><FaInstagram /></span></div>
            </div>
            <div className='bg-teal-300  px-6 py-2  '>
                <h1 className='text-white font-bold'>  contact with us</h1>
                <form action="">
                <fieldset  className="border  text-white border-white px-20  py-3 rounded-full w-2/6">
<legend>username</legend>
                </fieldset>
                <fieldset  className="border   text-white border-white  px-24  py-3 rounded-full w-2/6">
<legend>Email</legend>

                </fieldset>

                <fieldset  className="border  text-white border-white   px-24 py-3 rounded-full w-2/6">
<legend>Phone</legend>

                </fieldset>

                <fieldset  className="border  text-white border-white px-20  py-12 rounded-2xl ">
<legend className='text-left w-full'>Message</legend>

                </fieldset><br />
                <button className="flex items-center justify-center bg-white px-5 border border-white rounded-full text-teal-300 font-bold">
    Send
</button></form>


            </div>

            </div>
        </div>
    )
}
