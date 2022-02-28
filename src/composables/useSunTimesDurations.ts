import { GetTimesResult } from 'suncalc'
import dayjs from 'dayjs'

const useSunTimesDurations = (times: GetTimesResult) => {
	const getDuration = (from?: Date, to?: Date) => {
		if (from && to) {
			return Math.abs(dayjs(from).diff(to, 'm', true))
		} else {
			return 0
		}
	}

	const morningDuration = getDuration(times.goldenHourEnd, times.solarNoon)
	const afternoonDuration = getDuration(times.solarNoon, times.goldenHour)
	const dayDuration = getDuration(times.goldenHourEnd, times.goldenHour)

	const eveningDuration = getDuration(times.night, times.nadir)
	const afterMidnightDuration = getDuration(times.nadir, times.nightEnd)
	const nightDuration = getDuration(times.night, times.nightEnd)

	const morningAstronomicalTwilight = getDuration(times.nightEnd, times.nauticalDawn)
	const morningNauticalTwilight = getDuration(times.nauticalDawn, times.dawn)
	const morningCivilTwilight = getDuration(times.dawn, times.sunrise)

	const morningSunRise = getDuration(times.sunrise, times.sunriseEnd)
	const morningGoldenHour = getDuration(times.sunrise, times.goldenHourEnd)

	const eveningGoldenHour = getDuration(times.goldenHour, times.sunset)
	const eveningSunSet = getDuration(times.sunsetStart, times.sunset)
	const eveningCivilTwilight = getDuration(times.sunset, times.dusk)
	const eveningNauticalTwilight = getDuration(times.dusk, times.nauticalDusk)
	const eveningAstronomicalTwilight = getDuration(times.nauticalDusk, times.night)

	return {
		morningDuration,
		afternoonDuration,
		dayDuration,

		eveningDuration,
		afterMidnightDuration,
		nightDuration,

		morningAstronomicalTwilight,
		morningNauticalTwilight,
		morningCivilTwilight,
		morningSunRise,
		morningGoldenHour,

		eveningGoldenHour,
		eveningSunSet,
		eveningCivilTwilight,
		eveningNauticalTwilight,
		eveningAstronomicalTwilight,
	}
}

export default useSunTimesDurations
