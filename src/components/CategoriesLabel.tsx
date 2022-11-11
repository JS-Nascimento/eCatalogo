import { Box, ContainerProps, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import Categories from "./Categories";

interface CatProps {
    title?: any
   

}

export default function CategoriesLabel(/* props: ContainerProps, */ { callbackParentF }) {
    const [title, setTitleCat] = useState(" ")
    function hundleGetTitle(title) {
        setTitleCat(title)

       callbackParentF(title)

    }

    return (
        <>
            <Flex
                pl={'6'}
                pr={'2'}
                alignItems={'center'}
                justify={'space-between'}
                marginTop={'3'}
                bg={'white'}
                w={['90%', '90%', '90%', '100%']}
                maxWidth='1960px'
                mx='auto'
                shadow="lg"
                border='1px'
                borderColor={'gray.200'}
                borderRadius={'xl'}
                h={['30px', '60px']}
                py={['1', '1']}
                fontSize={['sm', 'md', 'xl', 'xl']}

            >
                <Input
                    isReadOnly
                    h={['24px', '54px']}
                    fontSize={['xs', 'xl']}
                    color={'telegram.700'}
                    border={'none'}
                    width={'75%'}
                    type={'text'}
                    id='categoria'
                    value={title} />
                <Categories callbackParent={hundleGetTitle} />
            </Flex>

        </>
    )
}


