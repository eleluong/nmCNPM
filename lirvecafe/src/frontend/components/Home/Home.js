import Header from "../Header/Header"
import Footer from "../../components/Footer/Footer"
import SigninScreen from "../Signin/SigninScreen"
import { Routes, Route, Link } from "react-router-dom"
import * as ROUTES from '../constants/routes/routes'
function Home() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}
export default Home