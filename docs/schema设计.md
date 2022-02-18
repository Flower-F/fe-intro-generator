# Schema 设计

所有关于 schema 的设计都会放在本文档。

```js
{
  name: 'Page',
  attributes: {
    title: '',
  },
  list: [
    {
      name: 'Intro',
      attributes: {
        showLogo: '', // true or false
        logoUrl: '',
        title: '',
        description: '',
        backgroundUrl: '',
        backgroundHeight: '',
      },
      list: []
    },
    {
      name: 'TechStackList',
      attributes: {
        title: '',
      },
      list: [
        {
          name: 'TechStackItem',
          attributes: {
            chosen: '', // true or false
          },
          list: []
        }
      ]
    },
    {
      name: 'Detail',
      attributes: {
        index: '',
        description: '',
      },
      list: []
    },
    {
      name: 'Project',
      attributes: {
        title: '',
      },
      list: [
        {
          name: 'CarouselItem',
          attributes: {
            title: '',
            description: '',
            imgUrl: ''
          },
          list: []
        }
      ]
    },
    {
      name: 'Footer',
      attributes: {
        description: ''
      },
      list: [
        {
          name: 'FooterLink',
          attributes: {
            title: '',
            kind: '', //比如说 github 这种
          },
          list: []
        }
      ]
    }
  ],
}
```
