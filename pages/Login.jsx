import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import './assets/tailwind.css';
import Layout from "../components/Layout"
import utilStyles from "../styles/utils.module.css"
import NavBar from "../components/NavBar"
import Card from '../components/Card'



export default function Login() {
  return (
    <div>
      <NavBar />
      
      {/* <h1>Tailwind CSS</h1>
      <h2>Incorporado con PostCss</h2>
      <button className="btn btn-blue btn-blue:hover">Botón</button> */}
      
    

        <div className='container mx-auto border-green-600 box-border h-32 w-32 p-8 border-4 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-400 xl:bg-indigo-400 py-2 px-4 text-center'>
        {/* <div class="bg-teal-400 sm:bg-red-400 md:bg-green-400 lg:bg-yellow-400 xl:bg-indigo-400 py-2 px-4 text-center">Resize window */}
        <button className="btn btn-blue btn-blue:hover">Botón</button>
        </div>
        
     
      

     
    </div>
  )
}
