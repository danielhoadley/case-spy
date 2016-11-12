var express = require('express');
var jquery =  require('jquery');


var router = express.Router();

var para = "I am the paragraph against which this application will search for matching case publication references. I'm going to give this paragraph four dummy WLR references: [2012] 1 WLR 123, [2013] 2 WLR 456, [2014] 3 WLR 789 and, finally, [2015] 4 WLR 321. In addition, I'm giving the paragraph three dummy ICR references: [2013] ICR 123, [2014] ICR 456 and [2015] ICR 789. Finally, I'll give it two dummy PTSR references: [2015] PTSR 123 and [2016] PTSR 456."



// var regex = /\w+\s/ig;

// Match xxx Name v. Name, nnn U.S. nnn, nnn (yyyy) 

// var USregex = /(\w+\sv.\s\w+,\s\d*\s?[\w.]*[\d,\s]*\(\d{4}\))/ig;

// Match [yyyy] n WLR n+

var WLRregex = /((\(|\[)\d{4}(\)|\]))(\s+\d+\s+((WLR))\s+\d+)/ig;

// Match [yyyy] ICR n+

var ICRregex = /((\(|\[)\d{4}(\)|\]))(\s+((ICR))\s+\d+)/ig;

// Load the cases into the matches variable

var PTSRregex = /((\(|\[)\d{4}(\)|\]))(\s+((PTSR))\s+\d+)/ig;

// Load the matches into memory

// var matches = para.match(USregex);
var matchesTwo = para.match(WLRregex);
var matchesThree = para.match(ICRregex);
var matchesFour = para.match(PTSRregex);

 // for (var i = 0; i < matches.length; i += 1) {
    
    router.get('/', function(req, res) {
        
        res.render('index', { matchesTwo, matchesThree, matchesFour }) });
    
 //}; 

// Handle the form


var uri = "my test.asp?name=ståle&car=saab";
var res = encodeURI(uri);

// console.log('The U.S. cases were detected in the text:\n\n' + matches + '\n\n');
console.log('The following WLR refs were detected in the text:\n\n' + matchesTwo + '\n\n');
console.log('The following ICR refs were detected in the text:\n\n' + matchesThree + '\n\n');
console.log('The following PTSR refs were detected in the text:\n\n' + matchesFour + '\n\n');


// console.log(res);

module.exports = router;
