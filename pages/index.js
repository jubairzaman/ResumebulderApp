import Head from 'next/head'
import Image from 'next/image'
import BannerPart from '../components/HomePage/BannerPart'
import Itssoeasy from '../components/HomePage/Itssoeasy'
import Whytakethelong from '../components/HomePage/Whytakethelong'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <BannerPart></BannerPart>
      <Itssoeasy></Itssoeasy>
      <Whytakethelong></Whytakethelong>






    </div>
  )
}
