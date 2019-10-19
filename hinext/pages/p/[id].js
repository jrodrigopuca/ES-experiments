import {useRouter} from 'next/router';
import Layout from '../../components/MyLayouts';

/*
    el id es remplazado por lo que necesite
    útil para cuando tengo que usar /p/101, /p/499
    o cualquier combinación de ids
*/


export default function Post(){
    const router = useRouter();
    const contenidoID=(
        <div>
            <h1>{router.query.id}</h1>
            <p>Esta es una entrada dinamica</p>
        </div>
    )
    return(
        <Layout content={contenidoID}/>
    )
}