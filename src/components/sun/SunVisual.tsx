import { Component } from 'solid-js'
import useFormatters from '../../composables/useFormatters'
import { SunTimesProps } from '../../types'

const SunVisual: Component<SunTimesProps> = ({ sunTimes }) => {
	const { toTime } = useFormatters()

	return (
		<>
			<svg class='w-full shadow-lg rounded-full' viewBox='-225 -225 450 450'>
				<circle class='fill-yellow-100' r='225' />
				<circle class='fill-yellow-500' r='145' />

				<path class='fill-yellow-400' d='M0,0 L-142,-30 A-145,-145 1 0,1 142,-30 z' />
				<path class='fill-yellow-300' d='M0,0 L-133,-58 A-145,-145 1 0,1 133,-58 z' />

				<line class='stroke-amber-700 stroke-[3] rotate-90' x1='-1' y1='-145' x2='-1' y2='145' />

				<path class='fill-blue-400' d='M0,0 L145,0 A145,145 1 0,1 -145,0 z' />
				<path class='fill-blue-500' d='M0,0 L142,30 A145,145 1 0,1 -142,30 z' />
				<path class='fill-blue-700' d='M0,0 L133,58 A145,145 1 0,1 -133,58 z' />
				<path class='fill-blue-900' d='M0,0 L118,85 A145,145 1 0,1 -118,85 z' />

				<text class='day--label font-bold' x='-12' y='-75'>
					DAY
				</text>
				<text class='night--label font-bold' x='-14' y='80'>
					NIGHT
				</text>
				<text class='day--label' x='-20' y='-4'>
					horizon
				</text>

				<text class='day--label' x='-142' y='4' transform='rotate(18, 0,0)'>
					golden hour
				</text>
				<text class='time' x='-210' y='0' transform='rotate(22, 0,0)'>
					{toTime(sunTimes.goldenHour)}
				</text>

				<text class='time' x='-210' y='0' transform='rotate(11, 0,0)'>
					{toTime(sunTimes.sunsetStart)}
				</text>
				<text class='day--label' x='-140' y='0' transform='rotate(5, 0,0)'>
					sunset
				</text>
				<text class='time' x='-210' y='2'>
					{toTime(sunTimes.sunset)}
				</text>

				<text class='night--label' x='-140' y='0' transform='rotate(-8, 0,0)'>
					civil
				</text>
				<text class='time' x='-210' y='0' transform='rotate(-14, 0,0)'>
					{toTime(sunTimes.dusk)}
				</text>

				<text class='night--label' x='-140' y='0' transform='rotate(-20, 0,0)'>
					nautical
				</text>
				<text class='time' x='-210' y='0' transform='rotate(-25, 0,0)'>
					{toTime(sunTimes.nauticalDusk)}
				</text>

				<text class='night--label' x='-140' y='0' transform='rotate(-32, 0,0)'>
					astronomical
				</text>
				<text class='time' x='-212' y='0' transform='rotate(-38, 0,0)'>
					{toTime(sunTimes.night)}
				</text>

				<text class='day--label' x='-15' y='-130'>
					noon
				</text>
				<text class='time' x='-30' y='-155'>
					{toTime(sunTimes.solarNoon)}
				</text>

				<text class='time' x='150' y='2' transform='rotate(-23, 0,0)'>
					{toTime(sunTimes.goldenHourEnd)}
				</text>
				<text class='day--label' x='77' y='2' transform='rotate(-17, 0,0)'>
					golden hour
				</text>
				<text class='time' x='150' y='3' transform='rotate(-12, 0,0)'>
					{toTime(sunTimes.sunriseEnd)}
				</text>

				<text class='day--label' x='104' y='-7'>
					sunrise
				</text>
				<text class='time' x='150' y='2'>
					{toTime(sunTimes.sunrise)}
				</text>

				<text class='night--label' x='120' y='0' transform='rotate(8, 0,0)'>
					civil
				</text>
				<text class='time' x='150' y='2' transform='rotate(12, 0,0)'>
					{toTime(sunTimes.dawn)}
				</text>

				<text class='night--label' x='98' y='0' transform='rotate(20, 0,0)'>
					nautical
				</text>
				<text class='time' x='150' y='2' transform='rotate(25, 0,0)'>
					{toTime(sunTimes.nauticalDawn)}
				</text>

				<text class='night--label' x='71' y='0' transform='rotate(32, 0,0)'>
					astronomical
				</text>
				<text class='time' x='150' y='2' transform='rotate(37, 0,0)'>
					{toTime(sunTimes.nightEnd)}
				</text>

				<text class='night--label' x='-22' y='138' transform='rotate(0, 0,0)'>
					midnight
				</text>
				<text class='time' x='-25' y='165'>
					{toTime(sunTimes.nadir)}
				</text>
			</svg>
		</>
	)
}

export default SunVisual
