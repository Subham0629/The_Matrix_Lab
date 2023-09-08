import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Input,
  Button,
  Image,
} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import logo from '../images/Vector.png'
import tokenaddress from '../images/ic_baseline-token.png'
import pairlogo from '../images/fluent_pair-24-filled.png'
import facebooklogo from '../images/facebook (4) 1.png'
import linkdnlogo from '../images/linkedin (1) 1.png'
import twitterlogo from '../images/twitter (1) 1.png'
import './SideBar.modules.css'
import { useContext } from 'react'
import { InputContext } from '../Context/InputContext';
import { useWeb3Modal } from '@web3modal/react'

const LinkItems= [
  { name: 'Token Address', icon: tokenaddress, path: "/" },
  { name: 'Pair Address', icon: pairlogo, path: "/display" },
]

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg="#292929"
      borderRadius={"0px 32px 0px 0px"} 
      borderRight="0px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center"  justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <Box  display="flex" gap='20px' mt='29px' >
        <Image className={"box"} src={logo}/>
        <Text className={"logoheading"}>NFTify</Text>
         </Box>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} 
        path={link.path}>
          <Box className="selectoption" display="flex" gap='20px' height= "65px"  pl='35px' pt='15px'>
             <Image width='24px' height="24px" src={link.icon}/>
         <Text className="tokentext">{link.name}</Text>
        </Box>

        </NavItem>
      ))}
              <Box display="flex" gap="20px" ml='34px' mt="140%"  pb="80px">
            <Image src={facebooklogo}/>
            <Image src={linkdnlogo}/>
             <Image src={twitterlogo}/>
                      </Box>
    </Box>
  )
}

const NavItem = ({ icon, children,path, ...rest }) => {
    const navigate = useNavigate()
  return (
    <Box
    onClick={() => navigate(path)}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        mx="-2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: '#F30050',
          color: 'white',
          w:"100%"
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  const { open, close } = useWeb3Modal()
  const { inputValue, setInputValue } = useContext(InputContext)
  return (
    <Flex
      ml={{ base: 0, md: 0 ,lg:0}}
      px={{ base: 4, md: 4 }}
      mb={"30px"}
      mt={"-30px"}
      height="auto"
      alignItems="center"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        mt={{base:"-60px"}}
        color={"white"}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        mt={{base:"-60px"}}
        ml={"10px"}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
        color={"#FFF"}>
        NFTify
      </Text>

      <Flex spacing={{ base: '0', md: 'none' }} 
      direction={{  base: 'column',md:'row',  lg: 'row' }} 
      justify="space-between"
      padding={"0px 20px 10px 0px"}
      width="100%"
      marginTop={{ base: '30px', md: 0, lg: 0 }}
      >
      <Input
      order={{ base: 2,  lg: 1 }} 
      marginBottom={{ base: '1rem', md: 0, lg: 0 }}
      
      color={"white"} w={{ base: '130%', md: "300px", lg: "300px" }}   ml={{base:"-110px", md: 0, lg: 0}}
      onChange={(e) => setInputValue(e.target.value)} value={inputValue} bg="linear-gradient(132deg, rgba(124, 15, 53, 0.20) 0%, rgba(88, 18, 102, 0.20) 100%)" mt="27px" borderRadius="20px" border= "1px solid #FFF"  placeholder="Search"/>
        <Button
        onClick={() => open()}
        _hover={{bg:"linear-gradient(131deg, #7C0F35 0%, #581266 90%)"}}
        order={{ base: 1, lg: 2 }}
        ml={{base:"20px", md: 0, lg: 0}}
        alignSelf={{ base: 'flex-end', md: 0, lg: 0 }}
        color="white"  mr="44px" width= "156px" borderRadius="20px" background="linear-gradient(131deg, #7C0F35 0%, #581266 100%)">Connect</Button>
      </Flex>
    </Flex>
  )
}

const SideBar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh"  objectFit={"cover"} >
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer 
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent color={"white"} fontSize="26px" onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      
      <Box  h={"100vh"} pt={"30px"} overflow={"scroll"} ml={{ base: 0, md: 60 }}  objectFit={"cover"} backgroundImage={'url("https://i.ibb.co/K924BBY/Rectangle-9398.png")'}
      backgroundSize={{base:"500%",md:"200%",lg:"100%"}}
      >
        <MobileNav onOpen={onOpen} />
        {/* Content */}
        {children}
      </Box>

      <Box position={"fixed"} bottom={"0"} bg={"red"} zIndex="2" h={"50px"} w={"100%"}></Box>
    </Box>
  )
}

export default SideBar


