import Detail from '../../components/Detail';
import Intro from '../../components/Intro';
import ProjectList from '../../components/ProjectList';
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

  const projectData = [
    {
      link: 'https://github.com/Flower-F/bullet-chat-everywhere',
      title: '处处弹幕',
      description:
        '处处弹幕是一款便捷式弹幕插件。可以嵌入网站使用，也可以作为浏览器插件使用，还可以选择根据源码的弹幕类进行拓展，打造属于自己的弹幕系统。',
    },
    {
      link: 'https://github.com/Flower-F/bullet-chat-everywhere',
      title: '处处弹幕',
      description:
        '处处弹幕是一款便捷式弹幕插件。可以嵌入网站使用，也可以作为浏览器插件使用，还可以选择根据源码的弹幕类进行拓展，打造属于自己的弹幕系统。',
    },
    {
      link: 'https://github.com/Flower-F/bullet-chat-everywhere',
      title: '处处弹幕',
      description:
        '处处弹幕是一款便捷式弹幕插件。可以嵌入网站使用，也可以作为浏览器插件使用，还可以选择根据源码的弹幕类进行拓展，打造属于自己的弹幕系统。',
    },
    {
      link: 'https://github.com/Flower-F/bullet-chat-everywhere',
      title: '处处弹幕',
      description:
        '处处弹幕是一款便捷式弹幕插件。可以嵌入网站使用，也可以作为浏览器插件使用，还可以选择根据源码的弹幕类进行拓展，打造属于自己的弹幕系统。',
    },
    {
      link: 'https://github.com/Flower-F/bullet-chat-everywhere',
      title: '处处弹幕',
      description:
        '处处弹幕是一款便捷式弹幕插件。可以嵌入网站使用，也可以作为浏览器插件使用，还可以选择根据源码的弹幕类进行拓展，打造属于自己的弹幕系统。',
    },
  ];

  return (
    <div>
      <Intro />
      <TechStackList />
      <Detail {...contentData} />
      <Detail {...contentData1} />
      <ProjectList projects={projectData} />
    </div>
  );
};

export default Home;
