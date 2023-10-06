import { useAmp } from 'next/amp'

  export const config = {
    amp: true,
  }

function AmpWeb() {
    const isAmp = useAmp()
  return (
    <div>
      <h1>Esta es una página AMP en Next.js</h1>
      <p>Contenido de la página AMP...</p>
      <amp-img
        alt="Mountains"
        width="550"
        height="368"
        layout="responsive"
        src="https://amp.dev/static/inline-examples/images/mountains.webp"></amp-img>
      </div>
  );
}

export default AmpWeb;
