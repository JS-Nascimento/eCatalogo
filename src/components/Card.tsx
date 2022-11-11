import { Box, Stack, Image, Text } from "@chakra-ui/react";
import ProductDetail from "./ProductDetail";
import { IconID, IconPack, IconBrand, IconBarcode, IconPrice } from "./ProductDetailsFolder/IconDetail";



interface CardProps {
    idProduct?: string
    description?: string
    package?: string
    Ean13?: string
    Brand?: string
    Price?: string
    Image?: any
    children?: any

}

export default function Card(props: CardProps) {
    return (

        <Box
            w={['90%', '337px']}
            h='480px'
            bg='white'
            border={'1px'}
            borderColor={'gray.200'}
            borderRadius={'2xl'}
            boxShadow='lg'
            float='left'
            mx={'4'}
            my={'4'}
            p='2'
            _hover={{ boxShadow: '2xl', borderColor: 'blue.400' }}
        >
            <Box
                width={'100%'}
                height={'50%'}
                maxHeight={'50%'}
                position='relative'

            >
                <Image
                    margin={'auto'}
                    height={'100%'}
                    objectFit={'contain'}
                    alt={props.description}
                    src={props.Image}
                    fallbackSrc='https://via.placeholder.com/150'
                    draggable='false'
                />
                <ProductDetail />

            </Box>
            <Box width={'100%'} >
                <Text
                    
                    fontSize={['sm', 'md', 'md', 'md']}
                    fontWeight={'semibold'}
                    color={'telegram.600'}
                    borderBottom={'1px'}
                    borderColor={'gray.200'}
                    textAlign={'center'}
                    maxHeight={['sm', 'md']}
                    overflow={'hidden'}
                    mb={'1'}
                    py={'2'}
                >{props.description}
                </Text>
                <Text
                    fontSize={['sm', 'sm', 'md', 'md']}
                    fontWeight={'normal'}
                    color={'gray.600'}
                    textAlign={'left'}
                    py={['0.5', '0.5']}


                ><IconID /> {props.idProduct}
                </Text>
                <Text
                    fontSize={['sm', 'sm', 'md', 'md']}
                    fontWeight={'normal'}
                    color={'gray.600'}
                    textAlign={'left'}
                    py={['0.5', '0.5']}
                >
                    <IconPack /> {props.package}
                </Text>
                <Text
                    fontSize={['sm', 'sm', 'md', 'md']}
                    fontWeight={'normal'}
                    color={'gray.600'}
                    textAlign={'left'}
                    py={['0.5', '0.5']}
                >
                    <IconBrand /> {props.Brand}
                </Text>
                <Text
                    fontSize={['sm', 'sm', 'md', 'md']}
                    fontWeight={'normal'}
                    color={'gray.600'}
                    textAlign={'left'}
                    py={['0.5', '0.5']}
                >
                    <IconBarcode /> {props.Ean13}
                </Text>
                <Text
                    fontSize={['sm', 'sm', 'md', 'md']}
                    fontWeight={'bold'}
                    color={'gray.600'}
                    textAlign={'left'}
                    py={['0.5', '0.5']}
                >
                    <IconPrice /> {props.Price}
                </Text>
            </Box>


        </Box>


    )
}