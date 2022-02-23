import { createSignal } from 'solid-js'
import useGeolocation from './useGeolocation'
import SunCalc from 'suncalc'

const useSunCalc = () => {
	const [coords, setCoords] = createSignal<GeolocationCoordinates>()

	const geolocation = useGeolocation()
	const getCoords = async () => {
		if (coords()) return coords()

		// Geolocation options
		const options: PositionOptions = {
			enableHighAccuracy: false,
			timeout: 5000,
			maximumAge: 1000 * 60 * 60, // 60 minutes
		}

		const position = await geolocation.getCurrentPosition(options)
		if (position) setCoords(position.coords)
		return position?.coords
	}

	const getSunTimes = async () => {
		const coords = await getCoords()
		if (coords) return SunCalc.getTimes(new Date(), coords.latitude, coords.longitude)
		return undefined
	}
	const getSunPosition = async () => {
		const coords = await getCoords()
		if (coords) return SunCalc.getPosition(new Date(), coords.latitude, coords.longitude)
		return undefined
	}
	const getMoonPosition = async () => {
		const coords = await getCoords()
		if (coords) return SunCalc.getMoonPosition(new Date(), coords.latitude, coords.longitude)
		return undefined
	}
	const getMoonIllumination = () => {
		return SunCalc.getMoonIllumination(new Date())
	}
	const getMoonTimes = async () => {
		const coords = await getCoords()
		if (coords) SunCalc.getMoonTimes(new Date(), coords.latitude, coords.longitude)
		return undefined
	}

	return { getSunTimes, getSunPosition, getMoonPosition, getMoonIllumination, getMoonTimes }
}

export default useSunCalc
