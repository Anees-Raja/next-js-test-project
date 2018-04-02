import Example from '../components/Testing'
import { Container } from 'reactstrap'
import Layout from '../components/Layout'

class Testing extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Example />
        </Container>
      </Layout>
    )
  }
}

export default Testing