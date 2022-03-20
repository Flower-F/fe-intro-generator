import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { techStackListData } from '../../common/data/TechStackListData';
import { ITechStackListSchema } from '../../common/types/schema';

interface ITechStackListProps {
  schema: ITechStackListSchema;
}

const TechStackList: React.FC<ITechStackListProps> = ({ schema }) => {
  const { attributes } = schema;
  const { occupied = [] } = attributes;

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
    <section ref={ref}>
      <h3
        className="text-black font-bold
      text-4xl mb-6 text-center"
      >
        我的技术栈
      </h3>
      <motion.div
        className="grid gap-8"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))' }}
        initial={initial}
        transition={{ delay: 0.1, duration: 0.6 }}
        animate={animation}
      >
        {techStackListData.map((item, index) =>
          occupied[index] ? (
            <div
              className="h-[20rem] rounded-lg shadow-normal
              overflow-hidden relative flex justify-center items-center"
              style={{
                border: `1px solid ${item.color}`,
                color: item.color,
              }}
              key={index}
            >
              <div className="flex flex-col items-center">
                <div className="text-[6rem] mb-4">{item.icon}</div>
                <div className="text-3xl transition">{item.title}</div>
              </div>
            </div>
          ) : null,
        )}
      </motion.div>
    </section>
  );
};

export default TechStackList;
