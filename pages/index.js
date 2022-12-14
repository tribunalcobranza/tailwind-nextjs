import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import './assets/tailwind.css';
import Layout from "../components/Layout"
import utilStyles from "../styles/utils.module.css"
import NavBar from "../components/NavBar"
import Card from '../components/Card'





export default function Home() {
  return (
    <div>
      <NavBar />
      
      
      {/* <h1>Tailwind CSS</h1>
      <h2>Incorporado con PostCss</h2>
      <button className="btn btn-blue btn-blue:hover">Botón</button> */}
      <div className="my-5 flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo='https://picsum.photos/800/600' />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo='https://picsum.photos/800/600' />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo='https://picsum.photos/800/600' />
        </div>
      </div>

     
    </div>
  )
}
