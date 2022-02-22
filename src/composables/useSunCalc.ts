import { createSignal, createMemo, onMount } from 'solid-js'
import useGeolocation from './useGeolocation'
import SunCalc from 'suncalc'

const useSunCalc = () => {
	const [coords, setCoords] = createSignal<GeolocationCoordinates>()

	const geolocation = useGeolocation()

	onMount(async () => {
		const position = await geolocation.getCurrentPosition()
		setCoords(position?.coords)
	})

	const getCoords = async () => {
		if (coords()) return coords()
		const position = await geolocation.getCurrentPosition()
		if (position) setCoords(position.coords)
		return position?.coords
	}

	const getTimes = async () => {
		const coords = await getCoords()
		if (coords) return SunCalc.getTimes(new Date(), coords.latitude, coords.longitude)
		return undefined
	}
	const getPosition = async () => {
		const coords = await getCoords()
		if (coords) return SunCalc.getPosition(new Date(), coords.latitude, coords.longitude)
		return undefined
	}

	return { getTimes, getPosition }
}

export default useSunCalc
