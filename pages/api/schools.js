import { schools } from "./data/schools"

export default function handler(req, res) {
	if (req.method === 'GET') {
		res.status(200).json(schools)
	}
}