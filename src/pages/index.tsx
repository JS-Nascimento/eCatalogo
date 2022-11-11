import { Flex } from "@chakra-ui/react";
import Card from "../components/Card";
import CategoriesLabel from "../components/CategoriesLabel";
import Header from "../components/Header";
import Board from "../components/ProductBoard";
import { toFirstUpperCase, formatPrice } from "./_utils";
import { produtos } from '../core/Produtos'
import Produto from "../core/Produto";
import { useState } from "react";


export default function Home() {

  const [familia, setFamilia] = useState(" ")
  function hundleGetFamily(familia) {
    setFamilia(familia)
    console.log(familia)

  }

  const Description = toFirstUpperCase("APONTADOR DEPOSITO BLINK tris")
  const Price = formatPrice(45.6409)

 
  return (
    <Flex direction={'column'}
    >
      <Header />
      <CategoriesLabel callbackParentF={hundleGetFamily}/>
      <Board >

        {produtos?.filter((produto) => (produto.idFamilia === familia))   
                    .map((produto) =>{
            return (
                <Card
                  Image={`http://parmacon.nuvemdatacom.com.br:9271/udinick/call?serviceName=IT.getImagemProduto&codprod=${produto.id}&formato=.png`}
                  idProduct = {produto.id}
                  key = {produto.id}
                  description = {toFirstUpperCase(produto.descricao)}
                  Brand = {produto.marca}
                  package = {produto.embalagem}
                  Ean13 = {produto.ean13}
                  Price = {formatPrice(produto.preco)}
                  />
                
            )
        })}
        {/* <Card
          Image="/BLINK.jpg"
          idProduct="5909"
          description={Description}
          Brand={'Tris'}
          package={'Caixa com 24'}
          Ean13={'7897476607795'}
          Price={Price}
        />
        <Card
          Image='http://parmacon.nuvemdatacom.com.br:9271/udinick/call?serviceName=IT.getImagemProduto&codprod=5909&formato=.png'
          idProduct="5909"
          description={Description}
          Brand={'Tris'}
          package={'Caixa com 24'}
          Ean13={'7897476607795'}
          Price={Price}
        /> */}
       
      </Board>

    </Flex>

  )

}