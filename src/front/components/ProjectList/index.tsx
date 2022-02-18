import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Slider from 'react-slick';
import { sliderSettings } from '../../../common/data/ProjectListData';

import styles from './style.module.scss';

interface IProject {
  link: string;
  title: string;
  description: string;
}

interface IProjectProps {
  projects: IProject[];
}

const ProjectList: React.FC<IProjectProps> = ({ projects }) => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  return (
    <section className="wrapper">
      <div className={styles.projectList}>
        <div className={styles.row}>
          <div className={styles.header}>项目经历</div>
          <div className={styles.buttons}>
            <IconContext.Provider value={{ size: '3rem', color: '#6ab0fe' }}>
              <FaArrowCircleLeft
                className={styles.change}
                onClick={sliderRef?.slickPrev}
              />
              <FaArrowCircleRight
                className={styles.change}
                onClick={sliderRef?.slickNext}
              />
            </IconContext.Provider>
          </div>
        </div>

        <Slider
          {...sliderSettings}
          ref={setSliderRef}
          className={styles.slider}
        >
          {projects.map((item, index) => (
            <div key={index} className={styles.imgWrapper}>
              <a
                href={item.link}
                className={styles.title}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
                <AiOutlineLink />
              </a>
              <div className={styles.description}>说明：{item.description}</div>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectList;
