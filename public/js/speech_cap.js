var commands = ['takeoff', 'land', 'up', 'down', 'left', 'right', 'front', 'back', 'clockwise', 'counterClockwise'];

var cmdMap = commands.reduce(function(agg, next) {
  var cmd = next;
  agg[cmd] = function() { notify(cmd); };
  return agg;
}, {});

// Add our commands to annyang
annyang.addCommands(cmdMap);

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
