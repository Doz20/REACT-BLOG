import React,{Component} from "react";
import Header from "../homePage/Header";
import SlideContainer from "../component/SliderContainer";
import Content from "../homePage/Content";
import Footer from '../homePage/Footer'
class Home extends Component{
    render(){
        return(
            <>
            

   


            <Header/>
            <SlideContainer/>

<Content/>
<Footer/>
            
            </>
        )
    }
}
export default Home