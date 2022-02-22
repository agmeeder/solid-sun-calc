import { Component, createSignal, onMount, Show } from 'solid-js'
import useSunCalc from './composables/useSunCalc'
import { GetSunPositionResult, GetTimesResult } from 'suncalc'
import Moment from './components/moment'

const App: Component = () => {
	const [times, setTimes] = createSignal<GetTimesResult>()
	const [sunPositions, setSunPosition] = createSignal<GetSunPositionResult>()

	const sunCalc = useSunCalc()
	onMount(async () => {
		const t = await sunCalc.getTimes()
		setTimes(t)

		const p = await sunCalc.getPosition()
		setSunPosition(p)
	})

	return (
		<>
			<h1>Zontijden</h1>
			<Show when={times()} fallback='Bezig met locatiebepaling en berekenen...'>
				<div class='pl-28 pr-4 py-4 m-10 shadow-lg bg-cyan-100-100'>
					<ul class='relative border-l-[4px] border-cyan-700'>
						<Moment moment={times()?.nadir} label='Nadir' description='Donkerste moment van de nacht' />
						<Moment moment={times()?.nightEnd} label='Einde van de nacht' />
						<Moment moment={times()?.nauticalDawn} label='Begin nautische ochtendschemering' />
						<Moment moment={times()?.dawn} label='Ochtendschemering' />
						<Moment moment={times()?.sunrise} label='Zonsopkomst' />
						<Moment moment={times()?.sunriseEnd} label='Eind zonsopkomst' />
						<Moment moment={times()?.goldenHourEnd} label='Eind gouden uur' />
						<Moment moment={times()?.solarNoon} label='Middag' />
						<Moment moment={times()?.goldenHour} label='Begin gouden uur' />
						<Moment moment={times()?.sunsetStart} label='Begin zonsondergang' />
						<Moment moment={times()?.sunset} label='Einde zonsondergang' />
						<Moment moment={times()?.dusk} label='Schemering' />
						<Moment moment={times()?.nauticalDusk} label='Begin nautische avondschemering' />
						<Moment moment={times()?.night} label='Nacht' />
					</ul>
				</div>
			</Show>
		</>
	)
}

export default App
