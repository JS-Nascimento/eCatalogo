import { Select } from "@chakra-ui/react";
import SubCategoria from "../core/Subcategoria";
import { scategorias } from "../core/Subcategorias";
import { toFirstUpperCase} from "../pages/_utils";


interface SubCategoriaProps{
    scategorias?: SubCategoria[]
    onChange?: any
    selectedValue?: any
}

export default function SelectSCategoria(props : SubCategoriaProps){

    function renderData(){
        return props.scategorias?.filter((scategoria) => (scategoria.idPai === props.selectedValue))   
                    .map((scategoria) =>{
            return (
                <option key={scategoria.id} value={scategoria.id}>{toFirstUpperCase(scategoria.descricao)}</option>
                
            )
        })
            
        
    }

    return (
        <Select 
            name="subcategoria" 
            placeholder='Selecione a Sub Categoria' 
            mt='10'
            onChange={props.onChange}
        >
           {renderData()} 
        </Select>
    )

}