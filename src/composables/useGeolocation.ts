const useGeolocation = () => {
	const getPosition = (options?: PositionOptions): Promise<GeolocationPosition> => {
		return new Promise((resolve: PositionCallback, reject: PositionErrorCallback) =>
			navigator.geolocation.getCurrentPosition(resolve, reject, options)
		)
	}

	const getCurrentPosition = async () => {
		if (navigator.geolocation) {
			try {
				const position = await getPosition()
				return position
			} catch (err) {
				return undefined
			}
		} else {
			return undefined
		}
	}

	return { getCurrentPosition }
}

export default useGeolocation
