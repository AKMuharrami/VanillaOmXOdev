"use client"
import Image from 'next/image'
import { Modal, Box, Typography } from "@mui/material";
import styles from '@/app/page.module.css';
import  Icon  from '@mdi/react';
import {mdiFlower } from '@mdi/js';
import MenuIntroduction from '@/app/menu';
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
  const [Quantity, SetQuantity] = useState("6")
const [state, handleSubmit] = useForm("mvojvawp");
if (state.succeeded) {
    handleredirect();
    return <Modal
    open
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your order has been successful
          </Typography>
        </Box>
      </Modal>
}
  return (
    <div style={{overflow:'hidden'}}>
      {isDesktopOrLaptop &&<main className={styles.main} style={{background:'rgba(10, 54, 119, 0.2)'}}>
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
      {isDesktopOrLaptop &&<div>
                    <div style={{marginTop:'-2vh', display:'flex', justifyContent:'space-around', padding:'5vh',paddingTop:'13vh',paddingBottom:'7vh', borderRadius:'1%', background:'rgba(205, 195, 177,.1)'}}>
                    <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1708965707995-78866F03-BC70-47E0-B081-D46FB3B685F9.png" style={{height:'40vh', marginLeft:'vw', marginTop:'5%', marginRight:'-7%'}}></img>
                    <div style={{marginLeft:'5vw'}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <h1 style={{color:'white', textAlign:'center', marginTop:'-7%', marginBottom:'6%', marginRight:'57%'}}>Alcohol free Vanilla Paste</h1>
                        <h2 style={{color:'white', textAlign:'center'}}>Issue Order</h2>
                        <br></br>
                        <form onSubmit={handleSubmit} >
                            <div style={{display:'flex', justifyContent:'center'}}>
                                <input id='Prod' type="hidden" name="Prod" value="Paste" style={{marginRight:'3vw', height:'2.5vh'}}></input>
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
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Quantity" style={{color:'white', fontSize:'125%'}}>Amount </label>
                            <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type='select' required  name="quantity" id='Quantity' style={{marginRight:'3vw', marginLeft:'1vw'}}>
                              <option  value="6">50 ml</option>
                              <option value="11.800">100 ml</option>
                              <option value="23.400">200 ml</option>
                              {/* <option value="12">10 beans</option>
                              <option value='23'>20 beans</option> */}
                            </select>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Price" style={{color:'white', fontSize:'125%', marginTop:'.35%'}}>Price: </label>
                              <h2 style={{marginRight:'3vw', marginLeft:'1vw'}} id='Price'>{Quantity} Omr</h2>
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
              <hr style={{maxWidth:"100%", width:"100%"}}></hr>
    </main>}
    {isTabletOrMobile &&<main className={styles.main1} style={{background:'rgba(10, 54, 119, 0.2 )'}}>
      <div className={styles.description1} style={{position:'fixed', padding:'3%', paddingTop:'-13%'}}>
        
        <MenuIntroduction/>
        <div className={styles.card3} style={{position:'relative', height:'8vh', alignItems:'center'}}>
          <a
            href="/"
            // target="_blank"
            rel="noopener noreferrer"
            
            
          >
            
            <Icon path={mdiFlower } style={{marginTop:'0%'}}size={.9} />
            VanillaOm
          </a>
        </div>
      </div>
    </main>}
              {isTabletOrMobile && <div> <div style={{marginTop:'-93vh', backgroundColor:'rgba(205, 195, 177,.1)', padding:'5vh',paddingTop:'5vh',paddingBottom:'3vh', borderRadius:'1%'}}>
              <h2 style={{color:'white', textAlign:'center', marginTop:'7%', marginBottom:'6%', marginRight:'0%'}}>Alcohol free <br></br>Vanilla paste</h2>
                    <img src="https://app-uploads.krea.ai/29b1b1d2-a699-4245-91f5-2ef397c0ac1e/1708965707995-78866F03-BC70-47E0-B081-D46FB3B685F9.png" style={{height:'25vh', marginLeft:'11vw', marginTop:'0%'}}></img>
                    <div style={{marginLeft:'5vw'}}>
                        <h3 style={{color:'white', textAlign:'center', marginTop:'3%'}}>Issue Order</h3>
                        <br></br>
                        <form onSubmit={handleSubmit}>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                                <input id='Prod' type="hidden" name="Prod" value="Paste" style={{marginRight:'3vw', height:'2.5vh'}}></input>
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
                            <input id='POC' name="POC" type='text' style={{ height:'2vh', marginLeft:'1vw',width:'26vw'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Gloc" style={{color:'white', fontSize:'100%'}}>Google Maps Location (opt) </label>
                            <input id="Gloc" name="Gloc" type="url" style={{ height:'2vh', width:'16vw',marginLeft:'1vw', overflow:'scroll'}}></input>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Quantity" style={{color:'white', fontSize:'100%'}}>Amount </label>
                            <select onChange={(e) => {
                                e.preventDefault
                                SetQuantity(event.target.value)}} type='select' required  name="quantity" id='Quantity' style={{marginRight:'3vw', marginLeft:'1vw'}}>
                             <option  value="6">50 ml</option>
                              <option value="11.800">100 ml</option>
                              <option value="23.400">200 ml</option>
                              {/* <option value="12">10 beans</option>
                              <option value='23'>20 beans</option> */}
                            </select>
                            </div>
                            <br></br>
                            <div style={{display:'flex', justifyContent:'center'}}>
                            <label For="Price" style={{color:'white', fontSize:'100%', marginTop:'.35%'}}>Price: </label>
                              <h3 style={{marginRight:'3vw', marginLeft:'1vw'}} id='Price'>{Quantity} Omr</h3>
                            </div>
                            <br></br>
                            <div style={{textAlign:'center'}}>
                            <input style={{height:'4vh', width:'18vw'}} type='submit'></input>
                        </div>
                    </form>
                </div>
                </div>
                <div style={{background:'rgba(10, 54, 119, 0.1)', paddingTop:'2%', paddingBottom:'13%'}}>
                <h6 style={{color:'white',marginLeft:'4.5vw'}}>*Your product will be delieverd within a week In Sha Allah, and payment will be received on deleivery.</h6>
                </div>
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
  )
}
