import { Select } from "@chakra-ui/react";
import Familia from "../core/Familia";
import { familias } from "../core/Familias";
import { toFirstUpperCase} from "../pages/_utils";


interface FamiliaProps{
    familias?: Familia[]
    onChange?: any
    selectedValue?: any
}

export default function SelectFamilia(props : FamiliaProps){

    function renderData(){
        return props.familias?.filter((familia) => (familia.idPai === props.selectedValue))   
                    .map((familia) =>{
            return (
                <option key={familia.id} value={familia.id}>{toFirstUpperCase(familia.descricao)}</option>
                
            )
        })
            
        
    }

    return (
        <Select 
            name="familia" 
            placeholder='Selecione a Família' 
            mt='10'
            onChange={props.onChange}
        >
           {renderData()} 
        </Select>
    )

}