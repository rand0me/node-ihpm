/* about commander component
 * To use add require('../cmds/about.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('about')
		.version('0.0.0')
		.description('About InHabit CLI')
		.action(function (/* Args here */) {
            const chalk = require('chalk');
			console.log(chalk.cyan.bold(`
                 ___          ___          ___          ___                 ___     
      ___       /\\__\\        /\\__\\        /\\  \\        /\\  \\         ___   /\\  \\    
     /\\  \\     /::|  |      /:/  /       /::\\  \\      /::\\  \\       /\\  \\  \\:\\  \\   
     \\:\\  \\   /:|:|  |     /:/__/       /:/\\:\\  \\    /:/\\:\\  \\      \\:\\  \\  \\:\\  \\  
     /::\\__\\ /:/|:|  |__  /::\\  \\ ___  /::\\~\\:\\  \\  /::\\~\\:\\__\\     /::\\__\\ /::\\  \\ 
  __/:/\\/__//:/ |:| /\\__\\/:/\\:\\  /\\__\\/:/\\:\\ \\:\\__\\/:/\\:\\ \\:|__| __/:/\\/__//:/\\:\\__\\
 /\\/:/  /   \\/__|:|/:/  /\\/__\\:\\/:/  /\\/__\\:\\/:/  /\\:\\~\\:\\/:/  //\\/:/  /  /:/  \\/__/
 \\::/__/        |:/:/  /      \\::/  /      \\::/  /  \\:\\ \\::/  / \\::/__/  /:/  /     
  \\:\\__\\        |::/  /       /:/  /       /:/  /    \\:\\/:/  /   \\:\\__\\  \\/__/      
   \\/__/        /:/  /       /:/  /       /:/  /      \\::/__/     \\/__/             
                \\/__/        \\/__/        \\/__/        ~~                           
            `));
		});
};
