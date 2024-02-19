import {useEffect} from "react"
import Typed from "typed.js";

export const useTypedTitle = (ref, inView, children) => {

	useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [
        children
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: false,
    });

    // Destroying
    return () => {
      typed.destroy();
    };
  }, [inView]);
}