import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Content from "../Content/Content.js";
import Products from "../products/products.jsx";
function Home() {
    return (
        <div>
            <Header/>
            <Content/>
            <Products/>
            <Footer />
        </div>
    )
}
export default Home