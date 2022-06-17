import Head from 'next/head'
import Image from 'next/image'
import BannerPart from '../components/HomePage/BannerPart'
import CreateYourBestresue from '../components/HomePage/CreateYourBestresue'
import Itssoeasy from '../components/HomePage/Itssoeasy'
import Removetheheadache from '../components/HomePage/Removetheheadache'
import StandOutWith from '../components/HomePage/StandOutWith'
import Templetesthathave from '../components/HomePage/templetesthathave'
import WhyItPay from '../components/HomePage/whyItPay'
import Whytakethelong from '../components/HomePage/Whytakethelong'


export default function Home() {
  return (
    <div>
      <BannerPart></BannerPart>
      <CreateYourBestresue></CreateYourBestresue>
      <Templetesthathave></Templetesthathave>
      <Itssoeasy></Itssoeasy>
      <WhyItPay></WhyItPay>
      <Removetheheadache></Removetheheadache>
      <StandOutWith></StandOutWith>

      <Whytakethelong></Whytakethelong>






    </div>
  )
}
