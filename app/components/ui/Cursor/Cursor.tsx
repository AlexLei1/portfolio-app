import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useTypedSelector } from '@/hooks/useTypedSelector';

const Cursor: FC = () => {

	const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

	const {cursorVariant} = useTypedSelector(state => state.cursor)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

	const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
    },

		link: {
			height: 150,
			width: 150,
			x: mousePosition.x - 70,
			y: mousePosition.y - 70,
			backgroundColor: "white",
			mixBlendMode: "difference"
		}
 	};
	console.log(cursorVariant)
	return (
	 	<motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}>
		</motion.div>
	)
}

export default Cursor