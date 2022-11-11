import { Icon } from '@chakra-ui/react'
import { FaInfoCircle, FaBoxOpen, FaCertificate, FaBarcode , FaMoneyBillAlt } from 'react-icons/fa'


const IconID = () => {
  return ( 
   
        <Icon 
            as={FaInfoCircle} 
            fontSize={['xl','2xl']}
            mx={'3'} 
            color={'blue.600'}
          />
    
    )
}
    const IconPack = () => {
      return ( 
       
            <Icon 
                as={FaBoxOpen} 
                fontSize={['xl','2xl']}
                mx={'3'} 
                color={'blue.600'}
              />
        
        )
}

const IconBrand = () => {
  return ( 
   
        <Icon 
            as={FaCertificate} 
            fontSize={['xl','2xl']}
            mx={'3'} 
            color={'blue.600'}
          />
    
    )
}

const IconBarcode = () => {
  return ( 
   
        <Icon 
            as={FaBarcode} 
            fontSize={['xl','2xl']}
            mx={'3'} 
            color={'blue.600'}
          />
    
    )
}

const IconPrice = () => {
  return ( 
   
        <Icon 
            as={FaMoneyBillAlt} 
            fontSize={['xl','2xl']}
            mx={'3'} 
            color='blue.600'
          />
    
    )
}


export { IconID, IconPack, IconBrand, IconBarcode, IconPrice}