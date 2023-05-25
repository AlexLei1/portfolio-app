import { useInView } from "react-intersection-observer";
import {useEffect, useState} from 'react'

export const useCheckingScope = () => {

	const {ref, inView, entry} = useInView({
		threshold: 1,
		triggerOnce: true
	})
	

	return {ref, inView, entry}
}