# em-query-to-header

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/em-query-to-header.svg)](https://greenkeeper.io/)

Takes headers from the querystring, sets them as request headers

## installation

	npm install em-query-to-header

## build status

[![Build Status](https://travis-ci.org/eventEmitter/em-query-to-header.png?branch=master)](https://travis-ci.org/eventEmitter/em-query-to-header)


## usage

	var QueryToHeader = require('em-query-to-header');

	var q2header = new QueryToHeader({
		headers: ['accepts'] // list of headers to set as request headers
	});