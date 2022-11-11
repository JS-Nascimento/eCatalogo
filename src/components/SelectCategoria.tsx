import { Select } from "@chakra-ui/react";
import Categoria from "../core/Categoria";
import { toFirstUpperCase} from "../pages/_utils";


interface CategoriaProps{
    categorias?: Categoria[]
    onChange?: any
}

export default function SelectCategoria(props : CategoriaProps){

    function renderData(){
        return props.categorias?.map((categoria) =>{
            return (
                <option key={categoria.id} value={categoria.id}>{toFirstUpperCase(categoria.descricao)}</option>
            )
        })

        
    }

    return (
        <Select 
            name="categoria" 
            placeholder='Selecione a Categoria' 
            mt='10'
            onChange={props.onChange}
        >
           {renderData()} 
        </Select>
    )

}

