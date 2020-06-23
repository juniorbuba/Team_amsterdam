const fs  = require('fs');
const rawData = fs.readFileSync('./data/list.json');
const sortObject = require("../utility/sortObject");


exports.index = async (req, res) => {
	res.send('HOMEPAGE');
};

exports.jsonList = async (req, res) => {
	let userData = JSON.parse(rawData);
	userData.sort(sortObject.sortDescending("points"));

	res.status(200).json({
	    status: true,
	    userData
	});
};