const data = [
	{
		name: 'Goku',
		price: 9,
		description: 'description',
		img: { front: 'https://i.imgur.com/RTzzk17.png', box: 'https://i.imgur.com/vkFibsj.png' },
		quantity: 15
	},

	{
		name: 'Stich',
		price: 7,
		description: 'description',
		img: { front: 'https://i.imgur.com/qHDXcas.png', box: 'https://i.imgur.com/z3Dw4OR.png' },
		quantity: 5
	},

	{
		name: 'Bulbasaur',
		price: 11,
		description: 'description',
		img: { front: 'https://i.imgur.com/z5BX4yi.png', box: 'https://i.imgur.com/4YBmo4q.png' },
		quantity: 21
	},
	{
		name: 'Cruella',
		price: 8,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/Mpz1tKO.png',
			box: 'https://i.imgur.com/W0tI2Gy.png'
		},
		quantity: 17
	},
	{
		name: 'Appa',
		price: 17,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/z8988K9.png',
			box: 'https://i.imgur.com/FoqZL0s.png'
		},
		quantity: 3
	},

	{
		name: 'Pennywise',
		price: 9,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/1Wyhhc4.png',
			box: 'https://i.imgur.com/LCWjVwl.png'
		},
		quantity: 3
	},
	{
		name: 'Squirtle',
		price: 9,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/cjjH8mF.png',
			box: 'https://i.imgur.com/ZfZ9OXQ.png'
		},
		quantity: 10
	},
	{
		name: 'Kakashi',
		price: 7.5,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/08zo9VQ.png',
			box: 'https://i.imgur.com/TdMjakC.png'
		},
		quantity: 15
	},

	{
		name: 'Harley Quinn',
		price: 9,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/7Ex98Th.png',
			box: 'https://i.imgur.com/mNmTiEs.png'
		},
		quantity: 13
	},
	{
		name: 'Deadpool',
		price: 4,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/UNOmV9c.png',
			box: 'https://i.imgur.com/O1rdkfQ.png'
		},
		quantity: 6
	},
	{
		name: 'Hulk',
		price: 9,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/faToboZ.png',
			box: 'https://i.imgur.com/Vd1p9yx.png'
		},
		quantity: 9
	},
	{
		name: 'Yoda',
		price: 12.5,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/xeObwgy.png',
			box: 'https://i.imgur.com/wgDRzEk.png'
		},
		quantity: 5
	},
	{
		name: 'Flash',
		price: 12,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/YVR2Cgy.png',
			box: 'https://i.imgur.com/GkBIJH4.png'
		},
		quantity: 13
	},
	{
		name: 'Harry Potter',
		price: 15,
		description: 'description',
		img: {
			front: 'hhttps://i.imgur.com/X7KptEu.png',
			box: 'https://i.imgur.com/wfgYm5O.png'
		},
		quantity: 20
	},
	{
		name: 'Baby Yoda',
		price: 9,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/dcMpbIM.png',
			box: 'https://i.imgur.com/n2yNiSV.png'
		},
		quantity: 8
	},
	{
		name: 'The Joker',
		price: 9.5,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/9lLDhF0.png',
			box: 'https://i.imgur.com/KvBq21v.png'
		},
		quantity: 14
	},
	{
		name: 'Hermione Granger',
		price: 7,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/yOExDuy.png',
			box: 'https://i.imgur.com/oUm57eJ.png'
		},
		quantity: 9
	},
	{
		name: 'Batman',
		price: 11.5,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/FVZRicH.png',
			box: 'https://i.imgur.com/nUGMacL.png'
		},
		quantity: 13
	},
	{
		name: 'Freddy Mercury',
		price: 99,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/bMkJ6OL.png',
			box: 'https://i.imgur.com/eUiG7bP.png'
		},
		quantity: 2
	},
	{
		name: 'Lebron James',
		price: 12.5,
		description: 'description',
		img: {
			front: 'https://i.imgur.com/RrUngra.png',
			box: 'https://i.imgur.com/xMySxya.png'
		},
		quantity: 7
	}
];

export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json(data);
	}
}
