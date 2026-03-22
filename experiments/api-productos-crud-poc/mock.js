const generateRandomNumber = () => Math.floor(Math.random() * 100);

function generateRandomMACAddress() {
	const characters = "0123456789ABCDEF";
	let macAddress = "";

	for (let i = 0; i < 12; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		macAddress += characters.charAt(randomIndex);
	}

	macAddress = macAddress.match(/.{1,2}/g).join(":");
	return macAddress;
}

const mockProduct = () => {
  const random = generateRandomNumber();

	return {
		id: random,
		nombre: "Router " + random,
		random: generateRandomMACAddress(),
		enStock: random % 2 === 0,
		createdOn: new Date(),
	};
};

module.exports = mockProduct;