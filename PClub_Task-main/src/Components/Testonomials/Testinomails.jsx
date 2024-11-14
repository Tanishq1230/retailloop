import React, { useState } from 'react';
import { Testinomials_card } from './Testinomials_card';
// import {boy}  from "../../assets/images/boy.png"
const Testinomails = () => {    
    const testinomials = [
        {
            avatar : "https://erp.psitche.ac.in/assets/img/Simages/2333316.jpg",
            alt : "Boy",
            desc : "I’ve had a great experience shopping on this website! It’s easy to navigate, the products are always high quality, and the checkout process is secure. I love the daily deals and the free delivery option, which make it even better. The customer service is responsive and helpful, ensuring I’m always satisfied with my purchases. Overall, it’s a reliable and enjoyable shopping experience!",
            name : "Anshul Porwal",
            role : "Student"
        },
        {
            avatar : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtjHZ_GDyWez4oT7zZqVGQZxtr-YJTtYlqlNPeTi8x1w&s",
            alt : "Boy",
            desc : "Shopping on this website has been a breeze! The site is user-friendly, and I always find what I need quickly. The products are top quality, and I appreciate the fast, free shipping. Customer service is always helpful and responsive if I ever need assistance. With great deals and a seamless experience from start to finish, this is my go-to place for online shopping!",
            name : "Antara Agarwal",
            role : "Professor"
        },
        {
            avatar : "https://netstorage-tuko.akamaized.net/images/c1b5590945d4be86.jpg?imwidth=900",
            alt : "Girl",
            desc : "I’ve had a fantastic experience shopping here! The website is easy to use, and I love how fast my orders arrive. The quality of the products is always impressive, and the free delivery is a huge plus. Customer service is friendly and quick to resolve any questions. Overall, it’s a reliable, hassle-free shopping experience that I’ll definitely continue to enjoy!",
            name : "Khushi Jain",
            role : "Student"
        },
    ]    
    return (
        <>
      <div>
        <div className="">
          <div className="mx-auto lg:p-16 p-4">
            <div className=' text-center'>
            <h1 className="lg:text-4xl text-2xl text lg:mb-12 mb-6 font-normal lora-500 text-subheading">Here's what people are saying</h1>
            </div>
            <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3">
              {testinomials.map(({ avatar, alt ,desc ,name , role }) => (
                <li key={name} className="hover:scale-[1.02] mb-4 transition-all duration-200">
                  <Testinomials_card avatar = {avatar} alt = {alt} desc = {desc} name = {name} role = {role}/>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
    )
}
export default Testinomails;