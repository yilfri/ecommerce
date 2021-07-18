export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json([
			{ Name: 'Cheese', Price: 2.5, Location: 'Refrigerated foods' },
			{ Name: 'Crisps', Price: 3, Location: 'the Snack isle' },
			{ Name: 'Pizza', Price: 4, Location: 'Refrigerated foods' },
			{ Name: 'Chocolate', Price: 1.5, Location: 'the Snack isle' },
			{ Name: 'Self-raising flour', Price: 1.5, Location: 'Home baking' },
			{ Name: 'Ground almonds', Price: 3, Location: 'Home baking' }
		]);
	}
}