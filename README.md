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


