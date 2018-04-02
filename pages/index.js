import Fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Prices from '../components/Prices'
import { Alert, Badge } from 'reactstrap'

const Index = (props) => (
  <Layout>
    <div>
      <Alert color="danger" >Testing! <Badge color="secondary" >Beta</Badge></Alert>
      <h1>Welcome to my app <Badge color="secondary" >Beta</Badge></h1>
      <p>Check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.json();

  return {
    bpi: data.bpi
  }
}

export default Index