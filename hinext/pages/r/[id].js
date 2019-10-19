import fetch from 'isomorphic-unfetch';

const Episodios = (props) =>{
    const paraRemover = /(<([^>]+)>)/ig;
    const descripcion = props.data.summary.replace(paraRemover, '');

    return(
    <div>
        <h1>{props.data.name}</h1>
        <img src={props.data.image.medium} />
        <p>{descripcion}</p>
    </div>)
}

Episodios.getInitialProps = async function(context){
    const {id} = context.query;
    const res = await fetch(`http://api.tvmaze.com/episodes/${id}`);
    const data= await res.json();

    return {data};
}

export default Episodios;