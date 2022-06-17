import Head from 'next/head'
import Image from 'next/image'
import BannerPart from '../components/HomePage/BannerPart'
import CreateYourBestresue from '../components/HomePage/CreateYourBestresue'
import Itssoeasy from '../components/HomePage/Itssoeasy'
import Whytakethelong from '../components/HomePage/Whytakethelong'
import SlidingView from '../components/slidingView'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <BannerPart></BannerPart>
      <CreateYourBestresue></CreateYourBestresue>
      <Itssoeasy></Itssoeasy>

      <Whytakethelong></Whytakethelong>






    </div>
  )
}
