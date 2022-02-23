import { Component, createResource, Show } from 'solid-js'
import useSunCalc from './composables/useSunCalc'
import SunTimes from './components/sun/SunTimes'

const App: Component = () => {
	const sunCalc = useSunCalc()
	const [sunTimes] = createResource(() => sunCalc.getSunTimes())
	const [sunPosition] = createResource(() => sunCalc.getSunPosition())

	return (
		<>
			<h1>Zontijden</h1>
			<Show when={sunTimes()} fallback='Bezig met locatiebepaling en berekenen...'>
				<SunTimes sunTimes={sunTimes()!} />
			</Show>
		</>
	)
}

export default App
