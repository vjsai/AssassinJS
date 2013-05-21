// test.js 
// this is a test filter

var logger = require('../system/logger');

function reloadrqm(rqm)
{
try{logger.reloadrqm(rqm);}catch(err){console.log(err);}
logger = rqm.system.logger;
}

function applyFilter(routesObj,request,response)
{
	logger.write('test filter','filters/test.js');
	var filterobj = {};
	filterobj.filterMessage = 'this is a test filter application';
	filterobj.filterStatus = 200;
	return filterobj;
}

exports.applyFilter = applyFilter;
exports.reloadrqm = reloadrqm;