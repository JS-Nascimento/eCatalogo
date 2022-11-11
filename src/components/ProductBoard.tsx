import { Box, Container, Flex } from "@chakra-ui/react";
import { Children } from "react";
interface BoardProps {
    children: any
    title?: string
}


export default function Board(props: BoardProps) {

    return (
        <Flex
            marginTop={'3'}
            bg={'white'}
            w={['90%', '90%', '90%', '100%']}
            maxWidth='1960px'
            direction={['column', 'column', 'column', 'column']}
            as={'main'}
            mx='auto'
            px="1rem"
            h={'100%'}
            shadow="lg"
            border='1px'
            borderColor={'gray.200'}
            borderRadius={'2xl'}
               
        >
            
            <Box>
                {props.children}
            </Box>

        </Flex>
    )
}