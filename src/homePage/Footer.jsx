import React,{Component} from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'


class Footer extends Component{
    render(){ 

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
return(
<div className=" w-full mt-10 h-50">
  <footer className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-7 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <p className="mt-2 text-sm text-gray-500">Sacred Design for desgining creative ideas</p>
      </div>
      <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <nav className="list-none mb-10">
            <li>
              <a className="text-gray-400 hover:text-white" href="/about">About</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="/home">Blog</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="https://github.com/Doz20">GitHub</a>
            </li>
            <li>
              <a className="text-gray-400 hover:text-white" href="https://github.com/Doz20">Twitter</a>
            </li>
          </nav>
        </div>
    
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
            First Link
            </li>
            <li>
             Second Link
            </li>
            <li>
              Third Link
            </li>
            <li>
             Fourth Link
            </li>
          </nav>
        </div>
    
      </div>
    </div>

    <div className="bg-gray-800 bg-opacity-75">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-gray-400 text-sm text-center sm:text-left">© 2023 
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a href="https://instagram.com/sacred__design?igshid=MzMyNGUyNmU2YQ=="> <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 mr-5 h-5"
              viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
            </a>
            <a href="https://instagram.com/sacred__design?igshid=MzMyNGUyNmU2YQ=="> 
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 mr-5 h-5"
              viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
              </path>
            </svg>
            </a>
            <a href="https://instagram.com/sacred__design?igshid=MzMyNGUyNmU2YQ=="> 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              className="w-5 mr-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
            </a>
        </span>
      </div>
    </div>

    <button className="fixed bottom-4 right-4 pl-5 pr-5 pt-2 pb-2 bg-blue-500 text-white rounded-full shadow" onClick={handleScrollToTop}>
    <FontAwesomeIcon icon={faCaretUp} />
    </button>
  </footer>

</div>

        )
    }
}

export default Footer