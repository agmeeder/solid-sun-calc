import { Component, Show } from 'solid-js'
import useFormatters from '../../composables/useFormatters'

export interface MomentProps {
	moment?: Date
	label: string
	description?: string
}

const SunMoment: Component<MomentProps> = props => {
	const { toTime } = useFormatters()

	return (
		<>
			<li class='mb-6 ml-10 last:mb-4'>
				<div class='absolute -left-24 oldstyle-nums -mt-0.5'>{toTime(props.moment)}</div>
				<div class='absolute w-8 h-8 rounded-full bg-sky-600 text-yellow-200 -left-[18px] -mt-0.5 flex items-center justify-center'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						class=' h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
						/>
					</svg>
				</div>
				<h3 class='mt-0.5 pt-0.5 leading-tight'>{props.label}</h3>
				<Show when={props.description}>
					<p class='italic text-xs leading-none mt-1'>{props.description}</p>
				</Show>
			</li>
		</>
	)
}

export default SunMoment
