import Head from 'next/head'

class Header extends React.Component {
    render() {
        return(
            <div>
                <Head>
                    <title>Test App</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css"/>
                </Head>
            </div>
        )
    }
}

export default Header