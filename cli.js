#!/usr/bin/env node
var optimist = require('optimist');
var argv = optimist
    .alias('r', 'remove')
    .default('r', 1)
    .alias('s', 'string')
    .alias('w', 'winner')
    .boolean(['w'])
    .usage('  outcast helps you randomly remove players or pick a winner from a game.\n \
      Do you need to break a tie... let outcast help.\n \
      Examples:\n \
        outcast -r bill john mike sarah\n \
        outcast -r 2 bill john mike sarah\n \
        outcast -r -s "bill john mike sarah"\n \
        outcast -w bill john mike sarah', {
        'r': {
            description: 'Removes things based on the number provided',
            required: false
        },
        'w': {
            description: 'Picks a winner from a list',
            required: false
        },
        's': {
            description: 'Input is in string form',
            required: false
        }
    })
    .argv;
    
if (!argv.r && !argv.w) {
    optimist.showHelp();
}
    

var outcast = require('./index');

// Remove functionality
if (argv.r && !argv.w) {
    var remaining;
    if (argv.s) {
        remaining = outcast.remove(argv.s, argv.r);
    } else {
        remaining = outcast.remove(argv._, argv.r);
    }

    // Convert the array to list -- prettify
    remaining = remaining.join(' ');
    
    // Print out the results
    console.log(remaining);
}


if (argv.w) {
    var winner;
    if (argv.s) {
        winner = outcast.winner(argv.s);
    } else {
        winner = outcast.winner(argv._);
    }

    // Convert the array to list -- prettify
    winner = winner.join(' ');
    
    // Print out the results
    console.log(winner);
}


