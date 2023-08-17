import { Container } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineDelete } from "react-icons/ai";

export function UserFavoriteDish ({ data, loading, ...rest }) {

    return (
        <Container {...rest}>
                <span>
                {
                    data.imageDish &&
                    <img 
                    src={data.imageDish} 
                    alt="imagem da refeição" 
                    />
                }
                </span>

                <main>    
                    <h2>
                    {data.title}
                    </h2>                  

                 
                
                </main>               
        </Container>
    )
}