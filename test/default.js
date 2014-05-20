
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert');



	var   Headers = require('../')
		, headers;



	describe('Headers', function(){
		it('should not throw when instantiated', function(){
			headers = new Headers({
				headers: ['accept']
			});
		});	

		it('should rewrite a header fomr the query to the request', function(done){
			headers.request({
				query: {
					accept: 'Application/JSON'
				}
				, setHeader: function(name, value){
					assert.equal(name, 'accept');
					assert.equal(value, 'Application/JSON');
					done();
				}				
			}, {} , function(){});
		});	

		it('should rewrite a header fomr the query to the request (urldecode)', function(done){
			headers.request({
				query: {
					accept: 'Application%2FJSON'
				}
				, setHeader: function(name, value){
					assert.equal(name, 'accept');
					assert.equal(value, 'Application/JSON');
					done();
				}				
			}, {} , function(){});
		});	
	});
	