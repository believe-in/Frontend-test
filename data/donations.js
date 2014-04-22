var data = [
	{
		id: 100,
		amount: 2000,
		message: 'Go for it Anna, good luck with the read-a-thon!',
		name: 'Matthias Metternich'
	},
	{
		id: 101,
		amount: 2000,
		message: 'Looks like a great cause Anna, good luck with your fundraiser!',
		name: 'Alistair Kilpatrick'
	},
	{
		id: 102,
		amount: 2000,
		message: 'Good luck Anna',
		name: 'John Reed'
	}
];

exports.find = function (offset, limit) {
	limit = limit || 2;
	offset = offset || 0;

	return data.slice(offset, offset + limit);
};

exports.byId = function (id) {
	var record = null;

	data.forEach(function (r) {
		if (r.id === id) record = r;
	});

	return record;
};
