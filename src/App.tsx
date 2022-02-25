import { Component, createMemo, createResource, Show } from 'solid-js'
import useSunCalc from './composables/useSunCalc'
import SunTimes from './components/sun/SunTimes'
import SunVisual from './components/sun/SunVisual'
import useSunTimesDurations from './composables/useSunTimesDurations'
import useFormatters from './composables/useFormatters'

const App: Component = () => {
	const sunCalc = useSunCalc()
	const [sunTimes] = createResource(() => sunCalc.getSunTimes())
	// const [sunPosition] = createResource(() => sunCalc.getSunPosition())

	const { toHourDuration } = useFormatters()

	const durations = createMemo(() => {
		if (sunTimes()) {
			return useSunTimesDurations(sunTimes()!)
		} else {
			return undefined
		}
	})

	return (
		<>
			<div class='w-full flex flex-col items-center min-h-screen p-4 bg-yellow-50'>
				<h1 class='text-4xl font-bold text-gray-600 mb-4'>Sun times</h1>
				<div class='flex-1 flex flex-col items-center justify-center'>
					<Show when={sunTimes()}>
						<div class='w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3'>
							<SunVisual sunTimes={sunTimes()!} />
						</div>
						{/* <div>
							<SunTimes sunTimes={sunTimes()!} />
						</div> */}
					</Show>
					<Show when={sunTimes() && durations()}>
						<div>Zonsopkomst: {toHourDuration(durations()!.sunRiseDuration)}</div>
						<div>Gouden uur ochtend: {toHourDuration(durations()!.goldenHourMorning)}</div>
						<div>Dag: {toHourDuration(durations()!.dayDuration)}</div>
						<div>Gouden uur avond: {toHourDuration(durations()!.goldenHourEvening)}</div>
						<div>Zonsondergang: {toHourDuration(durations()!.sunSetDuration)}</div>
					</Show>
				</div>
			</div>
		</>
	)
}

export default App
