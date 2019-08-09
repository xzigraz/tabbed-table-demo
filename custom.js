var mockData = {rows: [
	{
		id: '1001',
		column1: 'Product Name - 1',
		column2: 'Product Description',
		column3: 'Product Price'
	},
	{
		id: '1002',
		column1: 'Product Name - 2',
		column2: 'Product Description',
		column3: 'Product Price'
	},
	{
		id: '1003',
		column1: 'Product Name - 3',
		column2: 'Product Description',
		column3: 'Product Price'
	},
	{
		id: '1004',
		column1: 'Product Name - 4',
		column2: 'Product Description',
		column3: 'Product Price'
	},
	{
		id: '1005',
		column1: 'Product Name - 5',
		column2: 'Product Description',
		column3: 'Product Price'
	}
]};

var appendTemplate = function (selector, destination) {
	var template = selector.html();
	var output = Handlebars.compile(template)(mockData);
	destination.html(output);
};

$(function () {
	$('.nav-item a').on('click', function () {
		$('tbody').html('<tr><td>No Data</td></tr>');
	});
	$('#query-submit, #regex-submit').on('click', function (e) {
		e.preventDefault();
		appendTemplate($('#table-row-template'), $('tbody'));
	});
});