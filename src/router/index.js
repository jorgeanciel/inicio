import PageMain from "../page/PageMain";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header"
const Router=() =>{
    return(
        <BrowserRouter>
         <Header/>
         
         <Routes>
           <Route path="/" element={<PageMain/>}/>
         </Routes>
         
         
        </BrowserRouter>
    )
}
export default Router;