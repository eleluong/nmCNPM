import HeaderAdmin from "../HeaderAdmin/HeaderAdmin"
import {Routes, Route} from "react-router-dom"
import CRUD from "../HomeAdmin/CRUD/CRUD"
import Report from "./Report/Report.jsx"

function HomeStaff() {
    return (
        <div>
            <HeaderAdmin/>
            <Routes>
                <Route path="/" element={<CRUD/>}></Route>
                <Route path="/CRUD/*" element={<CRUD/>}></Route>
                <Route path="/Report" element={<Report />}></Route>
            </Routes>
        </div>
    )
}

export default HomeStaff