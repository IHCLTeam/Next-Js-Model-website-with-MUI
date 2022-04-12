import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout /> 
      <Footer />
    </div>
  )
}

export default Home
