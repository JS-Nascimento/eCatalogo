import {
    Grid,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
    IconButton,
    Flex,
    Select
} from '@chakra-ui/react';
import React from 'react';
import { FaBars } from 'react-icons/fa';
import { DetailButton } from "./DetailButton";

export default function DetailMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <DetailButton
                /*ref={btnRef}*/
                position="absolute"
                top="2"
                right="2"
                aria-label={'Veja mais ...'}
                onClick={onOpen}
            />

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            /*finalFocusRef={btnRef}*/
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Detalhes do Produto</DrawerHeader>

                    <DrawerBody>


                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='solid'
                            bg={'red.600'}
                            color='white'
                            mr={3}
                            onClick={onClose}
                            _hover={{ bg: 'red.400' }}
                        >
                            Voltar
                        </Button>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
