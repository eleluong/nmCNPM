import HeaderStaff from "../HeaderStaff/HeaderStaff"
import {Routes, Route, HashRouter} from "react-router-dom"
import CreateOrder from "./CreateOrder/CreateOrder"
import Orders from "./Orders/Orders"
import CreateEvent from "./CreateEvent/CreateEvent"
import Events from "./Events/Events"
import Product from "./Products/Products"

function HomeStaff() {
    return (
        <div>
            <HeaderStaff/>
            <Routes>
                <Route path="/" element={<CreateOrder/>}></Route>
                <Route path="/CreateOrder" element={<CreateOrder/>}></Route>
                <Route path="/Orders" element={<Orders/>}></Route>
                <Route path="/Products/*" element={<Product/>}></Route>
                <Route path="/CreateEvent" element={<CreateEvent/>}></Route>
                <Route path="/Events" element={<Events/>}></Route>
            </Routes>
        </div>
    )
}

export default HomeStaff