import { GetTimesResult } from 'suncalc'
import dayjs from 'dayjs'

const useSunTimesDurations = (times: GetTimesResult) => {
	const dayDuration = dayjs(times?.goldenHour).diff(times?.goldenHourEnd, 'm', true)
	const sunRiseDuration = dayjs(times?.sunriseEnd).diff(times?.sunrise, 'm', true)
	const sunSetDuration = dayjs(times?.sunset).diff(times?.sunsetStart, 'm', true)
	const goldenHourMorning = dayjs(times?.goldenHourEnd).diff(times?.sunrise, 'm', true)
	const goldenHourEvening = dayjs(times?.sunset).diff(times?.goldenHour, 'm', true)

	return { dayDuration, sunRiseDuration, sunSetDuration, goldenHourMorning, goldenHourEvening }
}

export default useSunTimesDurations
