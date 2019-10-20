import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Layout from '../components/MyLayouts';


const Robot = (props) =>(
    <div>
        <Layout/>
        <h1>Mr Robot Episodes</h1>
        <ul>
            {props.episodes.map(e=>(
                <li key={e.id}>
                    <Link href="/r/[id]" as={`/r/${e.id}`}>
                        <a>{e.name}</a>
                    </Link>
                </li>))
            }
        </ul>

        <style jsx global>{`
            ul{
                padding:0;
            }

            li{
                list-style:none;
                margin:5px 0;
            }

            a {
                text-decoration:none;
                color:red;
            }

            a:hover{
                opacity:0.6;
            }
        `}</style>
    </div>
)

Robot.getInitialProps = async function(){
    const res= await fetch('http://api.tvmaze.com/shows/1871/episodes');
    const data = await res.json();
    
    console.log(`Contar: ${data.length}`); // <=== Esto lo ve consola!

    return{
        episodes: data,
    }
}

export default Robot;