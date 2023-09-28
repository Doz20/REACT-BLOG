import React,{Component} from "react";
import Header from '../homePage/Header'
class Contact extends Component{
    render(){
        return(
<>
<Header/>
  <div className=" rounded mt-10 m-5 bg-purple-300  justify-center items-center  overflow-hidden shadow-lg h-100 w-30">
    <div className="mx-auto grid max-w-2xl grid-cols-2 items-center gap-x-4 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sacred Design</h2>
          <p className="mt-4 text-gray-700">
          Sacred Design for desgining creative ideas.Sacred Design for desgining creative ideas.Sacred Design for desgining creative ideas
          </p>

              <div  className="border-t-4 border-gray-100 mt-10 pt-4">
               
              </div>
        </div>


        <div>
         

        <span className="sm:ml-auto sm:mt-0 m-5 p-5 justify-items-end sm:justify-start">
            <a href="https://instagram.com/sacred__design?igshid=MzMyNGUyNmU2YQ==" className="m-2">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 mr-5 h-5" viewBox="0 0 24 24">
                   <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
               </svg>
            </a>
            <a href="https://instagram.com/sacred__design?igshid=MzMyNGUyNmU2YQ==" className="m-2"> 
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 mr-5 h-5"
              viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
              </path>
            </svg>
            </a>
            <a href="https://instagram.com/sacred__design?igshid=MzMyNGUyNmU2YQ==" className="m-2"> 
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              className="w-5 mr-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
            </a>
        </span>
         
        </div>
        </div>
       </div>
</>
        )
    }
}
export default Contact