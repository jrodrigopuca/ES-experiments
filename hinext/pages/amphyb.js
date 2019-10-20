/*
    combinación de AMP/Página normal

    Para ver AMP: http://localhost:3000/amphyb?amp=1
    Para ver página común: http://localhost:3000/amphyb

*/

import {useAmp} from 'next/amp';

export const config= {amp:'hybrid'};

export default function Amphyb(props){
    const isAmp = useAmp();
    return <p>Bienvenido a {isAmp ? 'AMP' : 'una página normal'} !!</p>;

} 