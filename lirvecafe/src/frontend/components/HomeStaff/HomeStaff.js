import HeaderStaff from "./HeaderStaff/HeaderStaff"
import {Routes, Route} from "react-router-dom"
import TaoDonHang from "./TaoDonHang/TaoDonHang"
import DonHang from "./DonHang/DonHang"
import Sach from "./Sach/Sach"
import DoUong from "./DoUong/DoUong"
import TaoSuKien from "./TaoSuKien/TaoSuKien"
import SuKien from "./SuKien/SuKien"
function HomeStaff() {
    return (
        <div>
            <HeaderStaff />
            <Routes>
                <Route path="/" element={<TaoDonHang/>}></Route>
                <Route path="/TaoDonHang" element={<TaoDonHang/>}></Route>
                <Route path="/DonHang" element={<DonHang/>}></Route>
                <Route path="/DoUong" element={<DoUong/>}></Route>
                <Route path="/Sach" element={<Sach/>}></Route>
                <Route path="/TaoSuKien" element={<TaoSuKien/>}></Route>
                <Route path="/SuKien" element={<SuKien/>}></Route>
            </Routes>
        </div>
    )
}
export default HomeStaff