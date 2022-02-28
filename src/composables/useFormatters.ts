import dayjs from 'dayjs'
import 'dayjs/locale/nl'

const useFormatters = () => {
	const toTime = (date: Date | undefined) => {
		if (date) return dayjs(date).locale('nl').format('HH:mm')
		return ''
	}
	const toDateTime = (date: Date | undefined) => {
		if (date) return dayjs(date).locale('nl').format('dd MM - HH:mm:ss')
		return ''
	}

	const toHourDuration = (minutes: number) => {
		if (minutes) {
			const h = Math.floor(minutes / 60)
			const m = Math.floor(minutes - h * 60)
			const s = Math.floor((minutes - (h * 60 + m)) * 60)
			return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
		}
		return ''
	}

	return { toTime, toDateTime, toHourDuration }
}

export default useFormatters
