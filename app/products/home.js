"use client"
import Image from 'next/image'
import styles from '@/app/page.module.css'
import  Icon  from '@mdi/react';
import {mdiFlower} from '@mdi/js';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { ShoppingCart } from '@mui/icons-material';
import MenuIntroduction1 from '@/app/menu1m';
import MenuIntroduction from '@/app/menu1';
import Link from 'next/link';
import { useMediaQuery } from "react-responsive";
import { motion, useScroll, useSpring } from "framer-motion";
let mproducts= [
  {
    id:0,
    image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png",
    name:"Grade A - Bourbon Vanilla beans - Papua New Guinea",
    price:"5-7 Omr",
    animationn:'/products/model/Acar1',
    staticc:'/products/model/car1',
    no:0
}
    ]
    let mproducts1= [
      {
        id:0,
        image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1713785745450-829A019A-E480-47A5-97D4-7BE2107A88DB.png",
        name:"Vanilla Paste (alcohol free)",
        price:"5-7 Omr",
        animationn:'/products/model/Acar1',
        staticc:'/products/model/car1',
        no:1
    }
        ]
        let mproducts2= [
          {
            id:0,
            image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1713785745305-5716920C-2691-4147-ABDE-9C225D9F5681.png",
            name:"Vanilla Extract (alcohol free)",
            price:"5-7 Omr",
            animationn:'/products/model/Acar1',
            staticc:'/products/model/car1',
            no:2
        }
            ]
            let mproducts3= [
              {
                id:0,
                image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1709868748988-1A68AF97-57A5-4D55-B6C1-034FDC16C697.png",
                name:"Grade A - Bourbon Vanilla Beans - Zanzibar",
                price:"5-7 Omr",
                animationn:'/products/model/Acar1',
                staticc:'/products/model/car1',
                no:""
            }
                ]
    let products= [
      {
          id:0,
          image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png",
          name:"Grade A - Bourbon Vanilla beans - Papua New Guinea",
          price:"5-7 Omr",
          animationn:'/ar/products/model/Acar1',
          staticc:'/ar/products/model/car1',
          no:0
      },
          {id:1,
              image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1713785745450-829A019A-E480-47A5-97D4-7BE2107A88DB.png",
              name:"Vanilla Paste (alcohol free)",
              price:"5-7 Omr",
              animationn:'/ar/products/model/Acar2',
              staticc:'/ar/products/model/car2',
              no:1
          },
          {id:2,
              image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1713785745305-5716920C-2691-4147-ABDE-9C225D9F5681.png",
              name:"Vanilla Extract (alcohol free)",
              price:"5-7 Omr",
              animationn:'/ar/products/model/Acar3',
              staticc:'/ar/products/model/car3',
              no:2
          },
          {id:3,
              image:"https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1709868748988-1A68AF97-57A5-4D55-B6C1-034FDC16C697.png",
              name:"Grade A - Bourbon Vanilla Beans - Zanzibar",
              price:"5-7 Omr",
              animationn:'/ar/products/model/Acar4',
              staticc:'/ar/products/model/car4',
              no:""
          },
  
  
          ];
