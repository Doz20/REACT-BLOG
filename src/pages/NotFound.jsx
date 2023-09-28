import React,{Component} from "react";
class NotFound extends Component{
    render(){
        return(
            <>
            

            <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <h1 className="text-4xl font-bold mb-4 text-purple-900">404</h1>
      <p className="text-xl text-gray-100">Page not found</p>
    </div>
            
            </>
        )
    }
}
export default NotFound