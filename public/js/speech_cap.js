// Let's define our first command. First the text we expect, and then the function it should call
var commands = {
  'test': function() { alert('test'); },   
  'up': function() { alert('up'); },
  'down': function() { alert('down'); }
};

// Add our commands to annyang
annyang.addCommands(commands);

annyang.addCallback('start', function() { console.log('start'); });
annyang.addCallback('end', function() { console.log('stop'); });
annyang.addCallback('result', function(res) { console.log(res); });
annyang.addCallback('resultMatch', function(res) { console.log(res); });

// Start listening. You can call this here, or attach this call to an event, button, etc.
annyang.start();
