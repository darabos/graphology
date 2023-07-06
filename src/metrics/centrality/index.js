/**
 * Graphology Metrics Centrality
 * ==============================
 *
 * Sub module endpoint.
 */
var degree = require('./degree.js');
var betweenness = require('./betweenness.js');

exports.closeness = require('./closeness.js');
exports.eigenvector = require('./eigenvector.js');
exports.hits = require('./hits.js');
exports.pagerank = require('./pagerank.js');

exports.degree = degree.degreeCentrality;
exports.inDegree = degree.inDegreeCentrality;
exports.outDegree = degree.outDegreeCentrality;

exports.betweenness = betweenness.betweennessCentrality;
exports.edgeBetweenness = betweenness.edgeBetweennessCentrality;
