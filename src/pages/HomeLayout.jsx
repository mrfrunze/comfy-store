import { Outlet } from "react-router-dom"
import { Header } from "../components"



const HomeLayout = () => {
  return (
    <>
      
      <Header/>
      <section className="aline-element py-20">
         <Outlet />
      </section>
     
    </>
  )
}

export default HomeLayout