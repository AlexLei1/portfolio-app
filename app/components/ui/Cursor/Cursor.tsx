import { FC, useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Cursor: FC = () => {

	const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

	const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
    },
 	};

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

	return (
	 	<motion.div
        className="cursor"
        variants={variants}
        animate='default'>
		</motion.div>
	)
}

export default Cursor