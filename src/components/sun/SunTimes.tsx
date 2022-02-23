import { Component } from 'solid-js'
import { GetTimesResult } from 'suncalc'
import SunMoment from './SunMoment'

export interface SunTimesProps {
	sunTimes: GetTimesResult
}

const SunTimes: Component<SunTimesProps> = ({ sunTimes }) => {
	return (
		<>
			<div class='pl-28 pr-4 py-4 m-10 shadow-lg bg-cyan-100-100'>
				<ul class='relative border-l-[4px] border-sky-700'>
					<SunMoment moment={sunTimes.nadir} label='Nadir' description='Donkerste moment van de nacht' />
					<SunMoment moment={sunTimes.nightEnd} label='Einde van de nacht' />
					<SunMoment moment={sunTimes.nauticalDawn} label='Begin nautische ochtendschemering' />
					<SunMoment moment={sunTimes.dawn} label='Ochtendschemering' />
					<SunMoment moment={sunTimes.sunrise} label='Zonsopkomst' />
					<SunMoment moment={sunTimes.sunriseEnd} label='Eind zonsopkomst' />
					<SunMoment moment={sunTimes.goldenHourEnd} label='Eind gouden uur' />
					<SunMoment moment={sunTimes.solarNoon} label='Middag' />
					<SunMoment moment={sunTimes.goldenHour} label='Begin gouden uur' />
					<SunMoment moment={sunTimes.sunsetStart} label='Begin zonsondergang' />
					<SunMoment moment={sunTimes.sunset} label='Einde zonsondergang' />
					<SunMoment moment={sunTimes.dusk} label='Schemering' />
					<SunMoment moment={sunTimes.nauticalDusk} label='Begin nautische avondschemering' />
					<SunMoment moment={sunTimes.night} label='Nacht' />
				</ul>
			</div>
		</>
	)
}

export default SunTimes
