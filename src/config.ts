import { Regex, SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	host: string
	port: number
	feedbackPort: number
	refreshOnInit: boolean
	numTrackVariables: number
	numFXVariables: number
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'static-text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'This module controls <a href="https://www.reaper.fm" target="_new">REAPER</a>.',
		},
		{
			type: 'textinput',
			id: 'host',
			width: 6,
			label: 'Target IP',
			tooltip: 'The IP of the computer running REAPER',
			regex: Regex.IP,
		},
		{
			type: 'number',
			id: 'port',
			label: 'Target Port',
			width: 3,
			tooltip: 'The port REAPER is listening to OSC on',
			min: 1,
			max: 65535,
			default: 8000,
		},
		{
			type: 'number',
			id: 'feedbackPort',
			label: 'Feedback Port',
			width: 3,
			tooltip: 'The port REAPER is sending OSC to',
			min: 1,
			max: 65535,
			default: 9000,
		},
		{
			type: 'number',
			id: 'numTrackVariables',
			label: 'Number of Track Variables',
			width: 3,
			tooltip: 'Number of Tracks to watch in the Variables Section',
			min: 1,
			max: 256,
			default: 10,
		},
		{
			type: 'number',
			id: 'numFXVariables',
			label: 'Number of FX Variables',
			width: 3,
			tooltip: 'Number of FX to watch in the Variables Section',
			min: 1,
			max: 256,
			default: 2,
		},
		{
			type: 'checkbox',
			id: 'refreshOnInit',
			label: 'Refresh On Start',
			width: 3,
			tooltip: 'If enabled, a "Control surface: Refresh all surfaces" command will be sent to reaper on start.',
			default: true,
		},
	]
}
