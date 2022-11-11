import { Flex, Grid, Image } from "@chakra-ui/react";
import Categories from "./Categories";

export default function Header() {
           
    return(
        <Flex bg={'white'} 
            w={'100%'} 
            as={'header'} 
            mx="auto" 
            px="1rem" 
            h={["50px", "100px"]} 
            align="center" 
            justify={'center'}
            shadow="lg"
        >
            <Grid 
                h="100%" 
                mx={'auto'} 
                w="100%" 
                maxW={'1920px'} 
                alignItems="center"
                templateColumns="repeat(3, 1fr)"
                justifyContent={'center'}
            >
                <Image
                    src="/LogoHoriz.svg"
                    alt="Logotipo da Parmacon Distribuidora"
                    justifySelf={'left'}
                    gridColumn="1"
                />

                
            </Grid>
            
        </Flex>
    )
}