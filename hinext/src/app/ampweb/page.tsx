/*
    creando una página con AMP 
    solo es necesario agregar la línea: export const config = {amp: true};

    En el return utilice el AMP Stories, más info:
    https://amp.dev/documentation/guides-and-tutorials/start/visual_story/create_cover_page/?format=stories


            <head>
                <title>Hola AMP</title>
                <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
            </head>
            
            <amp-story standalone title="Probando">
                <amp-story-page id="page1">
                    <amp-story-grid-layer template="vertical">
                        <h1> Hola </h1>
                    </amp-story-grid-layer>
                </amp-story-page>

                <amp-story-page id="page2">
                    <amp-story-grid-layer template="vertical">
                        <h1> Chau! </h1>
                    </amp-story-grid-layer>
                </amp-story-page>

            </amp-story>
*/

export const config = { amp: true };
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
export default function Ampweb() {
  const date = new Date();
	return (
		<>
			<h1> Aqui hay cosas para revisar</h1>
			<amp-timeago
				width="0"
				height="15"
				datetime={date.toJSON()}
				layout="responsive"
			>
				Fecha
			</amp-timeago>
      <amp-story standalone title="Probando">
                <amp-story-page id="page1">
                    <amp-story-grid-layer template="vertical">
                        <h1> Hola </h1>
                    </amp-story-grid-layer>
                </amp-story-page>

                <amp-story-page id="page2">
                    <amp-story-grid-layer template="vertical">
                        <h1> Chau! </h1>
                    </amp-story-grid-layer>
                </amp-story-page>

            </amp-story>
            
		</>
	);
}
