import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>


      {/* Why Take The Long Way Around */}
      <div className='bg-blue-500'>
        <h2 className='text-4xl text-center font-semibold text-white pt-28'>Why take the long way around?</h2>
        <h4 className='text-lg text-center text-bold text-slate-300 mt-4'> We know a shortcut . join 1,00,000 job seeker worldwide and build your best resume yet.</h4>
        <button className='mx-auto rounded-lg bg-indigo-900 text-white p-5 '> Create Resume</button>
      </div>



    </div>
  )
}
