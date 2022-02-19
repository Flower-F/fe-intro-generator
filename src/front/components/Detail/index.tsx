import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStackListData } from '../../../common/data/TechStackListData';

import styles from './style.module.scss';
import { IDetailSchema } from '../../../common/types/schema';

interface IDetailProps {
  schema: IDetailSchema;
}

const Detail: React.FC<IDetailProps> = ({ schema }) => {
  const { attributes = { index: 0, description: '', reverse: false } } = schema;
  const { index, description, reverse } = attributes;

  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animation]);

  return (
    <section
      ref={ref}
      className={`wrapper ${styles.wrapper} ${
        reverse ? `${styles.inverse}` : `${styles.reverse}`
      }`}
    >
      {
        <motion.div
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
          className={styles.img}
        >
          <div
            className={styles.icon}
            style={{
              color: techStackListData[index].color,
            }}
          >
            {techStackListData[index].icon}
          </div>
        </motion.div>
      }
      {
        <motion.div
          className={styles.content}
          initial={initial}
          transition={{ delay: 0.3, duration: 0.6 }}
          animate={animation}
        >
          <div className={styles.title}>{techStackListData[index].title}</div>
          <div className={styles.description}>{description}</div>
        </motion.div>
      }
    </section>
  );
};

export default Detail;
