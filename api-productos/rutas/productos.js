const express= require('express')
const router = express.Router()

const data = [
    {id:1, nombre:'Router 1', mac:'00:12:34:56:78',enStock:true, createdOn: new Date()},
    {id:2, nombre:'Router 2', mac:'00:12:A4:56:A8',enStock:true, createdOn: new Date()},
    {id:3, nombre:'Router 3', mac:'00:C2:D4:36:FF',enStock:false, createdOn: new Date()}
]

// localhost:3000/productos/
router.get('/', (req,res)=>{
    res.status(200).json(data)
})

//localhost:3000/productos/2
router.get('/:id', (req, res)=>{
    let encontrado = data.find(item=>(item.id===parseInt(req.params.id)));
    if (encontrado){
        res.status(200).json(encontrado)
    }else{
        res.sendStatus(404);
    }
})

router.post('/', (req, res)=>{
    let identificadores = data.map(item=>item.id)
    let nuevoId = identificadores.length > 0 ? Math.max.apply(Math,identificadores)+1:1;
    let nuevoItem ={
        id:nuevoId,
        nombre: req.body.nombre,
        mac: req.body.mac,
        enStock: true,
        createdOn: new Date()
    };

    data.push(nuevoItem)
    res.status(201).json(nuevoItem)
})

router.put('/:id', (req,res)=>{
    let encontrado = data.find(item=>item.id===parseInt(req.params.id));
    if (encontrado){
        let actualizado ={
            id:encontrado.id,
            nombre: req.body.nombre,
            mac: req.body.mac,
            enStock: req.body.enStock,
            createdOn: encontrado.createdOn
        };

        let index = data.indexOf(encontrado)
        data.splice(index,1,actualizado)

        res.sendStatus(204)
    }else{
        res.sendStatus(500)
    }
})

router.delete('/:id', (req,res)=>{
    let encontrado = data.find(item=> item.id===parseInt(req.params.id))
    if (encontrado){
        let index = data.indexOf(encontrado)
        data.splice(index,1)
    }
    res.sendStatus(204)
})

module.exports = router;