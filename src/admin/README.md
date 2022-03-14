# 后台界面

目前 AreaItem 组件中还存在 3 处地方的类型问题还未解决，需要补充相关的知识：

```ts
const handleSelectorChange = (value: any) => {
  setTempPageChild({
    name: value,
    attributes: {},
    children: [],
  });
};

const changeTempPageChildAttributes = (obj: { [x: string]: any }) => {
  const newTempChild = { ...tempPageChild };
  for (const key in obj) {
    // @ts-ignore
    newTempChild.attributes[key] = obj[key];
  }
  setTempPageChild(newTempChild);
};

const changeChildrenItem = (index: number, key: string, value: string) => {
  const originItem = children[index];
  const item = { ...(originItem as IFooterItem) };
  // @ts-ignore
  item.attributes[key] = value;
  const newChildren = [...children];
  newChildren.splice(index, 1, item);
  changeChildren(newChildren);
};
```
