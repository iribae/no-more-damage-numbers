const Command = require('command')

module.exports = function blockSkill(dispatch) {
	const command = Command(dispatch)
	let enabled
	command.add('rskill', () => {
		enabled = !enabled
		command.message('damage spam garbo blocker '+(enabled?'enabled':'disabled')+'.')
	})
	dispatch.hook('S_EACH_SKILL_RESULT', (event) => {
		damage = event.damage
	  if (!enabled) return
	return false
	})
}
