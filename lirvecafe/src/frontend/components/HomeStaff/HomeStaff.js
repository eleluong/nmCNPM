import HeaderStaff from "../HeaderStaff/HeaderStaff"
import {Routes, Route} from "react-router-dom"
import CreateOrder from "./CreateOrder/CreateOrder"
import Orders from "./Orders/Orders"
import Drinks from "./Drinks/Drinks"
import Book from "./Book/Book"
import CreateEvent from "./CreateEvent/CreateEvent"
import Events from "./Events/Events"
function HomeStaff() {
    return (
        <div>
            <HeaderStaff/>
            <Routes>
                <Route path="/" element={<CreateOrder/>}></Route>
                <Route path="/CreateOrder" element={<CreateOrder/>}></Route>
                <Route path="/Orders" element={<Orders/>}></Route>
                <Route path="/Drinks" element={<Drinks/>}></Route>
                <Route path="/Book" element={<Book/>}></Route>
                <Route path="/CreateEvent" element={<CreateEvent/>}></Route>
                <Route path="/Events" element={<Events/>}></Route>
            </Routes>
        </div>
    )
}
export default HomeStaff