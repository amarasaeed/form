import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';  // Font Awesome
import { MdEmail, MdCall, MdLocationOn } from 'react-icons/md';  // Material Design Icons


export default function Form() {
    return (
        <div >
            <div>
                <h1>Lets Get In Touch With Us</h1>
                <p>   <a href="mailto:example@gmail.com" aria-label="Email"><MdEmail /></a>lorem@gmail.com</p>
                <p>  <a href="https://maps.google.com" aria-label="Location"><MdLocationOn /></a>faisalabad, pakistan</p>
                <p> <a href="tel:+123456789" aria-label="Call"><MdCall /></a>072817283728</p>
                <h3>connect with me:
                </h3>
                <div>
                    <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                    <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>


                    <a href="https://youtube.com" aria-label="YouTube"><FaYoutube /></a>
                    <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a></div>
            </div>


        </div>
    )
}
