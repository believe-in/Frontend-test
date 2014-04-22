var moment = require('moment');

var data = [
	{
		id: 1,
		text: "Thank you Matthias, I appreciate your support :)",
		name: "Anna Joicey",
		created: '2012-01-22'
	},
	{
		id: 2,
		text: "You're welcome",
		name: "Matthias Metternich",
		created: '2012-01-23'
	},
	{
		id: 3,
		text: "Meh pop-up mlkshk chillwave, distillery sartorial authentic craft beer iPhone quinoa. Mlkshk plaid occupy, letterpress banjo kale chips literally Williamsburg bicycle rights iPhone mustache fanny pack Shoreditch. Fixie flannel +1 American Apparel. Roof party meh Banksy, tote bag gastropub cray mixtape chambray 8-bit freegan.",
		name: "John Doe",
		created: '2012-02-04'
	},
	{
		id: 4,
		text: "Polaroid raw denim plaid cliche. Drinking vinegar selfies kale chips wolf, blog lo-fi narwhal Marfa meh gastropub meggings fap scenester. Squid Neutra McSweeney's roof party polaroid +1 trust fund.",
		name: "Jane Doe",
		created: '2012-03-12'
	},
	{
		id: 5,
		text: "Typewriter trust fund pork belly, chillwave stumptown Neutra cliche hashtag quinoa VHS meh Shoreditch chambray. Keytar typewriter plaid +1 put a bird on it, quinoa cliche locavore banjo irony. Scenester quinoa Godard four loko aesthetic banh mi. Art party tattooed pickled mixtape gluten-free pour-over. YOLO disrupt actually, you probably haven't heard of them Godard squid semiotics fanny pack bicycle rights locavore slow-carb artisan.",
		name: "Paul Paulsen",
		created: '2012-03-22'
	},
	{
		id: 6,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		name: "Tom Taylor",
		created: '2012-03-23'
	},
	{
		id: 7,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		name: "Jessica Watergoose",
		created: '2012-03-23'
	},
	{
		id: 8,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		name: "Kevin Cresswell",
		created: '2012-03-23'
	},
	{
		id: 9,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		name: "Robert Lambert",
		created: '2012-03-23'
	},
	{
		id: 10,
		text: "Artisan next level quinoa mumblecore direct trade, yr Brooklyn deep v typewriter whatever. 3 wolf moon beard tousled, swag freegan ennui skateboard wolf McSweeney's kale chips kogi ethnic High Life mustache Banksy. Banjo Banksy fanny pack hella asymmetrical. Neutra trust fund Cosby sweater bicycle rights Etsy literally.",
		name: "Felicity Treadwell",
		created: '2012-03-23'
	}
];


exports.find = function (offset, limit) {
	limit = limit || data.length;
	offset = offset || 0;

	return data.slice(offset, limit);
};

exports.byId = function (id) {
	var record = null;

	data.forEach(function (r) {
		if (r.id === id) record = r;
	});

	return record;
};

exports.save = function (comment) {
	var id = data[data.length - 1].id;
	comment.id = id + 1;

	data.push(comment);

	comment.created = moment().format('YYYY-MM-DD hh:mm:ss');

	return comment;
};
