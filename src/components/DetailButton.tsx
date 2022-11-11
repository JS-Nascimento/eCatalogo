import { Icon, IconButton, IconButtonProps} from '@chakra-ui/react'
import * as React from 'react'
import { FiZoomIn } from 'react-icons/fi'

export const DetailButton = (props: IconButtonProps) => (
  
    <IconButton
      isRound
      bg="telegram.600"
      color={'white'}
      size="md"
      fontSize={'24px'}
      _hover={{ transform: 'scale(1.1)' }}
      sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
      transition="all 0.15s ease"
      icon={<Icon as={FiZoomIn}  transition="all 0.15s ease" />}
      boxShadow="base"
      {...props}
    />
  
)
