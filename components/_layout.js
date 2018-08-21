import 'isomorphic-fetch'
import Head from 'next/head'
import styles from '../styles/styles.scss'
import Navbar from './Navbar';

export default class extends React.Component {
  render() {
    return (
      <div role="main">
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="apple-touch-icon" href="/static/icon.png" />

          <meta name="theme-color" content="#ff6600" />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="icon" href="static/img/favicon.ico" />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}