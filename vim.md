# vim
Abrir archivo
```
	vim <filename>
```
 
Lo más importante
```
	mover (usar flechas del teclado)
	:w write guardar archivo
	:q quit  salir
	:wq guardar y salir
	:q! salir sin guardar
```
hay 3 modos: insert, normal (comando), visual
```
	i    insert
	esc  normal mode
	v visual mode (para copiar texto)
```

## comandos
```
	u            deshacer
	ctrl + r     rehacer
	$            fin de linea
	0            inicio de linea
	w            (word) fin de la palabra
	b            (back) inicio de la palabra
	G            fin de archivo
	1G           inicio de archivo
	I            insertar al principio de la linea
	A            insertar al fin de la linea
	o            insertar debajo de la linea
 	O            insertar arriba de la linea
 	x            Borrar caracter
	nx           Borrar x caracteres
	dd           borrar linea
	2dd          borrar 2 lineas
	ndd          borrar n lineas
	y            (yank) copiar
	p            pegar
	c            cambiar (borrar y enter para insert mode)
	>            identación
	d            borrar subrayado
	:set number  mostrar numeros
	:12          ir a linea 12
	/buscado      busca 'buscado' para buscar algo
	n            next: puede ser el siguiente elemento encontrado
	N            anterior:
	:%s/buscado/remplazado/g   remplazar y buscar
```

