import { Component } from 'solid-js'
import SunMoment from './SunMoment'
import { SunTimesProps } from '../../types'

const SunTimes: Component<SunTimesProps> = ({ sunTimes }) => {
	return (
		<>
			<div class='pl-28 pr-4 py-4 m-4 bg-cyan-100-100'>
				<ul class='relative border-l-[3px] border-blue-900'>
					<SunMoment moment={sunTimes.nadir} label='Midnight' description='Darkest moment of the night' />
					<SunMoment moment={sunTimes.nightEnd} label='Astronomical twilight' description='End of the night' />
					<SunMoment
						moment={sunTimes.nauticalDawn}
						label='Nautical twilight'
						description='End of astronomical twilight'
					/>
					<SunMoment
						moment={sunTimes.dawn}
						label='Civil twilight'
						description='Blue hour, end of the nautical twilight'
					/>
					<SunMoment moment={sunTimes.sunrise} label='Sunrise' description='Start of the sunrise' />
					<SunMoment moment={sunTimes.sunriseEnd} label='End sunrise' description='The sun is fully visible' />
					<SunMoment moment={sunTimes.goldenHourEnd} label='End golden hour' description='Start of the day' />
					<SunMoment moment={sunTimes.solarNoon} label='Noon' description='The highest point of the sun' />
					<SunMoment moment={sunTimes.goldenHour} label='Beginning of the golden hour' description='End of the day' />
					<SunMoment
						moment={sunTimes.sunsetStart}
						label='Begin sunset'
						description='The bottom of the sun touches the horizon'
					/>
					<SunMoment
						moment={sunTimes.sunset}
						label='Civil twilight'
						description='End sunset, the sun has disappeared behind the horizon'
					/>
					<SunMoment moment={sunTimes.dusk} label='Nautical twilight' description='End civil twilight' />
					<SunMoment moment={sunTimes.nauticalDusk} label='Astronomical twilight' description='End nautical twilight' />
					<SunMoment moment={sunTimes.night} label='Night' description='End astronomical twilight' />
				</ul>
			</div>
		</>
	)
}

export default SunTimes
