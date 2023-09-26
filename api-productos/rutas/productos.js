const express = require("express");
const mockProduct = require("../mock");
const router = express.Router();

const data = [mockProduct(), mockProduct(), mockProduct()];

// localhost:3000/productos/
router.get("/", (req, res) => {
	res.status(200).json(data);
});

//localhost:3000/productos/2
router.get("/:id", (req, res) => {
	let encontrado = data.find((item) => item.id === parseInt(req.params.id));
	if (encontrado) {
		res.status(200).json(encontrado);
	} else {
		res.sendStatus(404);
	}
});

router.post("/", (req, res) => {
	const nuevoItem = mockProduct();

	data.push(nuevoItem);
	res.status(201).json(nuevoItem);
});

router.put("/:id", (req, res) => {
	let encontrado = data.find((item) => item.id === parseInt(req.params.id));
	if (encontrado) {
		let actualizado = {
			id: encontrado.id,
			nombre: req.body.nombre,
			mac: req.body.mac,
			enStock: req.body.enStock,
			createdOn: encontrado.createdOn,
		};

		let index = data.indexOf(encontrado);
		data.splice(index, 1, actualizado);

		res.sendStatus(204);
	} else {
		res.sendStatus(500);
	}
});

router.delete("/:id", (req, res) => {
	let encontrado = data.find((item) => item.id === parseInt(req.params.id));
	if (encontrado) {
		let index = data.indexOf(encontrado);
		data.splice(index, 1);
	}
	res.sendStatus(204);
});

module.exports = router;
