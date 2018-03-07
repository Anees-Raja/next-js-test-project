import Header from './Header'
import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        <Header />
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout