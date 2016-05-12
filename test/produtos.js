/*var http = require('http');
 var assert = require('assert');
 describe('#ProdutosController', function () {
 it('#listagem json', function (done) {
 var configuracoes = {
 hostname: 'localhost',
 port: '3000',
 path: '/produtos',
 headers: {
 'Accept': 'application/json' //'text/html' <-- content negotiation
 }
 };

 http.get(configuracoes, function (res) {
 assert.equal(res.statusCode, 200);
 assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
 done();
 });
 });
 it('#listagem html', function (done) {
 var configuracoes = {
 hostname: 'localhost',
 port: '3000',
 path: '/produtos',
 headers: {
 'Accept': 'text/html'
 }
 };

 http.get(configuracoes, function (res) {
 assert.equal(res.statusCode, 200);
 assert.equal(res.headers['content-type'], 'text/html; charset=utf-8');
 done();
 });
 });
 });*/


var express = require('../config/express')();
var request = require('supertest')(express);
describe('#ProdutosController', function () {
    it('#listagem json', function (done) {
        request.get('/produtos/')
            .set('Accept', 'application/json')
            .expect('content-type', /json/)
            .expect(200, done);
    });
    it('#listagem html', function (done) {
        request.get('/produtos/')
            .set('Accept', 'text/html')
            .expect('content-type', /html/)
            .expect(200, done);
    });
    it('#cadastro de novo produto com dados invalidos', function (done) {
        request.post('/produtos/')
            .send({titulo:'', descricao:'novo livro'})
            .expect(400, done);
    });
    it('#cadastro de novo produto com dados validos', function (done) {
        request.post('/produtos/')
            .send({titulo:'titulo', descricao:'novo livro', preco: 20.50})
            .expect(302, done);
    });
});