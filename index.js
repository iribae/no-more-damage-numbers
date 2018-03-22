const Command = require('command')

class blockSkill {
	constructor(dispatch) {
		const command = Command(dispatch)
		let enabled=false;
		command.add('hidedmg', enabled=!enabled;)
		dispatch.hook('S_EACH_SKILL_RESULT', 4, packet => {
			if(!enabled) packet.damage=0;
		});
	}
}
module.exports = function blockSkill
