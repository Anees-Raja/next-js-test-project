import Link from 'next/link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Badge } from 'reactstrap';

class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return(
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto" >My App Name</NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink href="/testing" >Testing Page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" >About</NavLink>
            </NavItem>
          </Nav>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/about" >About <Badge color="secondary" >New</Badge></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/testing" >Test</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MainNav