export default function A1() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  let mproductslist = mproducts.map((product) => { 
    return(
    <Link key={product.id} href={`/products/${product.no}`} style={{zIndex:2}}>
      <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:55, marginBottom:'-10%', marginLeft:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"15px", height:'38vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={285} height={200} quality={55} src={product.image} alt='' style={{height:'28vh',objectFit:'contain', marginBottom:'-3%',zIndex:0}}></Image><br></br>{product.name} <br></br></h3>
      </button></Link>
          )})
        let mproductslist1 = mproducts1.map((product) => { 
            return(
            <Link key={product.id} style={{zIndex:2}} href={`/products/${product.no}`}>
              <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:-55, marginBottom:'-10%', marginLeft:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"15px", height:'37vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={225} height={200} quality={55} src={product.image} alt='' style={{height:'40vh',objectFit:'contain', marginBottom:'-20%',zIndex:0, marginTop:'-20%'}}></Image><br></br>{product.name} <br></br></h3>
              </button></Link>
                  )})
                  let mproductslist2 = mproducts2.map((product) => { 
                    return(
                    <Link key={product.id} style={{zIndex:2}} href={`/products/${product.no}`}>
                      <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:-55, marginBottom:'-10%', marginLeft:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"15px", height:'37vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={225} height={200} quality={55} src={product.image} alt='' style={{height:'40vh',objectFit:'contain', marginBottom:'-20%',zIndex:0, marginTop:'-20%'}}></Image><br></br>{product.name} <br></br></h3>
                      </button></Link>
                          )})
                          let mproductslist3 = mproducts3.map((product) => { 
                            return(
                            <Link key={product.id} style={{zIndex:2}} href={`/products/${product.no}`}>
                              <button style={{background:'rgb(255, 255, 255, 0)', border:'0', width:'65vw', height:'43vh', marginTop:-50, marginBottom:'-10%', marginLeft:'0%', cursor:'pointer'}}><h3 className="cairo" style={{background:'rgba(0, 0, 20, 0.4)',WebkitTextStroke: '.3  px black' , color:'rgba(0,255,255,.7)',borderRadius:'25px',fontSize:"15px", height:'40vh',width:'65vw',textAlign:'center',lineHeight:2, paddingBottom:'1vh', paddingTop:'.0vh', zIndex:'1'}}><Image width={225} height={200} quality={55} src={product.image} alt='' style={{height:'33vh',objectFit:'contain', marginBottom:'-12%',zIndex:0, marginTop:'3%'}}></Image><br></br>{product.name} <br></br></h3>
                              </button></Link>
                                  )})
  let productslist = products.map((product) => { 
              return(
              <Link key={product.id} href={`/products/${product.no}`} style={{marginRight:'30%', zIndex:3}}>
                  <button key={product.id} style={{background:'rgb(255, 255, 255, 0)', border:'0px',borderColor:'black', width:'10vw', height:'12vh', marginTop:35, marginBottom:"10%", marginRight:'0%', cursor:'pointer'}}>
                    
                      <h3 className="cairo" style={{background:'rgba(250, 250, 250, .15)',WebkitTextStroke: '.3  px black' , color:'darkcyan',textShadow: '1px 1px 10px rgb(210 211 269/ 90%)',borderRadius:'25px',fontSize:"18px", height:'55vh',width:'20vw',textAlign:'center',lineHeight:2, paddingBottom:'7vh', paddingTop:'.0vh', marginTop:'4vh'}}><Image width={257} height={260} quality={55} src={product.image} alt='' style={{objectFit:'contain', marginBottom:'0vh'}}></Image>{product.name} <br></br></h3>
                      </button></Link>
          )})
  return (
    <div style={{}}>
         <motion.div className="progress-bar" style={{ scaleX }} />
        {isDesktopOrLaptop &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)', overflow:'hidden'}}>
      <div className={styles.description} style={{position:'fixed', maxWidth:'1220px', justifyContent:'space-between'}}>
        
        
        <MenuIntroduction/>
        
        {/* <h1 className={styles.card1}>Title</h1> */}
        <div className={styles.card1} style={{marginTop:'-1%'}}>
          
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            <Tooltip title="Visit Shopping Cart">
      <IconButton href='/products/shoppingcart'>
        <ShoppingCart sx={{color: 'bisque'}}  />
      </IconButton>
    </Tooltip>
            <Icon path={mdiFlower} style={{marginRight:'0%'}}size={.9} />
            VanillaOm
          </a>
        </div>
        </div>
            <div className={styles.center1} style={{marginTop:'0vh'}}>
            <div className={styles.center5}>
            <div  style={{marginTop:'-7%'}}>
            {isDesktopOrLaptop &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
                    >
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'45vw', direction:''}}>
        {productslist}
    </div>
    </motion.div>}
      {/* <a
          href="/articles/1"
          className={styles.card2}
          style={{display:'inline-block'}}
          
          >
       <div style={{display:"flex", justifyContent:'space-around'}} >
          <img src='https://img.freepik.com/premium-photo/digital-artwork_456341-2784.jpg?w=1060' alt='' style={{width:'20vh', objectFit:"cover",maxWidth:"15vw", maxHeight:"15vh"}} ></img>
          <div style={{maxWidth:"52vw", marginLeft:"1%", paddingTop:"1%", paddingLeft:'-1%'}}>
          
           <h2>
              Empty
            </h2>
            <p>The beleiver in this dunya flies to his Lord with two wings, a wing of fear, and a wing of hope, </p>
         </div>
         <h2 style={{paddingTop:'3.5%'}}>5/10/2023</h2>
          
       </div>
     </a> */}
     {/* <a
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
     </a> */}
        </div>
            </div>
            </div>
        
        </main>}
        {isTabletOrMobile &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)', overflow:'hidden'}}>
      <div className={styles.description2} style={{position:'fixed', padding:'3%', marginTop:'-10%',height:'10%'}}>
      <MenuIntroduction1/>
            <Tooltip className={styles.center3} sx={{background:'black', marginRight:'37%', maxHeight:'5vh', maxWidth:'11vw'}}  title="Visit Shopping cart">
      <IconButton  href='/products/shoppingcart'>
        <ShoppingCart  sx={{color: 'bisque'}}  />
      </IconButton>
    </Tooltip>
        <div className={styles.card3} style={{position:'relative', height:'6vh', alignItems:'center'}}>
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
            
            
          >
            
            <Icon path={mdiFlower } size={.9} />
            VanillaOm
          </a>
        </div>
        </div>
            <div  style={{zIndex:0}}>
            {isTabletOrMobile &&<motion.div  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: .5,
                    ease: [0, 0.71, 0.2, 1.01]}}
            
                    
                    >
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'0vw', direction:'', marginTop:'5%'}}>
        {mproductslist}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'0vw', direction:'', marginTop:'25%', marginBottom:'15%'}}>
        {mproductslist1}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'0vw', direction:'', marginTop:'25%', marginBottom:'15%'}}>
        {mproductslist2}
    </div>
    <div style={{display:'flex', justifyContent:'space-around', marginRight:'0vw', direction:'', marginTop:'25%', marginBottom:'35%'}}>
        {mproductslist3}
    </div>
    </motion.div>}

        
        </div>
      
        </main>}
       </div>

  )}