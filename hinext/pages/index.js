import Layout from '../components/MyLayouts';
import Link from 'next/link';

// Link usando post
const PostLink= (props)=>(
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

// Link usando post con ruta dinamica
// el 'as' es para que pueda usar el {}
const PostDinamico =(props) =>(
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
)


// Contenido del sitio
const contenidoIndex=
    <div>
        <h1>Hola NextJS</h1>
        <PostLink title="prueba post"/>
        <PostDinamico id="practicando"/>
    </div>
;

// Index
const Index = ()=>(
    <div>
        <Layout content={contenidoIndex}/>
    </div>
);

export default Index;