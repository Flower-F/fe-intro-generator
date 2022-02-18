import Detail from '../../components/Detail';
import Intro from '../../components/Intro';
import TechStackList from '../../components/TechStackList';

const Home = () => {
  const contentData = {
    index: 2,
    description:
      '掌握 js 常见知识，包括 ES6+ 语法，如 Map、Set、Promise、async & await 等',
  };

  const contentData1 = {
    index: 1,
    description:
      '掌握 CSS 基本语法，以及常见的布局类型，如 flex 布局、gird 布局、瀑布流布局等，了解常见的响应式布局方法。',
  };

  return (
    <div>
      <Intro />
      <TechStackList />
      <Detail {...contentData} />
      <Detail {...contentData1} />
      <Detail {...contentData} />
      <Detail {...contentData1} />
      <Detail {...contentData} />
      <Detail {...contentData1} />
      <Detail {...contentData} />
      <Detail {...contentData1} />
    </div>
  );
};

export default Home;
