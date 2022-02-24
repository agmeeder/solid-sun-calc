import { Component, createResource, Show } from 'solid-js'
import useSunCalc from './composables/useSunCalc'
import SunTimes from './components/sun/SunTimes'
import SunVisual from './components/sun/SunVisual'

const App: Component = () => {
	const sunCalc = useSunCalc()
	const [sunTimes] = createResource(() => sunCalc.getSunTimes())
	// const [sunPosition] = createResource(() => sunCalc.getSunPosition())

	return (
		<>
			<div class='w-full flex flex-col min-h-screen p-4 bg-yellow-50'>
				<h1 class='text-2xl'>Zontijden</h1>
				<div class='flex-1 flex flex-col items-center justify-center'>
					<Show when={sunTimes()}>
						<div class='w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-1/3'>
							<SunVisual sunTimes={sunTimes()!} />
						</div>
						<div>
							<SunTimes sunTimes={sunTimes()!} />
						</div>
					</Show>
				</div>
			</div>
		</>
	)
}

export default App
