import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Content from "../Content/Content.js";
import Products from "../products/products.jsx";
import Bill from "../createBill/bill.jsx";
function Home() {
    return (
        <div>
            <Header/>
            <Content/>
            <Products/>
            <Bill/>
            <Footer />

        </div>
    )
}

export default Home