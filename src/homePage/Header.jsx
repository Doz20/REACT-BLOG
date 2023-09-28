import React,{Component} from "react";

import { Link } from "react-router-dom";

class Header extends Component{
    render(){



        return(
            <>
 

 <header id="myHeader" className="bg-gray-800 text-white py-4 sticky  fixed top-0 left-0 w-full z-50 shadow-md transition-opacity duration-400 opacity-100">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
        <div className="text-2xl font-bold flex-2 px-15">
          <img
                className="mx-auto h-15 w-10"
                src="../SD1.png"
                alt="Sacred Desgin"
              />
          </div>
           
      
        <ul className="flex space-x-9 justify-center flex-2 px-15 text-xl">
            <li>
            <Link to="/home" className="hover:text-gray-400">Home</Link>
            </li>
            <li>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </ul>
   
       
        </nav>
      </div>
    </header>
   
  


            </>
        )
    }
}

export default Header

window.addEventListener('scroll', function () {
  const header = document.getElementById('myHeader');
  const scrollPosition = window.scrollY;

  if (scrollPosition >1) {
    header.classList.remove('opacity-100');
    header.classList.add('opacity-90');
  } else if(scrollPosition < 1){
    header.classList.remove('opacity-90');
    header.classList.add('opacity-100');
  }
});