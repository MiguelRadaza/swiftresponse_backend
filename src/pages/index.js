import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'callision-import/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div class="midtext">
        <div><h1>Welcome To CALLision</h1></div><br />
        <div><h3>A Website for Managing Reports for Road Incidents</h3><br /></div>
        <a href='/auth/login' className='button-2' style={{ textDecoration: 'none' }}>Login</a>
      </div>
    </>
  )
}
