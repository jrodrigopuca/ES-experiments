import {useRouter} from 'next/router';
import Layout from '../components/MyLayouts';

/*
    Esta página sirve para recibir contenido externo,
    por ejemplo al recibir http://localhost:3000/post?title=prueba%20post
    mostrará el texto "prueba post"
*/

const Page = ()=>{
    const router = useRouter();
    const contenidoPage=
        <div>
            <h3>Esta página recibe contenido</h3>
            <p>Contenido recibido: {router.query.title}</p>
            
        </div>;

    return (
        <Layout content={contenidoPage}/>
    );
}

export default Page;