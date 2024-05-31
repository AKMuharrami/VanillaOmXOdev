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
import { useState } from 'react';
export default function Home() {
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
  const [Quantity, SetQuantity] = useState("2.5")
  const [Quantityy, SetQuantityy] = useState("1");
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
      {isDesktopOrLaptop &&<main className={styles.main} style={{background:'rgba(205, 195, 177,.7)'}}>
      <div className={styles.description} style={{position:'fixed'}}>
        
        <MenuIntroduction/>
        <div className={styles.card1}>
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            
            <Icon path={mdiFlower } style={{marginRight:2}}size={1} />
            VanillaOm
          </a>
        </div>
      </div>

      <div className={styles.center} style={{marginTop:'20vh'}}>
       <Image src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707820252699-58BC667A-678E-49C1-A969-E2B980FB1455.png" style={{width:'50vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"55vh", overflow:'visible',position:'relative', left:'1%'}}/>
       <h1 className={styles.center1}  style={{width:"45%", marginLeft:"10%",WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 00 00/ 0%)' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h1>
      </div>

      <div className={styles.grid} style={{color:'#F2F0DF'}}>
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
      </div>
      
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
        VanillaOm
      
    </div>
    </Link>
      </div>

      <div className={styles.center00} style={{marginTop:'11vh'}}>
       <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707820252699-58BC667A-678E-49C1-A969-E2B980FB1455.png" style={{width:'35vh', objectFit:"cover",maxWidth:"65vw", maxHeight:"47vh", overflow:'visible',position:'relative', left:'1%'}}/>
       <h3 className={styles.center1}  style={{width:"100%", marginLeft:"0%",WebkitTextStroke: '1px 0b0e13',textShadow: '1px 1px 5px rgb(00 11 69/ 80%)' }}>"In the name of Allah... We offer quality guranteed vanilla in its various forms: beans, poweders, extracts (free of alcohol, as glycerene is used as perservative instead)"</h3>
      </div>

      <div className={styles.grid} style={{color:'#F2F0DF'}}>
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
      </div>
      
    </main>}
    <main className={styles.main} style={{background:'rgba(10, 54, 119, 0.2)'}}>
    <div className={styles.center1} style={{display:'block'}}>
    {isDesktopOrLaptop &&<div>
                    <div style={{marginTop:'-7vh', display:'flex', justifyContent:'space-around', padding:'5vh',paddingTop:'13vh',paddingBottom:'7vh', borderRadius:'1%', background:'rgba(205, 195, 177,.1)'}}>
                    <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png" style={{height:'30vh', marginLeft:'3vw', marginTop:'5%', marginRight:'-7%'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h1 style={{color:'white', textAlign:'center', marginTop:'-7%', marginBottom:'6%', marginRight:'57%'}}>Bourbon (Planifolia) Vanilla beans - PNG</h1>
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} >
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginRight:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'125%'}}>Name </label>
                                <input id='Name' type="text" required name="Name" style={{marginRight:'3vw', height:'2.5vh', marginLeft:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'125%'}}>Telephone </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                                <label for="Email" style={{color:'white', fontSize:'125%'}}>Email </label>
                                <input id="Email" required name="Email" type='email' style={{marginRight:'3vw', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'125%'}}>Google Maps Location link (if available) </label>
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
                            <label For='POC' style={{color:'white', fontSize:'125%'}}>House No </label>
                            <input id='POC' name="POC" type='text' style={{marginRight:'2.7vw', height:'2.7vh', width:'8vw',marginLeft:'1vw'}} ></input>
                            </div>
                            <br></br>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Quantity" style={{color:'white', fontSize:'125%'}}>Quantity </label>
                            <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type='select' required  name="quantity" id='Quantity' style={{marginRight:'3vw', marginLeft:'1vw'}}>
                              {/* <option  value="2.25">2 beans</option>
                              <option value="4.5">4 beans</option>
                              <option value="5.4">5 beans</option>
                              <option value="10.8">10 beans</option>
                              <option value='20.7'>20 beans</option> */}
                              <option  value="2.5">2 beans</option>
                              <option value="5">4 beans</option>
                              <option value="6">5 beans</option>
                              <option value="12">10 beans</option>
                              <option value='23'>20 beans</option>
                            </select>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Del"></label>
                <select onChange={(e) => {
                                e.preventDefault
                                SetQuantityy(event.target.value)}} type="select" id='Del'>
                <option value="1">Deliever in Muscat</option>
                <option value="1.5">Deliever out of Muscat to Delievery Branch</option>
                <option value="2">Deliever out of Muscat directly to House</option>
                </select>
                            </div>
                            <input hidden id="Tot" name="totall" value={parseFloat(Quantity) + parseFloat(Quantityy)}></input>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Price" style={{color:'white', fontSize:'125%', marginTop:'.35%'}}>Price: </label>
                              <h2 style={{marginRight:'3vw', marginLeft:'1vw'}} id='Price'>{parseFloat(Quantity) + parseFloat(Quantityy)} Omr</h2>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'8vw'}} type='submit'></input>
                        </div>
                    </form>
                </div>
              </div>
              <h4 style={{color:'white',marginLeft:'6.5vw', marginTop:'1%'}}>*You will be contacted within 6 hours to confirm the order In Sha Allah, and payment will be received on deleivery.</h4>
              </div>}
              {isTabletOrMobile && <div> <div style={{marginTop:'-10vh', backgroundColor:'rgba(78, 53, 36, 0.5)', padding:'5vh',paddingTop:'3vh',paddingBottom:'3vh', borderRadius:'1%'}}>
              <h2 style={{color:'white', textAlign:'center', marginTop:'5%', marginBottom:'3%', marginRight:'0%'}}>Bourbon (Planifolia) <br></br>Vanilla beans - PNG</h2>
                    <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1707456012314-55B14664-3E9B-4B6F-8EEC-356C64406618.png" style={{height:'21vh', marginLeft:'1vw', marginBottom:'3%'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h3 style={{color:'white', textAlign:'center'}}>Issue Order</h3>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                <input id='Prod' type="hidden" name="Prod" value="1" style={{marginRight:'3vw', height:'2.5vh'}}></input>
                                <label for="Name" style={{color:'white', fontSize:'100%'}}>Name </label>
                                <input id='Name' type="text" required name="Name" style={{marginRight:'3vw', height:'2vh', width:'25vw', marginLeft:'1vw'}}></input>
                                <label for='Tel' style={{color:'white', fontSize:'100%'}}>Telephone </label>
                                <input id='Tel' required type="tel" name="Tel" style={{marginRight:'3vw', width:'25vw', marginLeft:'1vw'}}></input>

                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <label for="Email" style={{color:'white', fontSize:'100%'}}>Email </label>
                            <input id="Email" name="Email" type='email'style={{marginRight:'3vw', height:'2vh', width:'25vw', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'100%'}}>Country </label>
                            <input id='City' name="City" value='Oman'  disabled type='text' style={{marginRight:'3vw',  width:'9.5vw', height:'2vh', marginLeft:'1vw'}}></input>
                            <label For='City' style={{color:'white', fontSize:'100%'}}>  City </label>
                            <input id='City' required name="City" type='text' style={{marginRight:'3vw', height:'2vh', width:'11vw', marginLeft:'1vw'}}></input>
                            
                            </div>
                            <br></br>
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <label For="Town" style={{color:'white', fontSize:'100%'}}>Town </label>
                            <input type='text' required name="Town" id='Town' style={{marginRight:'3vw', height:'2vh', width:'11vw', marginLeft:'1vw'}}></input>
                            <label For='POC' style={{color:'white', fontSize:'100%'}}>House No</label>
                            <input id='POC' name="POC" type='text' style={{ height:'2vh', marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'100%'}}>Google Maps Location (opt) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ height:'2vh', width:'20vw',marginLeft:'1vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Quantity" style={{color:'white', fontSize:'100%'}}>Quantity </label>
                            <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type='select' required  name="quantity" id='Quantity' style={{marginRight:'3vw', marginLeft:'1vw'}}>
                              {/* <option  value="2.25">2 beans</option>
                              <option value="4.5">4 beans</option>
                              <option value="5.4">5 beans</option>
                              <option value="10.8">10 beans</option>
                              <option value='20.7'>20 beans</option> */}
                              <option  value="2.5">2 beans</option>
                              <option value="5">4 beans</option>
                              <option value="6">5 beans</option>
                              <option value="12">10 beans</option>
                              <option value='23'>20 beans</option>
                            </select>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Del"></label>
                <select onChange={(e) => {
                                e.preventDefault
                                SetQuantityy(event.target.value)}} type="select" id='Del'>
                <option value="1">Deliever in Muscat</option>
                <option value="1.5">Deliever out of Muscat to Delievery Branch</option>
                <option value="2">Deliever out of Muscat directly to House</option>
                </select>
                            </div>
                            <input hidden id="Tot" name="totall" value={parseFloat(Quantity) + parseFloat(Quantityy)}></input>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Price" style={{color:'white', fontSize:'100%', marginTop:'.35%'}}>Price: </label>
                              <h3 style={{marginRight:'3vw', marginLeft:'1vw'}} id='Price'>{parseFloat(Quantity) + parseFloat(Quantityy)} Omr</h3>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'18vw'}} type='submit'></input>
                        </div>
                    </form>
                </div>
                </div>
                <h6 style={{color:'white',marginLeft:'10vw', width:'85%'}}>*Your product will be delieverd within a week In Sha Allah, and payment will be received on deleivery.</h6>
              </div>}
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
