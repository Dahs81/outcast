#!/usr/bin/env node

// var fs = require('fs')
//   , randal = require('./index')
//   ;

// // set up the cli
// var program = require('commander');
// program
//     .version('0.0.3')
//     .usage('outcast [options] <list_of_things ...> # space delimited')
//     .on('--help', function(){
//         console.log('  Example: \n');
//         console.log('    $ outcast john bill sarah mike rebecka');
//         console.log('    john bill sarah rebecka\n');
//     })
//     .option('-r, --remove', 'remove a thing from the list')
//     .option('-w', '--winner', 'pick a winner')
//     .parse(process.argv);

// function ret(args) {
//     console.log(outcast.apply(null, args).join(" "));
// }

// // don't output an empty list
// if (program.args.length) {

//     // handle the redirction file descriptor
//     // e.g. $ ./index.js <(echo "foo bar joe")
//     var args = program.args;
//     if (program.args.length === 1 && program.args[0] == "/dev/fd/63") {    
//         args = fs.readFileSync("/dev/fd/63");
//         args = args.toString('utf-8').replace("\n", "").split(" ");
//     } 

//     ret(args);   

// } else {

//     // support data from stdin
//     var data = "";
//     process.stdin.resume();
//     process.stdin.setEncoding('utf8');
//     process.stdin.on('data', function(chunk) {
//         data += chunk;
//     });
//     process.stdin.on('end', function() {
//         data = data.replace("\n", "").split(' ');
//         if (data.length) {
//             ret(data);
//         }
//     });
// }


var argv = require('optimist').argv;


if (argv.r) {
    console.log('This is working');
}







