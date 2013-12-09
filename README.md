# outcast
=======

A fun module that helps you randomly remove people from a game.
Do you have a tie?  Use outcast to break the tie.

### Installation

```
npm install outcast
```

```
var outcast = require('outcast');
```

## Usage
You can remove as many players from the game at a time as you want. (Defaults to one)

** Now with cli capability - so you can you it from your terminal***

#### Terminal

```
outcast -r bill john mike sarah       // Remove one
outcast -r 2 bill john mike sarah     // Remove [num] passed in
outcast -r -s "bill john mike sarah"  // Pass as string
outcast -w bill john mike sarah       // Pick a winner
```

#### Remove One
```
var gamePlayers = ['John', 'Bill', 'Sarah', 'Mike', 'Rebecka'];
OR
var gamePlayers = 'John Bill Sarah Mike Rebecka'; // Space delimited

outcast.remove(gamePlayers);
```

##### Returns
['John', 'Sarah', 'Mike', 'Rebecka']  // Removes a random value

#### Remove Many

```
var gamePlayers = 'John Bill Sarah Mike Rebecka'; // Space delimited

outcast.remove(gamePlayers, 3);
```

##### Returns
['Bill', 'Mike']  // Removes 3 random value

#### Just pick a winner already...

```
var gamePlayers = 'John Bill Sarah Mike Rebecka'; // Space delimited

outcast.winner(gamePlayers);
```

##### Returns
['Sarah']  // Pick a random value


