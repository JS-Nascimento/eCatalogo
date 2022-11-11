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

import React, { Component, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import SelectCategoria from './SelectCategoria';
import SelectSCategoria from './SelectSubCategorias';
import SelectFamilias from './SelectFamilias';
import { categorias } from '../core/Categorias';
import { scategorias } from '../core/Subcategorias';
import { familias } from '../core/Familias'

export default function CategoriesMenu({ callbackParent }) {

  const aCategorias = categorias
  const aSCategorias = scategorias
  const aFamilias = familias
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const DefaultValues = {
    categoria: "",
    subCategoria: "",
    familia: "",
  }

  
  const [Categoria, setCategoria] = useState(DefaultValues.categoria)
  const [subCategoria, setSubCategoria] = useState(DefaultValues.subCategoria)
  const [Familia, setFamilia] = useState(DefaultValues.familia)

  /*  const [optioValueCategories, setOptionValueCategories] = useState(dataCategories.id)
   const [optioDescriptionCategories, setOptionDescriptionCategories] = useState(dataCategories.descricao) */

  const changeState = () => {
    callbackParent(`${Familia}`)
    onClose()
  };

  return (
    <>

      <Flex
      >
        <Button ref={btnRef}
          size={'md'}
          width="120px"
          colorScheme='telegram'
          variant={'outline'}
          onClick={onOpen}
          display={['none', 'none', 'flex', 'flex']}
        >
          Categorias
        </Button>
        <Button ref={btnRef}
          pl='4'
          leftIcon={<FaBars />}
          size={'xs'}

          width="20px"
          colorScheme='telegram'
          variant={'outline'}
          onClick={onOpen}
          display={['flex', 'flex', 'none', 'none']} />

      </Flex>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Categorias</DrawerHeader>

          <DrawerBody>
            <SelectCategoria categorias={aCategorias} onChange={(e) => setCategoria(e.target.value)} />

            <SelectSCategoria scategorias={aSCategorias} onChange={(e) => setSubCategoria(e.target.value)} selectedValue={Categoria} />

            <SelectFamilias familias={aFamilias} onChange={(e) => setFamilia(e.target.value)} selectedValue={subCategoria} />
          
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancelar
            </Button>
            <Button
              mr={3}
              colorScheme='blue'
              onClick={changeState}

            >Buscar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </>
  )
}

