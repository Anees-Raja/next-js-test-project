import Head from 'next/head'

class Header extends React.Component {
    render() {
        return(
            <div>
                <Head>
                    <title>Test App</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
                </Head>
            </div>
        )
    }
}

export default Header