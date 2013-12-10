#!/usr/bin/env node
var optimist = require('optimist');
var argv = optimist
    .alias('r', 'remove')
    .alias('R', 'remove with number arg')
    .alias('s', 'string')
    .alias('w', 'winner')
    .boolean(['w', 'r'])
    .usage('  outcast helps you randomly remove players or pick a winner from a game.\n \
      Do you need to break a tie... let outcast help.\n \
      Examples:\n \
        outcast -r 1 bill john mike sarah     // A number is required for non-string args\n \
        outcast -r -s "bill john mike sarah"  // -r defaults to 1 if used with -s option\n \
        outcast -r 2 -s "bill john mike sarah"\n \
        outcast -w bill john mike sarah', {
        'r': {
            description: 'Removes things',
            required: false
        },
        'R': {
            description: 'Remove many things',
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
    
if (!argv.r && !argv.R && !argv.w) {
    optimist.showHelp();
}
    

var outcast = require('./index');

// Remove functionality
if (argv.R && !argv.w) {
    var remaining;
    if (argv.s) {
        remaining = outcast.remove(argv.s, argv.R);
    } else {      
        remaining = outcast.remove(argv._, argv.R);
    }

    // Convert the array to list -- prettify
    remaining = remaining.join(' ');
    
    // Print out the results
    console.log(remaining);
}

if (argv.r && !argv.w) {
    var remaining;
    if (argv.s) {
        remaining = outcast.remove(argv.s, 1);
    } else {
        remaining = outcast.remove(argv._, 1);
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


