import React, { useContext, useEffect, useState } from 'react'
import { Box,Image} from "@chakra-ui/react";
import './Display.modules.css';
import axios from 'axios';
import ellipsecircle from '../images/Ellipse 87.png'
import icoutline from '../images/ic_outline-info.png'
import material from '../images/material-symbols_token-outline.png'
import dollar from '../images/pepicons-pop_dollar.png'
import { InputContext } from '../Context/InputContext';

const Display = () => {

  const [pairdata,setpairdata]=useState([])
  const { inputValue } = useContext(InputContext)

  useEffect(()=>{
    if(inputValue){
      axios
  .get(`https://api.dexscreener.com/latest/dex/search?q=${inputValue}`)
  .then((response) => {
    const sortedPairs = response.data.pairs.sort((a, b) => {
      return b.priceUsd.localeCompare(a.priceUsd);
    });
    setpairdata(sortedPairs.slice(0, 10));
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
    }else{
      axios.get('https://api.dexscreener.com/latest/dex/pairs/bsc/0x7213a321F1855CF1779f42c0CD85d3D95291D34C,0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae')
    .then((res)=>{
      setpairdata(res.data.pairs.slice(0, 10))})
    .catch((err)=>console.log(err))
    }
    
  },[inputValue])
  
 
  return (
    <div className='displaycontainer' style={{margin:"auto",marginLeft:"20px",width:"auto",height:"auto",overflow:"auto"}}>
      <div ><h6>Pair Search Results</h6>{
        
        pairdata?.map((el)=><Box w={"100%"} display={"grid"}  gap={"25x"} gridTemplateColumns={{ sm: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}>
          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Basic Info</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Pair created at</p>
            <p>{el.chainId}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Dex ID</p>
            <p>{el.dexId}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Pair Address</p>
            <p>{el.pairAddress.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="-1"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="25"
          right="0"
          left="85%" 
          height="auto"
          src={icoutline}/>
          
          </Box>
          
          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Basic Token</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Name</p>
            <p>{el.baseToken.name}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Symbol</p>
            <p>{el.baseToken.symbol}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Address</p>
            <p>{el.baseToken.address.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="-1"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="25"
          right="0"
          left="85%" 
          height="auto"
          src={material}/>
          
          </Box>

          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Quote Token</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Name</p>
            <p>{el.quoteToken.name}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Symbol</p>
            <p>{el.quoteToken.symbol}</p>
          </Box>
          <Box display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"}>
            <p>Address</p>
            <p>{el.quoteToken.address.substring(0, 4)}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="-1"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="25"
          right="0"
          left="85%" 
          height="auto"
          src={material}/>
          
          </Box>

          <Box  w={"230px"} h={"auto"} bg={"#390554"} borderRadius={"10px"} mt={"20px"}>
          <p style={{marginTop:"23px",marginBottom:"12px",marginLeft:"20px",fontSize:"16px"}}>Price</p>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Price Native</p>
            <p>{el.priceNative}</p>
          </Box>
          <Box  display={"flex"} width={"73%"} justifyContent={"space-between"} ml={"20px"} mb={"8px"}>
            <p>Price USD</p>
            <p>{el.priceUsd}</p>
          </Box>
          <Image
          position="relative"
          pl={"30px"}
          bottom="-5"
          right="0"
          left="70%"
          width="66px" 
          height="auto"
          src={ellipsecircle}/>
          <Image
          position="relative"
          bottom="12px"
          right="0"
          left="85%" 
          height="auto"
          src={dollar}/>
          
          </Box>

          
        </Box>)}
        </div>
    </div>
  )
}

export default Display
