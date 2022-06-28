var elasticsearch=require('elasticsearch');
var client = new elasticsearch.Client({host:'es01:9200',});
module.exports = client;
