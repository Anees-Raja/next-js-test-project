import Header from './Header'
import MainNav from './Navbar'

const Layout = (props) => (
    <div>
        <Header />
        <MainNav />
        <div className="container" >
            {props.children}
        </div>
    </div>
)

export default Layout