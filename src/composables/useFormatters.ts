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

	return { toTime, toDateTime }
}

export default useFormatters
