"use client"
import Image from 'next/image'
import { Modal, Box, Typography } from "@mui/material";
import styles from './page.module.css';
import  Icon  from '@mdi/react';
import {mdiFlower } from '@mdi/js';
import MenuIntroduction from './menu';
import { useMediaQuery } from "react-responsive";
// import ResponsiveAppBar from '@/app/menubar';
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion'
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
export default function Home() {
  const ref = useRef(null);
  const aaa = localStorage.setItem('Cart', '')
  async function a() {
      await ref.current?.scrollIntoView({behavior:'smooth', block:'center'})    }
  const lsv = JSON.parse(localStorage.getItem("Cart") || ['']);
  const [dd, setdd] = useState(aaa)
  const [cart,setcart] = useState(lsv)
  let p = ""
  const d = () => {
    p = lsv
    p.pop()
    console.log(lsv)
    console.log(p)
    localStorage.removeItem("Cart");
    localStorage.setItem("Cart",JSON.stringify(p))
    setcart(p)
    

}
const n = lsv.length
console.log(lsv[1])
console.log(n)
let totall = 0
  for (let index = 0; index < n ; index++) {
      const element = lsv[index];
      totall += parseFloat(element.Q)
    console.log(totall)
  }
console.log(totall)
let dchecklist =  lsv.map((check) => {
  return(
    <div style={{marginRight:'auto', marginLeft:'auto', width:'70%', }}>
        <a
        // href="/articles/1"
        className={styles.card2}
        style={{display:'ruby-text', marginLeft:'0%', maxWidth:'52vw'}}
        
        >
     <div style={{display:"flex",}} >
        <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh", overflow:'visible'}} ></img>
        <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
        
         <h2 style={{textAlign:'center'}}>
           {check.Bname}
          </h2>
          <div style={{textAlign:'center'}}>
          <p >{check.Q} Omr </p>
          </div>
       </div>
        
     </div>
   </a>
    </div>
)
})
let mchecklist =  lsv.map((check) => {
  return(
    <div style={{marginRight:'auto', marginLeft:'auto', width:'90%', }}>
        <a
        // href="/articles/1"
        className={styles.card2}
        style={{display:'ruby-text', marginLeft:'0%', maxWidth:'80vw'}}
        
        >
     <div style={{display:"flex",}} >
        <img src={check.Img} alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"13vh", overflow:'visible'}} ></img>
        <div style={{maxWidth:"100vw", marginLeft:"1%", paddingTop:"1%"}}>
        
         <h2 style={{textAlign:'center'}}>
           {check.Bname}
          </h2>
          <div style={{textAlign:'center'}}>
          <p >{check.Q} Omr </p>
          </div>
       </div>
        
     </div>
   </a>
    </div>
)
})
  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart))
  }, [cart])
  const handleredirect = () => {
    setTimeout(()=> {
        window.location.href = "/"
        
    })
};
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [Quantity, SetQuantity] = useState("1")
const [state, handleSubmit] = useForm("mvojvawp");
if (state.succeeded) {
    handleredirect();
    return <Modal
    open
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={{color:'blue'}}  component="h2">
            Thank you
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color:'black' }}>
            Your order has been successful
          </Typography>
        </Box>
      </Modal>
}
  return (
    <div style={{overflow:'hidden'}}>
      {isDesktopOrLaptop &&<main className={styles.main} style={{background:'#f2dadd'}}>
      <div className={styles.description} style={{position:'fixed'}}>
        
        <MenuIntroduction/>
        <div className={styles.card1}>
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            
            <Icon path={mdiFlower } style={{marginRight:2}}size={1} />
            Crunch&Munch
          </a>
        </div>
      </div>

      <div className={styles.center} style={{marginTop:'20vh'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163508-D2DB7369-76F9-4143-8F6C-5BCD545A608D.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h1 className={styles.center1}  style={{width:"45%", marginLeft:"10%",WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#BA5971' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h1>
      </div>

      {/* <div className={styles.grid} style={{color:'#F2F0DF'}}>
        <a
          href="/products"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Products <span>-&gt;</span>
          </h2>
          <p>Click to check out all the products the we offer and plan to offer.</p>
        </a>

        <a
          href="/about"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About us <span>-&gt;</span>
          </h2>
          <p>Learn about our goals, mission and crew.&nbsp;</p>
        </a>

        <a
          href="/ar"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Arabic page <span>-&gt;</span>
          </h2>
          <p>Click to load the Arabic site.</p>
        </a>

        <a
          href=""
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Coming soon <span>-&gt;</span>
          </h2>
          <p>
            ...
          </p>
        </a>
      </div> */}
      
    </main>}
    {isTabletOrMobile &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)'}}>
    <div className={styles.description1} style={{position:'fixed', padding:'3%', paddingTop:'-13%', marginLeft:'8%'}}>
    
        
    <MenuIntroduction/>
    <Link
        href="/"
        style={{width:'50%', marginLeft:'50%'}}
        // target="_blank"
        // rel="noopener noreferrer"
      >
    <div className={styles.card3} style={{position:'relative', height:'5vh', alignItems:'center'}}>
      
        
        <Icon path={mdiFlower } style={{marginLeft:-7, marginRight:7}}size={.9} />
        Crunch&Munch
      
    </div>
    </Link>
      </div>

      <div className={styles.center00} style={{marginTop:'11vh'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163508-D2DB7369-76F9-4143-8F6C-5BCD545A608D.png" style={{width:'35vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"47vh", overflow:'visible',position:'relative', left:'1%'}}/>
       <h3 className={styles.center1}  style={{width:"100%", marginLeft:"0%",WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 11 69/ 80%)' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h3>
      </div>

      {/* <div className={styles.grid} style={{color:'#F2F0DF'}}>
        <a
          href="/products"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            Products <span>-&gt;</span>
          </h3>
          <p>Click to check out all the products the we offer.</p>
        </a>

        <a
          href="/about"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            About us <span>-&gt;</span>
          </h3>
          <p>Learn about our goals, mission and crew.&nbsp;</p>
        </a>

        <a
          href="/ar"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
          Arabic page  <span>-&gt;</span>
          </h3>
          <p>Click to load the Arabic site.</p>
        </a>

        <a
          href=""
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            Coming soon... <span>-&gt;</span>
          </h3>
          <p>
            ...
          </p>
        </a>
      </div> */}
      
    </main>}
    
    {isDesktopOrLaptop && <main className={styles.main} style={{background:'#DA9AA7'}}>
    <div className={styles.center} style={{marginTop:'17vh'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'6%'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163591-1819872F-8411-425C-9CDF-D3136ABC26E5.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h1 style={{marginLeft:'auto',marginRight:'auto',marginTop:'5%', color:'#4F2D26', zIndex:5}}>Classic Tirimasu</h1>
       <h1 style={{marginLeft:'auto',marginRight:'auto', marginTop:'5%', color:'#4F2D26', marginBottom:'-5%'}}>10 rials</h1>
       </div>
       <div style={{display:'flex', flexDirection:'column'}}>
       <h1 className={styles.center1}  style={{width:"65%", marginLeft:'auto', marginRight:'auto',WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#4F2D26' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h1>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'30%'}} onClick={() => {
                      
                      const CT = {
                        id:1,
                        Bname:"Classic Tirimasu",
                        Q:'10',
                        Img:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163591-1819872F-8411-425C-9CDF-D3136ABC26E5.png"
                      }

                      if (lsv == "undefined") {
                        setcart(CT)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      else {
                        let newcart = [...cart]
                        newcart.push(CT)
                        setcart(newcart)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      
                      
                    }}>Add to Cart</button>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'20%', marginTop:'1%'}}>Order Now</button>

      </div>
      </div>
      </main>}
      {isDesktopOrLaptop && <main className={styles.main} style={{background:'#c67585'}}>
    <div className={styles.center002} style={{marginTop:'17vh'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'6%'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163482-A16482AC-2FAB-48DD-AF8E-79162D6B9725.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h1 style={{marginLeft:'auto',marginRight:'auto',marginTop:'5%', color:'#4F2D26', zIndex:5}}>New York CheeseCake</h1>
       <h1 style={{marginLeft:'auto',marginRight:'auto', marginTop:'5%', color:'#4F2D26', marginBottom:'-5%'}}>14 rials</h1>
       </div>
       <div style={{display:'flex', flexDirection:'column'}}>
       <h1 className={styles.center1}  style={{width:"65%", marginLeft:'auto', marginRight:'auto',WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#4F2D26' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h1>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'30%'}} onClick={() => {
                      
                      const NYC = {
                        id:2,
                        Bname:"New York CheeseCake",
                        Q:'14',
                        Img:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163482-A16482AC-2FAB-48DD-AF8E-79162D6B9725.png"
                      }

                      if (lsv == "undefined") {
                        setcart(NYC)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      else {
                        let newcart = [...cart]
                        newcart.push(NYC)
                        setcart(newcart)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      
                      
                    }}>Add to Cart</button>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'20%', marginTop:'1%'}}>Order Now</button>

      </div>
      </div>
      </main>}
      {isDesktopOrLaptop && <main className={styles.main} style={{background:'#B65A73'}}>
    <div className={styles.center001} style={{marginTop:'17vh'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'6%'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163488-A2973587-73CA-4598-99A9-D3F672FCDBA8.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h1 style={{marginLeft:'auto',marginRight:'auto',marginTop:'5%', color:'#4F2D26', textAlign:'center', zIndex:5 }}>Signature Basboosa <br></br>with Cream</h1>
       <h1 style={{marginLeft:'auto',marginRight:'auto', marginTop:'5%', color:'#4F2D26', marginBottom:'-5%'}}>9 rials</h1>
       </div>
       <div style={{display:'flex', flexDirection:'column'}}>
       <h1 className={styles.center1}  style={{width:"65%", marginLeft:'auto', marginRight:'auto',WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#4F2D26' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h1>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'30%'}} onClick={() => {
                      
                      const SB = {
                        id:2,
                        Bname:"Signature Basbosa",
                        Q:'9',
                        Img:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163488-A2973587-73CA-4598-99A9-D3F672FCDBA8.png"
                      }

                      if (lsv == "undefined") {
                        setcart(SB)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      else {
                        let newcart = [...cart]
                        newcart.push(SB)
                        setcart(newcart)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      
                      
                    }}>Add to Cart</button>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'20%', marginTop:'1%'}}>Order Now</button>

      </div>
      </div>
      </main>}
      {isTabletOrMobile && <main className={styles.main} style={{background:'#DA9AA7'}}>
    <div className={styles.center01} style={{marginTop:'-40vh', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'0%', marginTop:'155%'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163591-1819872F-8411-425C-9CDF-D3136ABC26E5.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h2 style={{marginLeft:'auto',marginRight:'auto',marginTop:'5%', color:'#4F2D26', zIndex:5}}>Classic Tirimasu</h2>
       <h1 style={{marginLeft:'auto',marginRight:'auto', marginTop:'5%', color:'#4F2D26', marginBottom:'-5%'}}>10 rials</h1>
       </div>
       <div style={{display:'flex', flexDirection:'column'}}>
       <h2 className={styles.center1}  style={{width:"100%", marginLeft:'auto', marginRight:'auto',WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#4F2D26' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h2>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'70%'}} onClick={() => {
                      
                      const CT = {
                        id:1,
                        Bname:"Classic Tirimasu",
                        Q:'10',
                        Img:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163591-1819872F-8411-425C-9CDF-D3136ABC26E5.png"
                      }

                      if (lsv == "undefined") {
                        setcart(CT)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      else {
                        let newcart = [...cart]
                        newcart.push(CT)
                        setcart(newcart)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      
                      
                    }}>Add to Cart</button>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'50%', marginTop:'1%'}}>Order Now</button>

      </div>
      </div>
      </main>}
      {isTabletOrMobile && <main className={styles.main} style={{background:'#c67585'}}>
    <div className={styles.center02} style={{marginTop:'-40vh', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'0%', marginTop:'155%'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163482-A16482AC-2FAB-48DD-AF8E-79162D6B9725.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h2 style={{marginLeft:'auto',marginRight:'auto',marginTop:'5%', color:'#4F2D26', zIndex:5}}>New York CheeseCake</h2>
       <h1 style={{marginLeft:'auto',marginRight:'auto', marginTop:'5%', color:'#4F2D26', marginBottom:'-5%'}}>14 rials</h1>
       </div>
       <div style={{display:'flex', flexDirection:'column'}}>
       <h2 className={styles.center1}  style={{width:"100%", marginLeft:'auto', marginRight:'auto',WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#4F2D26' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h2>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'70%', zIndex:6}} onClick={() => {
                      
                      const NYC = {
                        id:2,
                        Bname:"New York CheeseCake",
                        Q:'14',
                        Img:'https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163482-A16482AC-2FAB-48DD-AF8E-79162D6B9725.png'
                      }

                      if (lsv == "undefined") {
                        setcart(NYC)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      else {
                        let newcart = [...cart]
                        newcart.push(NYC)
                        setcart(newcart)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      
                      
                    }}>Add to Cart</button>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'50%', marginTop:'1%'}}>Order Now</button>

      </div>
      </div>
      </main>}
      {isTabletOrMobile && <main className={styles.main} style={{background:'#B65A73'}}>
    <div className={styles.center03} style={{marginTop:'-40vh', display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'0%', marginTop:'155%'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163488-A2973587-73CA-4598-99A9-D3F672FCDBA8.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h2 style={{marginLeft:'auto',marginRight:'auto',marginTop:'5%', color:'#4F2D26', zIndex:5}}>Signature Basboosa</h2>
       <h1 style={{marginLeft:'auto',marginRight:'auto', marginTop:'5%', color:'#4F2D26', marginBottom:'-5%'}}>9 rials</h1>
       </div>
       <div style={{display:'flex', flexDirection:'column'}}>
       <h2 className={styles.center1}  style={{width:"100%", marginLeft:'auto', marginRight:'auto',WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#4F2D26' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h2>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'70%'}} onClick={() => {
                      
                      const SB = {
                        id:3,
                        Bname:"Signature Basboosa",
                        Q:'14',
                        Img:'https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163488-A2973587-73CA-4598-99A9-D3F672FCDBA8.png'
                      }

                      if (lsv == "undefined") {
                        setcart(SB)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      else {
                        let newcart = [...cart]
                        newcart.push(SB)
                        setcart(newcart)
                        window.localStorage.setItem("Cart", JSON.stringify(cart))
                      }
                      
                      
                    }}>Add to Cart</button>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'50%', marginTop:'1%'}}>Order Now</button>

      </div>
      </div>
      </main>}
      {/* {isDesktopOrLaptop && <main className={styles.main} style={{background:'#B13353'}}>
    <div className={styles.center} style={{marginTop:'17vh'}}>
      <div style={{display:'flex', flexDirection:'column', marginLeft:'6%'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1720456163490-228D5060-D84D-488E-8A9E-D5F37F9869F0.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%', mixBlendMode:''}}/>
       <h1 style={{marginLeft:'auto',marginRight:'auto',marginTop:'5%', color:'#4F2D26'}}>Classic Tirimasu</h1>
       <h1 style={{marginLeft:'auto',marginRight:'auto', marginTop:'5%', color:'#4F2D26', marginBottom:'-5%'}}>10 rials</h1>
       </div>
       <div style={{display:'flex', flexDirection:'column'}}>
       <h1 className={styles.center1}  style={{width:"65%", marginLeft:'auto', marginRight:'auto',WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)', color:'#4F2D26' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h1>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'30%'}}>Add to Cart</button>
       <button className={styles.card1} style={{marginLeft:'auto',marginRight:'auto',width:'20%', marginTop:'1%'}}>Order Now</button>

      </div>
      </div>
      </main>} */}
    
    <main className={styles.main} style={{background:'rgba(10, 54, 119, 0.2)'}}>
    <div className={styles.center1} style={{display:'block'}}>
    {isDesktopOrLaptop && <div style={{display:'grid', marginRight:'auto', marginLeft:'auto'}}>
        {dchecklist}
        <div className={styles.card2} style={{textAlign:'center'}}>
            <form>
                <label For="Del"></label>
                <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type="select" id='Del'>
                <option value="1">Deliever in Muscat</option>
                <option value="1.5">Deliever out of Muscat to Delievery Branch</option>
                <option value="2">Deliever out of Muscat directly to House</option>
                </select>
                </form>
        </div>
       <h2 className={styles.card2} style={{textAlign:'center'}}> Total is = {totall + parseFloat(Quantity)} Omr </h2>
       <br></br>
       <button className={styles.card1} onClick={a}>Continue</button>
       <br></br>
       <button className={styles.card1} style={{background:'rgba(250, 250, 250, .5)', color:'black'}} onClick={d}>Delete</button>
        </div>}
        {isTabletOrMobile && <div style={{display:'grid', marginRight:'auto', marginLeft:'auto'}}>
        {mchecklist}
        <div className={styles.card2} style={{textAlign:'center'}}>
            <form>
                <label For="Del"></label>
                <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type="select" id='Del'>
                <option value="1">Deliever in Muscat</option>
                <option value="1.5">Deliever out of Muscat to Delievery Branch</option>
                <option value="2">Deliever out of Muscat directly to House</option>
                </select>
                </form>
        </div>
       <h2 className={styles.card2} style={{textAlign:'center'}}> Total is = {totall + parseFloat(Quantity)} Omr </h2>
       <br></br>
       <button className={styles.card1} onClick={a}>Continue</button>
       <br></br>
       <button className={styles.card1} style={{background:'rgba(250, 250, 250, .5)', color:'black'}} onClick={d}>Delete</button>
        </div>}
        {isDesktopOrLaptop &&<main className={styles.main} ref={ref} style={{background:''}}>
      <div className={styles.center1} style={{display:'block'}}>
      <div style={{marginTop:'-2vh', display:'flex', justifyContent:'space-around', padding:'5vh',paddingTop:'7vh',paddingBottom:'7vh',borderRadius:'1%', background:'rgba(205, 195, 177,.1)'}}>
                    <div style={{marginLeft:'0vw'}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value={JSON.stringify(lsv)} style={{ height:'2.5vh'}}></input>
                                <input id='pri' type="hidden" name="pri" value={totall + parseFloat(Quantity)} style={{ height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'125%'}}>Name </label>
                                <input id='Name' type="text" required name="Name" style={{marginRight:'3vw', height:'2.5vh', marginLeft:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'125%'}}>Telephone </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                                <label for="Email" style={{color:'white', fontSize:'125%'}}>Email </label>
                                <input id="Email" required name="Email" type='email' style={{ marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'125%'}}>Google Maps Location (if available) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ marginRight:'3vw',height:'2.5vh', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>Country </label>
                            <input id='City' name="City" value='Oman'  disabled type='text' style={{marginRight:'3vw', height:'2.5vh', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For='City' style={{color:'white', fontSize:'125%'}}>City </label>
                            <input id='City' name="City" required type='text' style={{marginRight:'2.7vw', height:'2.7vh', width:'8vw',marginLeft:'1vw'}}></input>
                            <label For="Town" style={{color:'white', fontSize:'125%'}}>Town </label>
                            <input type='text' required  name="Town" id='Town' style={{marginRight:'2.7vw', height:'2.7vh', width:'8vw', marginLeft:'1vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'125%'}}>House No</label>
                            <input id='POC' name="POC" type='text' style={{marginRight:'2.7vw', height:'2.7vh', width:'8vw',marginLeft:'1vw'}} ></input>
                            </div>
                          
                            <br></br>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'8vw'}} type='submit'></input>
                        </div>
                    </form>
                    </div>
                    </div>

        {/* <div className={styles.grid1} style={{marginTop:''}}>
        <a
            href="/articles/1"
            className={styles.card2}
            style={{display:'inline-block'}}
            
            >
         <div style={{display:"flex"}} >
            <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
            <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
            
             <h2>
                Empty
              </h2>
              <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
           </div>
            
         </div>
       </a>
       <a
            href="/articles/2"
            className={styles.card2}
            style={{display:'inline-block'}}
            
            >
         <div style={{display:"flex"}} >
            <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
            <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
            
             <h2>
                Empty
              </h2>
              <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
           </div>
            
         </div>
       </a>
       <a
            href="/articles/3"
            className={styles.card2}
            style={{display:'inline-block'}}
            
            >
         <div style={{display:"flex"}} >
            <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
            <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
            
             <h2>
                Empty
              </h2>
              <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
           </div>
            
         </div>
       </a>
          </div>
         */}
         </div>
        <hr style={{maxWidth:"100%", width:"100%"}}></hr>
      </main>}
              
      {/* <div className={styles.grid1} style={{marginTop:''}}>
      <a
          href="/articles/1"
          className={styles.card2}
          style={{display:'inline-block'}}
          
          >
       <div style={{display:"flex"}} >
          <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
          <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
          
           <h2>
              Empty
            </h2>
            <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
         </div>
          
       </div>
     </a>
     <a
          href="/articles/2"
          className={styles.card2}
          style={{display:'inline-block'}}
          
          >
       <div style={{display:"flex"}} >
          <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
          <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
          
           <h2>
              Empty
            </h2>
            <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
         </div>
          
       </div>
     </a>
     <a
          href="/articles/3"
          className={styles.card2}
          style={{display:'inline-block'}}
          
          >
       <div style={{display:"flex"}} >
          <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
          <div style={{maxWidth:"70vw", marginLeft:"1%", paddingTop:"1%"}}>
          
           <h2>
              Empty
            </h2>
            <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
         </div>
          
       </div>
     </a>
        </div>
       */}
       </div>
      <hr style={{maxWidth:"100%", width:"100%"}}></hr>
    </main>
    </div>
  )
}
