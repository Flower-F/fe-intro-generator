import React from 'react';
import { IProjectListSchema } from '../../common/types/schema';
import ProjectItem from './ProjectItem';
// import styles from './style.module.scss';

interface IProjectProps {
  schema: IProjectListSchema;
}

const ProjectList: React.FC<IProjectProps> = ({ schema }) => {
  const { children = [] } = schema;

  return (
    <section>
      <h3
        className="text-3xl font-bold text-center
      mb-4"
      >
        项目经历
      </h3>
      <ul>
        {children.map(({ attributes }, index) => (
          <ProjectItem key={index} {...attributes} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
