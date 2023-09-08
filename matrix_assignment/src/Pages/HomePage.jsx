import React, { useContext, useEffect, useState } from 'react'
import { Box, Image } from "@chakra-ui/react";
import ellipsecircle from '../images/Ellipse 87.png'
import icoutline from '../images/ic_outline-info.png'
import material from '../images/material-symbols_token-outline.png'
import dollar from '../images/pepicons-pop_dollar.png'
import axios from 'axios';
import { InputContext } from '../Context/InputContext';

const HomePage = () => {
  const [data,setdata]=useState([])
  const { inputValue } = useContext(InputContext)
  
  useEffect(()=>{
    if(inputValue){
      axios
  .get(`https://api.dexscreener.com/latest/dex/search?q=${inputValue}`)
  .then((response) => {
    const sortedPairs = response.data.pairs.sort((a, b) => {
      return b.priceUsd.localeCompare(a.priceUsd);
    });
    setdata(sortedPairs.slice(0, 10));
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

    }else{
      axios.get('https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8')
      .then((res)=>{
        setdata(res.data.pairs.slice(0, 10))})
      .catch((err)=>console.log(err))
    }
  


  },[inputValue])
  

  return (
    <Box ml={"20px"}>
      
      <div style={{marginBottom:"80px"}}><h6>Token Search Results</h6>{
        
        data?.map((el)=><Box  w={"100%"} display={"grid"} gap={"25x"} gridTemplateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}>
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
      
    </Box>
  )
}

export default HomePage
