export default {
  components: [
    {
      name: {
        zh_CN: '走马灯子项'
      },
      component: 'TinyCarouselItem',
      icon: 'carouselitem',
      description: '常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'CarouselItem',
        version: '',
        destructuring: true
      },
      group: 'component',
      category: '容器组件',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'name',
                label: {
                  text: {
                    zh_CN: '幻灯片的名字，可用作 setActiveItem 的参数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'title',
                label: {
                  text: {
                    zh_CN: '幻灯片的标题'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'indicator-position',
                label: {
                  text: {
                    zh_CN: '指示器的位置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'outside',
                        value: 'outside'
                      },
                      {
                        label: 'none',
                        value: 'none'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          }
        ],
        events: {}
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'size']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      name: {
        zh_CN: '走马灯'
      },
      component: 'TinyCarousel',
      icon: 'carousel',
      description: '常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Carousel',
        version: '',
        destructuring: true
      },
      group: 'component',
      category: '容器组件',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'arrow',
                label: {
                  text: {
                    zh_CN: '切换箭头的显示时机'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {
                    options: [
                      {
                        label: '总是显示',
                        value: 'always'
                      },
                      {
                        label: '鼠标悬停时显示',
                        value: 'hover'
                      },
                      {
                        label: '从不显示',
                        value: 'never'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'autoplay',
                label: {
                  text: {
                    zh_CN: '是否自动切换'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'tabs',
                label: {
                  text: {
                    zh_CN: '选项卡'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                defaultValue: '',
                cols: 12,
                bindState: false,
                widget: {
                  component: 'MetaContainer',
                  props: {}
                },
                description: {
                  zh_CN: 'tabs'
                },
                labelPosition: 'none'
              },
              {
                property: 'height',
                label: {
                  text: {
                    zh_CN: '走马灯的高度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'indicator-position',
                label: {
                  text: {
                    zh_CN: '指示器的位置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {
                    options: [
                      {
                        label: '走马灯外部',
                        value: 'outside'
                      },
                      {
                        label: '不显示',
                        value: 'none'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'initial-index',
                label: {
                  text: {
                    zh_CN: '初始状态激活的幻灯片的索引，从 0 开始 '
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'interval',
                label: {
                  text: {
                    zh_CN: '自动切换的时间间隔，单位为毫秒'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'loop',
                label: {
                  text: {
                    zh_CN: '是否循环显示'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'show-title',
                label: {
                  text: {
                    zh_CN: '是否显示标题'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'trigger',
                label: {
                  text: {
                    zh_CN: '指示器的触发方式，默认为 hover'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {
                    options: [
                      {
                        label: '点击',
                        value: 'click'
                      },
                      {
                        label: '悬停',
                        value: 'hover'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'type',
                label: {
                  text: {
                    zh_CN: '走马灯的类型'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {
                    options: [
                      {
                        label: '水平',
                        value: 'horizontal'
                      },
                      {
                        label: '垂直',
                        value: 'vertical'
                      },
                      {
                        label: '卡片',
                        value: 'card'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          }
        ],
        events: {}
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        clickCapture: false,
        isModal: false,
        nestingRule: {
          childWhitelist: ['TinyCarouselItem'],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'size']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'link',
      name: {
        zh_CN: '提示框'
      },
      component: 'a',
      description: '链接',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      group: 'component',
      priority: 7,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'children',
                label: {
                  text: {
                    zh_CN: '类型'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlText',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              },
              {
                property: 'href',
                label: {
                  text: {
                    zh_CN: '跳转链接'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '链接'
                }
              },
              {
                property: 'target',
                label: {
                  text: {
                    zh_CN: '页面目标'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: '当前页面',
                        value: '_self'
                      },
                      {
                        label: '打开新页面',
                        value: '_blank'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '链接'
                }
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ]
      },
      configure: {
        loop: true,
        condition: true,
        slots: [],
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: []
        },
        contextMenu: {
          actions: [],
          disable: []
        }
      }
    },
    {
      name: {
        zh_CN: '标题'
      },
      component: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      icon: 'h16',
      description: '标题',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 20,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'children',
                label: {
                  text: {
                    zh_CN: '类型'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlText',
                  props: {
                    showRadioButton: true
                  }
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {}
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'size']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      name: {
        zh_CN: '段落'
      },
      component: 'p',
      icon: 'paragraph',
      description: '段落',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 30,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'children',
                label: {
                  text: {
                    zh_CN: '类型'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlText',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {}
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: []
        },
        contextMenu: {
          actions: [],
          disable: []
        }
      }
    },
    {
      name: {
        zh_CN: '输入框'
      },
      component: 'input',
      icon: 'input',
      description: '输入框',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 40,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'type',
                label: {
                  text: {
                    zh_CN: '类型'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'checkbox',
                        value: 'checkbox'
                      },
                      {
                        label: 'color',
                        value: 'color'
                      },
                      {
                        label: 'date',
                        value: 'date'
                      },
                      {
                        label: 'button',
                        value: 'button'
                      },
                      {
                        label: 'email',
                        value: 'email'
                      },
                      {
                        label: 'file',
                        value: 'file'
                      },
                      {
                        label: 'hidden',
                        value: 'hidden'
                      },
                      {
                        label: 'image',
                        value: 'image'
                      },
                      {
                        label: 'month',
                        value: 'month'
                      },
                      {
                        label: 'number',
                        value: 'number'
                      },
                      {
                        label: 'password',
                        value: 'password'
                      },
                      {
                        label: 'radio',
                        value: 'radio'
                      },
                      {
                        label: 'range',
                        value: 'range'
                      },
                      {
                        label: 'reset',
                        value: 'reset'
                      },
                      {
                        label: 'search',
                        value: 'search'
                      },
                      {
                        label: 'submit',
                        value: 'submit'
                      },
                      {
                        label: 'text',
                        value: 'text'
                      },
                      {
                        label: 'time',
                        value: 'time'
                      },
                      {
                        label: 'week',
                        value: 'week'
                      },
                      {
                        label: 'url',
                        value: 'url'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'placeholder',
                label: {
                  text: {
                    zh_CN: '占位符'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {
          onBlur: {
            label: {
              zh_CN: '失去焦点时触发'
            },
            description: {
              zh_CN: '在 Input 失去焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onFocus: {
            label: {
              zh_CN: '获取焦点时触发'
            },
            description: {
              zh_CN: '在 Input 获取焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onChange: {
            label: {
              zh_CN: '输入值改变时触发'
            },
            description: {
              zh_CN: '在 Input 输入值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'size']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      name: {
        zh_CN: '视频'
      },
      component: 'video',
      icon: 'video',
      description: '视频',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 50,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 10,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'src',
                label: {
                  text: {
                    zh_CN: '视频的 URL'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'width',
                label: {
                  text: {
                    zh_CN: '视频播放器的宽度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'height',
                label: {
                  text: {
                    zh_CN: '视频播放器的高度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'controls',
                label: {
                  text: {
                    zh_CN: '是否显示控件'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'autoplay',
                label: {
                  text: {
                    zh_CN: '是否马上播放'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {}
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: []
        },
        contextMenu: {
          actions: [],
          disable: []
        }
      }
    },
    {
      icon: 'Image',
      name: {
        zh_CN: 'Img'
      },
      component: 'Img',
      container: false,
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 60,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'src',
                type: 'string',
                defaultValue: '',
                bindState: true,
                label: {
                  text: {
                    zh_CN: 'src路径'
                  }
                },
                cols: 12,
                rules: [],
                widget: {
                  component: 'MetaInput',
                  props: {}
                }
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {},
        shortcuts: {
          properties: ['src']
        },
        contentMenu: {
          actions: []
        }
      }
    },
    {
      icon: 'button',
      name: {
        zh_CN: 'Button'
      },
      component: 'button',
      container: false,
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 70,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {
          onClick: {
            label: {
              zh_CN: '点击时触发'
            },
            description: {
              zh_CN: '点击时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        },
        shortcuts: {
          properties: []
        },
        contentMenu: {
          actions: []
        }
      }
    },
    {
      icon: 'table',
      name: {
        zh_CN: '表格'
      },
      component: 'table',
      container: false,
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 80,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'width',
                label: {
                  text: {
                    zh_CN: '表格的宽度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'border',
                label: {
                  text: {
                    zh_CN: '表格边框的宽度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {
          onClick: {
            label: {
              zh_CN: '点击时触发'
            },
            description: {
              zh_CN: '点击时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        },
        shortcuts: {
          properties: []
        },
        contentMenu: {
          actions: []
        }
      }
    },
    {
      icon: 'td',
      name: {
        zh_CN: '表格单元格'
      },
      component: 'td',
      container: false,
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 90,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'colspan',
                label: {
                  text: {
                    zh_CN: '单元格可横跨的列数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'rowspan',
                label: {
                  text: {
                    zh_CN: '单元格可横跨的行数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'attributes3',
                label: {
                  text: {
                    zh_CN: '原生属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaHtmlAttributes',
                  props: {}
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'none'
              }
            ]
          }
        ],
        events: {
          onClick: {
            label: {
              zh_CN: '点击时触发'
            },
            description: {
              zh_CN: '点击时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        },
        shortcuts: {
          properties: []
        },
        contentMenu: {
          actions: []
        }
      }
    },
    {
      icon: 'form',
      name: {
        zh_CN: '表单'
      },
      component: 'form',
      container: false,
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 100,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'name',
                label: {
                  text: {
                    zh_CN: '表单的名称'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'action',
                label: {
                  text: {
                    zh_CN: '提交表单时向何处发送表单数据'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'method',
                label: {
                  text: {
                    zh_CN: '用于发送 form-data 的 HTTP 方法'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'get',
                        value: 'get'
                      },
                      {
                        label: 'post',
                        value: 'post'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          }
        ],
        events: {
          onClick: {
            label: {
              zh_CN: '点击时触发'
            },
            description: {
              zh_CN: '点击时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        },
        shortcuts: {
          properties: []
        },
        contentMenu: {
          actions: []
        }
      }
    },
    {
      icon: 'label',
      name: {
        zh_CN: '表单标签'
      },
      component: 'label',
      container: false,
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {},
      group: 'component',
      category: 'html',
      priority: 110,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'for',
                label: {
                  text: {
                    zh_CN: 'label 绑定到哪个表单元素'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'form',
                label: {
                  text: {
                    zh_CN: 'label 字段所属的一个或多个表单'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          }
        ],
        events: {},
        shortcuts: {
          properties: []
        },
        contentMenu: {
          actions: []
        }
      }
    },
    {
      name: {
        zh_CN: '按钮组'
      },
      component: 'TinyButtonGroup',
      icon: 'buttonGroup',
      description: '以按钮组的方式出现，常用于多项类似操作',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'ButtonGroup',
        version: '',
        destructuring: true
      },
      group: 'component',
      category: 'general',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'data',
                label: {
                  text: {
                    zh_CN: '按钮组数据'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'size',
                label: {
                  text: {
                    zh_CN: '组件大小'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'mini',
                        value: 'mini'
                      },
                      {
                        label: 'small',
                        value: 'small'
                      },
                      {
                        label: 'medium',
                        value: 'medium'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'plain',
                label: {
                  text: {
                    zh_CN: '是否是朴素按钮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          }
        ],
        events: {}
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'size']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'row',
      name: {
        zh_CN: 'row'
      },
      component: 'TinyRow',
      description: '定义 Layout 的行配置信息',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Row',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 5,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'layout',
                label: {
                  text: {
                    zh_CN: 'layout'
                  }
                },
                cols: 12,
                widget: {
                  component: 'MetaLayoutGrid',
                  props: {}
                },
                description: {
                  zh_CN: 'layout'
                },
                labelPosition: 'none'
              },
              {
                property: 'align',
                label: {
                  text: {
                    zh_CN: 'align'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'top',
                        value: 'top'
                      },
                      {
                        label: 'middle',
                        value: 'middle'
                      },
                      {
                        label: 'bottom',
                        value: 'bottom'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'flex',
                label: {
                  text: {
                    zh_CN: 'flex'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                }
              },
              {
                property: 'gutter',
                label: {
                  text: {
                    zh_CN: 'gutter'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          }
        ]
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['label-width', 'disabled']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'form',
      name: {
        zh_CN: '表单'
      },
      component: 'TinyForm',
      description: '由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Form',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 5,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '是否禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'label-width',
                label: {
                  text: {
                    zh_CN: '标签宽度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '表单中标签占位宽度，默认为 80px'
                },
                labelPosition: 'left'
              },
              {
                property: 'inline',
                label: {
                  text: {
                    zh_CN: '行内布局'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '行内布局模式，默认为 false'
                }
              },
              {
                property: 'label-align',
                label: {
                  text: {
                    zh_CN: '必填标识是否占位'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '必填标识 * 是否占位'
                },
                labelPosition: 'left'
              },
              {
                property: 'label-suffix',
                label: {
                  text: {
                    zh_CN: '标签后缀'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '表单中标签后缀'
                }
              },
              {
                property: 'label-position',
                label: {
                  text: {
                    zh_CN: '标签位置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'right',
                        value: 'right'
                      },
                      {
                        label: 'left ',
                        value: 'left '
                      },
                      {
                        label: 'top',
                        value: 'top'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '表单中标签的布局位置'
                }
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '校验属性'
            },
            content: [
              {
                property: 'model',
                label: {
                  text: {
                    zh_CN: '表单校验对象'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '表单数据对象'
                },
                labelPosition: 'left'
              },
              {
                property: 'rules',
                label: {
                  text: {
                    zh_CN: '校验规则'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '表单验证规则'
                }
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onValidate: {
            label: {
              zh_CN: '表单项被校验后触发'
            },
            description: {
              zh_CN: '表单项被校验后触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'function',
                  type: 'Function',
                  defaultValue: '(valid) => {}',
                  description: {
                    zh_CN: '校验回调函数'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onInput: {
            label: {
              zh_CN: '输入值改变时触发'
            },
            description: {
              zh_CN: '在 Input 输入值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '输入框输入的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onBlur: {
            label: {
              zh_CN: '失去焦点时触发'
            },
            description: {
              zh_CN: '在 Input 失去焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onFocus: {
            label: {
              zh_CN: '获取焦点时触发'
            },
            description: {
              zh_CN: '在 Input 获取焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onClear: {
            label: {
              zh_CN: '点击清空按钮时触发'
            },
            description: {
              zh_CN: '点击清空按钮时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: [],
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['label-width', 'disabled']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'formitem',
      name: {
        zh_CN: '表单项'
      },
      component: 'TinyFormItem',
      description: '由按钮、输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'FormItem',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 12,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'label',
                label: {
                  text: {
                    zh_CN: '标签文本'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                defaultValue: '标签',
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '标签文本'
                },
                labelPosition: 'left'
              },
              {
                property: 'prop',
                label: {
                  text: {
                    zh_CN: '校验字段'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的'
                }
              },
              {
                property: 'required',
                label: {
                  text: {
                    zh_CN: '必填'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否必填'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {},
        slots: {
          label: {
            label: {
              zh_CN: '字段名'
            },
            description: {
              zh_CN: '自定义显示字段名称'
            }
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: ['TinyForm'],
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['label', 'rules']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'col',
      name: {
        zh_CN: 'col'
      },
      component: 'TinyCol',
      description: '列配置信息',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Col',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'span',
                label: {
                  text: {
                    zh_CN: '栅格列格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: '整行',
                        value: 12
                      },
                      {
                        label: '6格',
                        value: 6
                      },
                      {
                        label: '4格',
                        value: 4
                      },
                      {
                        label: '3格',
                        value: 3
                      },
                      {
                        label: '1格',
                        value: 1
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '当一行分为12格时，一列可占位多少格'
                }
              },
              {
                property: 'move',
                label: {
                  text: {
                    zh_CN: '栅格左右移动格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    min: -12,
                    max: 12
                  }
                },
                description: {
                  zh_CN: '栅格左右移动格数（正数向右，负数向左）'
                }
              },
              {
                property: 'no',
                label: {
                  text: {
                    zh_CN: '排序编号'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    max: 12
                  }
                },
                description: {
                  zh_CN: '排序编号（row中启用order生效）'
                }
              },
              {
                property: 'offset',
                label: {
                  text: {
                    zh_CN: '间隔格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    min: 0,
                    max: 12
                  }
                },
                description: {
                  zh_CN: '栅格左侧的间隔格数'
                }
              },
              {
                property: 'xs',
                label: {
                  text: {
                    zh_CN: '超小屏格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    min: 1,
                    max: 12
                  }
                },
                description: {
                  zh_CN: '<768px 响应式栅格数'
                }
              },
              {
                property: 'sm',
                label: {
                  text: {
                    zh_CN: '小屏格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    min: 1,
                    max: 12
                  }
                },
                description: {
                  zh_CN: '≥768px 响应式栅格数'
                }
              },
              {
                property: 'md',
                label: {
                  text: {
                    zh_CN: '中屏格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    min: 1,
                    max: 12
                  }
                },
                description: {
                  zh_CN: '≥992px 响应式栅格数'
                }
              },
              {
                property: 'lg',
                label: {
                  text: {
                    zh_CN: '大屏格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    min: 1,
                    max: 12
                  }
                },
                description: {
                  zh_CN: '≥1200px 响应式栅格数'
                }
              },
              {
                property: 'xl',
                label: {
                  text: {
                    zh_CN: '超大屏格数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {
                    min: 1,
                    max: 12
                  }
                },
                description: {
                  zh_CN: '≥1920px 响应式栅格数'
                }
              }
            ]
          }
        ],
        events: {}
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['label', 'rules']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      name: {
        zh_CN: '按钮'
      },
      component: 'TinyButton',
      icon: 'button',
      description: '常用的操作按钮，提供包括默认按钮、图标按钮、图片按钮、下拉按钮等类型',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Button',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'text',
                type: 'string',
                defaultValue: '按钮文案',
                label: {
                  text: {
                    zh_CN: '按钮文字'
                  }
                },
                cols: 12,
                hidden: false,
                required: true,
                readOnly: false,
                disabled: false,
                widget: {
                  component: 'MetaBindI18n',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'size',
                type: 'select',
                label: {
                  text: {
                    zh_CN: '大小'
                  }
                },
                cols: 12,
                rules: [],
                hidden: false,
                required: true,
                readOnly: false,
                disabled: false,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'large',
                        value: 'large'
                      },
                      {
                        label: 'medium',
                        value: 'medium'
                      },
                      {
                        label: 'small',
                        value: 'small'
                      },
                      {
                        label: 'mini',
                        value: 'mini'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否被禁用'
                },
                labelPosition: 'left'
              },
              {
                property: 'type',
                label: {
                  text: {
                    zh_CN: '类型'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'primary',
                        value: 'primary'
                      },
                      {
                        label: 'success',
                        value: 'success'
                      },
                      {
                        label: 'info',
                        value: 'info'
                      },
                      {
                        label: 'warning',
                        value: 'warning'
                      },
                      {
                        label: 'danger',
                        value: 'danger'
                      },
                      {
                        label: 'text',
                        value: 'text'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '设置不同的主题样式'
                },
                labelPosition: 'left'
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '其他'
            },
            content: [
              {
                property: 'round',
                label: {
                  text: {
                    zh_CN: '圆角'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否圆角按钮'
                },
                labelPosition: 'left'
              },
              {
                property: 'plain',
                label: {
                  text: {
                    zh_CN: '朴素按钮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否为朴素按钮'
                },
                labelPosition: 'left'
              },
              {
                property: 'reset-time',
                label: {
                  text: {
                    zh_CN: '禁用时间'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '设置禁用时间，防止重复提交，单位毫秒'
                }
              },
              {
                property: 'circle',
                label: {
                  text: {
                    zh_CN: '圆角'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否圆形按钮'
                },
                labelPosition: 'left'
              },
              {
                property: 'autofocus',
                label: {
                  text: {
                    zh_CN: '聚焦'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否默认聚焦'
                },
                labelPosition: 'left'
              },
              {
                property: 'loading',
                label: {
                  text: {
                    zh_CN: '加载中'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否展示位加载中样式'
                },
                labelPosition: 'left'
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onClick: {
            label: {
              zh_CN: '点击事件'
            },
            description: {
              zh_CN: '按钮被点击时触发的回调函数'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['text', 'size']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      name: {
        zh_CN: '输入框'
      },
      component: 'TinyInput',
      icon: 'input',
      description: '通过鼠标或键盘输入字符',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Input',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 1,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaBindI18n',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定值'
                },
                labelPosition: 'left'
              },
              {
                property: 'type',
                label: {
                  text: {
                    zh_CN: '类型'
                  }
                },
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'textarea',
                        value: 'textarea'
                      },
                      {
                        label: 'text',
                        value: 'text'
                      },
                      {
                        label: 'password',
                        value: 'password'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '设置input框的type属性'
                }
              },
              {
                property: 'rows',
                label: {
                  text: {
                    zh_CN: '行数'
                  }
                },
                widget: {
                  component: 'MetaNumber'
                },
                description: {
                  zh_CN: "输入框行数，只对 type='textarea' 有效"
                }
              },
              {
                property: 'placeholder',
                label: {
                  text: {
                    zh_CN: '占位文本'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaBindI18n',
                  props: {}
                },
                description: {
                  zh_CN: '输入框占位文本'
                },
                labelPosition: 'left'
              },
              {
                property: 'clearable',
                label: {
                  text: {
                    zh_CN: '清除按钮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示清除按钮'
                },
                labelPosition: 'left'
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '是否禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'size',
                label: {
                  text: {
                    zh_CN: '尺寸'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'medium',
                        value: 'medium'
                      },
                      {
                        label: 'small',
                        value: 'small'
                      },
                      {
                        label: 'mini',
                        value: 'mini'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '输入框尺寸。该属性的可选值为 medium / small / mini'
                }
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '其他'
            },
            content: [
              {
                property: 'maxlength',
                label: {
                  text: {
                    zh_CN: '最大长度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '设置 input 框的maxLength'
                },
                labelPosition: 'left'
              },
              {
                property: 'autofocus',
                label: {
                  text: {
                    zh_CN: '聚焦'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '自动获取焦点'
                },
                labelPosition: 'left'
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '值改变时触发'
            },
            description: {
              zh_CN: '在 Input 值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '输入框改变后的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onInput: {
            label: {
              zh_CN: '输入值改变时触发'
            },
            description: {
              zh_CN: '在 Input 输入值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '输入框输入的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '在 Input 输入值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onBlur: {
            label: {
              zh_CN: '失去焦点时触发'
            },
            description: {
              zh_CN: '在 Input 失去焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onFocus: {
            label: {
              zh_CN: '获取焦点时触发'
            },
            description: {
              zh_CN: '在 Input 获取焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onClear: {
            label: {
              zh_CN: '点击清空按钮时触发'
            },
            description: {
              zh_CN: '点击清空按钮时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        },
        slots: {
          prefix: {
            label: {
              zh_CN: '前置内容'
            }
          },
          suffix: {
            label: {
              zh_CN: '后置内容'
            }
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['value', 'disabled']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'radio',
      name: {
        zh_CN: '单选'
      },
      component: 'TinyRadio',
      description: '用于配置不同场景的选项，在一组备选项中进行单选',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Radio',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 3,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'text',
                label: {
                  text: {
                    zh_CN: '文本'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'label',
                label: {
                  text: {
                    zh_CN: '单选框的值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定的当前选中值'
                }
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          },
          {
            label: {
              zh_CN: '其他'
            },
            description: {
              zh_CN: ''
            },
            content: [
              {
                property: 'border',
                label: {
                  text: {
                    zh_CN: '显示边框'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'size',
                label: {
                  text: {
                    zh_CN: '单选框的尺寸'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'name',
                label: {
                  text: {
                    zh_CN: '原生 name 属性'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '值变化事件'
            },
            description: {
              zh_CN: '绑定值变化时触发的事件'
            }
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '当前选中的值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的当前选中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['visible', 'width']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'select',
      name: {
        zh_CN: '下拉框'
      },
      component: 'TinySelect',
      description: 'Select 选择器是一种通过点击弹出下拉列表展示数据并进行选择的 UI 组件',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Select',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 8,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 10,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定的当前选中值'
                },
                labelPosition: 'left'
              },
              {
                property: 'placeholder',
                label: {
                  text: {
                    zh_CN: '占位文本'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '输入框占位文本'
                },
                labelPosition: 'left'
              },
              {
                property: 'clearable',
                label: {
                  text: {
                    zh_CN: '清除按钮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示清除按钮'
                },
                labelPosition: 'left'
              },
              {
                property: 'searchable',
                label: {
                  text: {
                    zh_CN: '下拉面板可搜索'
                  }
                },
                required: false,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '下拉面板是否可搜索'
                },
                labelPosition: 'left'
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '是否禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'options',
                label: {
                  text: {
                    zh_CN: '下拉数据'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {
                    language: 'json'
                  }
                },
                description: {
                  zh_CN: '配置 Select 下拉数据项'
                },
                labelPosition: 'left'
              },
              {
                property: 'multiple',
                label: {
                  text: {
                    zh_CN: '多选'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否允许输入框输入或选择多个项'
                },
                labelPosition: 'left'
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '其他'
            },
            content: [
              {
                property: 'multiple-limit',
                label: {
                  text: {
                    zh_CN: '最大可选值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '多选时用户最多可以选择的项目数，为 0 则不限制'
                },
                labelPosition: 'left'
              },
              {
                property: 'popper-class',
                label: {
                  text: {
                    zh_CN: '下拉框的类名'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '设置下拉框自定义的类名'
                },
                labelPosition: 'left'
              },
              {
                property: 'collapse-tags',
                label: {
                  text: {
                    zh_CN: '多选展示'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '多选时是否将选中值按文字的形式展示'
                },
                labelPosition: 'left'
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '值改变时触发'
            },
            description: {
              zh_CN: '在下拉框值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '下拉框选中项的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '当前选中的值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的当前选中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onBlur: {
            label: {
              zh_CN: '失去焦点时触发'
            },
            description: {
              zh_CN: '在 Input 失去焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onFocus: {
            label: {
              zh_CN: '获取焦点时触发'
            },
            description: {
              zh_CN: '在 Input 获取焦点时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onClear: {
            label: {
              zh_CN: '点击清空按钮时触发'
            },
            description: {
              zh_CN: '点击清空按钮时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          },
          onRemoveTag: {
            label: {
              zh_CN: '多选模式下移除tag时触发'
            },
            description: {
              zh_CN: '多选模式下移除tag时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '被移除Tag对应数据项的值字段'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        },
        onBeforeMount: "console.log('table on load'); this.options = source.data"
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['multiple', 'options']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'switch',
      name: {
        zh_CN: '开关'
      },
      component: 'TinySwitch',
      description: 'Switch 在两种状态间切换选择',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Switch',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 9,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否被禁用'
                },
                labelPosition: 'left'
              },
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '绑定默认值'
                }
              },
              {
                property: 'true-value',
                label: {
                  text: {
                    zh_CN: '打开时的值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '设置打开时的值(Boolean / String / Number)'
                },
                labelPosition: 'left'
              },
              {
                property: 'false-value',
                label: {
                  text: {
                    zh_CN: '关闭时的值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '设置关闭时的值(Boolean / String / Number)'
                },
                labelPosition: 'left'
              },
              {
                property: 'mini',
                label: {
                  text: {
                    zh_CN: '迷你尺寸'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示为 mini 模式'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '点击事件'
            },
            description: {
              zh_CN: '按钮被点击时触发的回调函数'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '开关的状态值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的开关状态值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'mini']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'search',
      name: {
        zh_CN: '搜索框'
      },
      component: 'TinySearch',
      description: '指定条件对象进行搜索数据',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Search',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '默认值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '输入框内的默认搜索值'
                },
                labelPosition: 'left'
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否被禁用'
                },
                labelPosition: 'left'
              },
              {
                property: 'placeholder',
                label: {
                  text: {
                    zh_CN: '占位文本 '
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '输入框内的提示占位文本'
                },
                labelPosition: 'left'
              },
              {
                property: 'clearable',
                label: {
                  text: {
                    zh_CN: '清空按钮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '设置显示清空图标按钮'
                },
                labelPosition: 'left'
              },
              {
                property: 'isEnterSearch',
                label: {
                  text: {
                    zh_CN: '是否Enter键触发search事件'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否在按下键盘Enter键的时候触发search事件'
                },
                labelPosition: 'left'
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '其他配置'
            },
            content: [
              {
                property: 'mini',
                label: {
                  text: {
                    zh_CN: '迷你尺寸'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '迷你模式，配置为true时，搜索默认显示为一个带图标的圆形按钮，点击后展开'
                },
                labelPosition: 'left'
              },
              {
                property: 'transparent',
                label: {
                  text: {
                    zh_CN: '透明模式'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '配置为true时，边框变为透明且收缩后半透明显示，一般用在带有背景的场景，默认 false'
                },
                labelPosition: 'left'
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '输入完成时触发'
            },
            description: {
              zh_CN: '在 input 框中输入完成时触发的回调函数'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'type',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '搜索类型,默认值为 {} '
                  }
                },
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前input框中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onSearch: {
            label: {
              zh_CN: '点击搜索按钮时触发'
            },
            description: {
              zh_CN: '展开状态点击搜索按钮时触发的回调函数'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'type',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '搜索类型,默认值为 {} '
                  }
                },
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前input框中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['clearable', 'mini']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'checkbox',
      name: {
        zh_CN: '复选框'
      },
      component: 'TinyCheckbox',
      description: '用于配置不同场景的选项，提供用户可在一组选项中进行多选',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Checkbox',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 4,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定值'
                },
                labelPosition: 'left'
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '是否禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'checked',
                label: {
                  text: {
                    zh_CN: '勾选'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '当前是否勾选'
                },
                labelPosition: 'left'
              },
              {
                property: 'text',
                label: {
                  text: {
                    zh_CN: '文本'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '复选框的文本'
                },
                labelPosition: 'left'
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '其他'
            },
            content: [
              {
                property: 'border',
                label: {
                  text: {
                    zh_CN: '边框'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示边框'
                }
              },
              {
                property: 'false-label',
                label: {
                  text: {
                    zh_CN: '未选中的值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '没有选中时的值'
                }
              },
              {
                property: 'true-label',
                label: {
                  text: {
                    zh_CN: '选择时的值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '选中时的值'
                }
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '勾选值改变后将触发'
            },
            description: {
              zh_CN: '勾选值改变后将触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '选中项的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '当前选中的值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的当前选中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['border', 'disabled']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'checkboxbutton',
      name: {
        zh_CN: '复选按钮'
      },
      component: 'TinyCheckboxButton',
      description: '用于配置不同场景的选项，提供用户可在一组选项中进行多选',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'CheckboxButton',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 1,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定的当前选中值'
                },
                labelPosition: 'left'
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '是否禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'checked',
                label: {
                  text: {
                    zh_CN: '勾选'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '当前是否勾选'
                },
                labelPosition: 'left'
              },
              {
                property: 'text',
                label: {
                  text: {
                    zh_CN: '文本'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '按钮文本'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '勾选值改变后将触发'
            },
            description: {
              zh_CN: '勾选值改变后将触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '选中项的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '当前选中的值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'array',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的当前选中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['text', 'size']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'checkboxgroup',
      name: {
        zh_CN: '复选按钮组'
      },
      component: 'TinyCheckboxGroup',
      description: '用于配置不同场景的选项，提供用户可在一组选项中进行多选',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'CheckboxGroup',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {
                    dataType: 'Array'
                  }
                },
                description: {
                  zh_CN: '双向绑定的当前选中值'
                },
                labelPosition: 'left'
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '是否禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'options',
                label: {
                  text: {
                    zh_CN: '数据列表'
                  }
                },
                defaultValue: [
                  {
                    label: '标签2'
                  },
                  {
                    label: '标签2'
                  }
                ],
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: 'checkbox组件列表'
                }
              },
              {
                property: 'type',
                label: {
                  text: {
                    zh_CN: '类型'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'button',
                        value: 'button'
                      },
                      {
                        label: 'checkbox',
                        value: 'checkbox'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: 'checkbox组件类型（button/checkbox），该属性的默认值为 checkbox,配合 options 属性一起使用'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '勾选值改变后将触发'
            },
            description: {
              zh_CN: '勾选值改变后将触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '选中项的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '当前选中的值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'array',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的当前选中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'type']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'dialogbox',
      name: {
        zh_CN: '对话框'
      },
      component: 'TinyDialogBox',
      description: '模态对话框，在浮层中显示，引导用户进行相关操作。',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'DialogBox',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 4,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'title',
                label: {
                  text: {
                    zh_CN: '标题'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '弹出框标题'
                },
                labelPosition: 'left'
              },
              {
                property: 'visible',
                label: {
                  text: {
                    zh_CN: '显示与隐藏'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '控制弹出框显示与关闭'
                },
                labelPosition: 'left'
              },
              {
                property: 'width',
                label: {
                  text: {
                    zh_CN: '宽度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '弹出框的宽度'
                },
                labelPosition: 'left'
              },
              {
                property: 'draggable',
                label: {
                  text: {
                    zh_CN: '可拖拽'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否开启弹窗的拖拽功能，默认值为 false 。'
                }
              },
              {
                property: 'center',
                label: {
                  text: {
                    zh_CN: '居中'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '弹出框的头部与底部内容会自动居中'
                },
                labelPosition: 'left'
              },
              {
                property: 'dialog-class',
                label: {
                  text: {
                    zh_CN: '自定义类'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '自定义配置弹窗类名'
                },
                labelPosition: 'left'
              },
              {
                property: 'append-to-body',
                label: {
                  text: {
                    zh_CN: '插入到 Body '
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: 'DialogBox 本身是否插入到 body 上，嵌套的 Dialog 必须指定该属性并赋值为 true'
                },
                labelPosition: 'left'
              },
              {
                property: 'show-close',
                label: {
                  text: {
                    zh_CN: '关闭按钮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示关闭按钮，默认值为 true 。'
                }
              }
            ]
          }
        ],
        selector: '.TinyDialogBox',
        events: {
          onClose: {
            label: {
              zh_CN: '关闭弹窗时触发'
            },
            description: {
              zh_CN: 'Dialog 关闭的回调'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:visible': {
            label: {
              zh_CN: '双向绑定的状态改变时触发'
            },
            description: {
              zh_CN: '显示或隐藏的状态值，发生改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'boolean',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的显示或隐藏的状态值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        },
        slots: {
          title: {
            label: {
              zh_CN: '标题区'
            },
            description: {
              zh_CN: 'Dialog 标题区的内容'
            }
          },
          footer: {
            label: {
              zh_CN: '按钮操作区'
            },
            description: {
              zh_CN: 'Dialog 按钮操作区的内容'
            }
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: true,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '.tiny-dialog-box',
        shortcuts: {
          properties: ['visible', 'width']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'tabs',
      name: {
        zh_CN: '标签页'
      },
      component: 'TinyTabs',
      description: '分隔内容上有关联但属于不同类别的数据集合',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Tabs',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 10,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'showEditIcon',
                label: {
                  text: {
                    zh_CN: '显示编辑ICON '
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示标题后编辑 ICON'
                },
                labelPosition: 'left'
              },
              {
                property: 'tabs',
                label: {
                  text: {
                    zh_CN: '选项卡'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                defaultValue: '',
                cols: 12,
                bindState: false,
                widget: {
                  component: 'MetaContainer',
                  props: {}
                },
                description: {
                  zh_CN: 'tabs'
                },
                labelPosition: 'none'
              },
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '绑定值，选中选项卡的 name'
                },
                labelPosition: 'left'
              },
              {
                property: 'with-add',
                label: {
                  text: {
                    zh_CN: '可新增'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '标签是否可增加'
                },
                labelPosition: 'left'
              },
              {
                property: 'with-close',
                label: {
                  text: {
                    zh_CN: '可关闭'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '标签是否可关闭'
                },
                labelPosition: 'left'
              },
              {
                property: 'tab-style',
                label: {
                  text: {
                    zh_CN: '标签页样式'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'card',
                        value: 'card'
                      },
                      {
                        label: 'border-card',
                        value: 'border-card'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '标签页样式'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          onClick: {
            label: {
              zh_CN: '点击页签时触发事件'
            },
            description: {
              zh_CN: '在 Input 值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'component',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前点击的页签对象'
                  }
                },
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '原生 event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onEdit: {
            label: {
              zh_CN: '点击新增按钮或关闭按钮或者编辑按钮后触发'
            },
            description: {
              zh_CN: '点击新增按钮或关闭按钮或者编辑按钮后触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'tab',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前操作的页签对象'
                  }
                },
                {
                  name: 'type',
                  type: 'String',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前操作的类型（remove || add || edit）'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onClose: {
            label: {
              zh_CN: '关闭页签时触发'
            },
            description: {
              zh_CN: '关闭页签时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'name',
                  type: 'String',
                  defaultValue: '',
                  description: {
                    zh_CN: '页签名称'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        clickCapture: false,
        isModal: false,
        nestingRule: {
          childWhitelist: ['TinyTabItem'],
          parentWhitelist: [],
          descendantBlacklist: [],
          ancestorWhitelist: []
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['size', 'tab-style']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'tabitem',
      name: {
        zh_CN: 'tab页签'
      },
      component: 'TinyTabItem',
      description: 'tab 标签页',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'TinyTabItem',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'name',
                label: {
                  text: {
                    zh_CN: '唯一表示'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '唯一表示'
                }
              },
              {
                property: 'title',
                label: {
                  text: {
                    zh_CN: '标题'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '标题'
                }
              }
            ]
          }
        ],
        events: {},
        slots: {
          title: {
            label: {
              zh_CN: '标题'
            },
            description: {
              zh_CN: '自定义标题'
            }
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: ['TinyTab'],
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['name', 'title']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'breadcrumb',
      name: {
        zh_CN: '面包屑'
      },
      component: 'TinyBreadcrumb',
      description: '告诉访问者他们目前在网站中的位置以及如何返回',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Select',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 1,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'separator',
                label: {
                  text: {
                    zh_CN: '分隔符'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '自定义分隔符'
                },
                labelPosition: 'left'
              },
              {
                property: 'options',
                label: {
                  text: {
                    zh_CN: 'options'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              },
              {
                property: 'textField',
                label: {
                  text: {
                    zh_CN: 'textField'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                }
              }
            ]
          }
        ],
        events: {
          onSelect: {
            label: {
              zh_CN: '选择 breadcrumb 时触发'
            },
            description: {
              zh_CN: '选择 breadcrumb 时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        clickCapture: false,
        isModal: false,
        nestingRule: {
          childWhitelist: ['TinyBreadcrumbItem'],
          parentWhitelist: [],
          descendantBlacklist: [],
          ancestorWhitelist: []
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['separator']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'breadcrumb',
      name: {
        zh_CN: '面包屑项'
      },
      component: 'TinyBreadcrumbItem',
      description: '',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'TinyBreadcrumbItem',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 1,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'to',
                label: {
                  text: {
                    zh_CN: '路由路径'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '面包屑项'
                }
              }
            ]
          }
        ],
        slots: {
          default: {
            label: {
              zh_CN: '面包屑项标签'
            },
            description: {
              zh_CN: '面包屑项'
            }
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: ['TinyBreadcrumb'],
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['to']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'collapse',
      name: {
        zh_CN: '折叠面板'
      },
      component: 'TinyCollapse',
      description: '内容区可指定动态页面或自定义 html 等，支持展开收起操作',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Collapse',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 3,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '当前激活的面板'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定当前激活的面板'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '激活面板改变时触发'
            },
            description: {
              zh_CN: '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'data',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前激活面板的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '当前激活面板的值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['label-width', 'disabled']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'collapseitem',
      name: {
        zh_CN: '折叠面板项'
      },
      component: 'TinyCollapseItem',
      description: '内容区可指定动态页面或自定义 html 等，支持展开收起操作',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'CollapseItem',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'name',
                label: {
                  text: {
                    zh_CN: '唯一标志符'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '唯一标志符;String | Number'
                },
                labelPosition: 'left'
              },
              {
                property: 'title',
                label: {
                  text: {
                    zh_CN: '面板标题'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '面板标题'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {},
        slots: {
          title: {
            label: {
              zh_CN: '标题'
            },
            description: {
              zh_CN: '自定义标题'
            }
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['label-width', 'disabled']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'grid',
      name: {
        zh_CN: '表格'
      },
      component: 'TinyGrid',
      description: '提供了非常强大数据表格功能，可以展示数据列表，可以对数据列表进行选择、编辑等',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Grid',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 2,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础属性'
            },
            description: {
              zh_CN: '基础属性'
            },
            collapse: {
              number: 15,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'data',
                label: {
                  text: {
                    zh_CN: '表格数据'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {
                    language: 'json'
                  }
                },
                onChange: "this.delProp('fetchData')",
                description: {
                  zh_CN: '设置表格的数据'
                }
              },
              {
                property: 'columns',
                label: {
                  text: {
                    zh_CN: '表格列'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                properties: [
                  {
                    label: {
                      zh_CN: '默认分组'
                    },
                    content: [
                      {
                        property: 'title',
                        type: 'string',
                        defaultValue: '',
                        label: {
                          text: {
                            zh_CN: '列标题'
                          }
                        },
                        widget: {
                          component: 'MetaBindI18n',
                          props: {}
                        }
                      },
                      {
                        property: 'field',
                        type: 'string',
                        defaultValue: '',
                        label: {
                          text: {
                            zh_CN: '列键值'
                          }
                        },
                        widget: {
                          component: 'MetaInput',
                          props: {}
                        }
                      },
                      {
                        property: 'sortable',
                        type: 'boolean',
                        defaultValue: true,
                        label: {
                          text: {
                            zh_CN: '是否排序'
                          }
                        },
                        widget: {
                          component: 'MetaSwitch',
                          props: {}
                        }
                      },
                      {
                        property: 'width',
                        type: 'string',
                        defaultValue: '',
                        label: {
                          text: {
                            zh_CN: '列宽'
                          }
                        },
                        widget: {
                          component: 'MetaNumber',
                          props: {}
                        }
                      },
                      {
                        property: 'formatText',
                        type: 'string',
                        defaultValue: '',
                        label: {
                          text: {
                            zh_CN: '内置渲染器'
                          }
                        },
                        widget: {
                          component: 'MetaSelect',
                          props: {
                            options: [
                              {
                                label: '整数',
                                value: 'integer'
                              },
                              {
                                label: '小数',
                                value: 'number'
                              },
                              {
                                label: '金额',
                                value: 'money'
                              },
                              {
                                label: '百分比',
                                value: 'rate'
                              },
                              {
                                label: '布尔',
                                value: 'boole'
                              },
                              {
                                label: '年月日',
                                value: 'date'
                              },
                              {
                                label: '年月日时分',
                                value: 'dateTime'
                              },
                              {
                                label: '时间',
                                value: 'time'
                              },
                              {
                                label: '省略',
                                value: 'ellipsis'
                              }
                            ]
                          }
                        }
                      },
                      {
                        property: 'renderer',
                        type: 'object',
                        defaultValue: '',
                        label: {
                          text: {
                            zh_CN: '渲染函数'
                          }
                        },
                        widget: {
                          component: 'MetaCodeEditor',
                          props: {
                            dataType: 'JSFunction'
                          }
                        }
                      },
                      {
                        property: 'slots',
                        type: 'object',
                        defaultValue: '',
                        label: {
                          text: {
                            zh_CN: '插槽'
                          }
                        },
                        labelPosition: 'none',
                        widget: {
                          component: 'MetaJsSlot',
                          props: {
                            slots: ['header', 'default']
                          }
                        }
                      },
                      {
                        property: 'type',
                        label: {
                          text: {
                            zh_CN: '列类型'
                          }
                        },
                        required: false,
                        readOnly: false,
                        disabled: false,
                        cols: 12,
                        widget: {
                          component: 'MetaSelect',
                          props: {
                            options: [
                              {
                                label: '索引列',
                                value: 'index'
                              },
                              {
                                label: '单选列',
                                value: 'radio'
                              },
                              {
                                label: '多选列',
                                value: 'selection'
                              },
                              {
                                label: '展开列',
                                value: 'expand'
                              }
                            ],
                            clearable: true
                          }
                        },
                        description: {
                          zh_CN:
                            '设置内置列的类型，该属性的可选值为 index（序号）/ selection（复选框）/ radio（单选框）/ expand（展开行）'
                        },
                        labelPosition: 'left'
                      },
                      {
                        property: 'editor',
                        label: {
                          text: {
                            zh_CN: '编辑配置'
                          }
                        },
                        required: true,
                        readOnly: false,
                        disabled: false,
                        cols: 12,
                        widget: {
                          component: 'MetaCodeEditor',
                          props: {
                            language: 'json'
                          }
                        },
                        description: {
                          zh_CN: '单元格编辑渲染配置项，也可以是函数 Function(h, params)'
                        },
                        labelPosition: 'left'
                      },
                      {
                        property: 'filter',
                        label: {
                          text: {
                            zh_CN: '筛选配置'
                          }
                        },
                        required: false,
                        readOnly: false,
                        disabled: false,
                        cols: 12,
                        widget: {
                          component: 'MetaCodeEditor',
                          props: {
                            language: 'json'
                          }
                        },
                        description: {
                          zh_CN: '设置表格列的筛选配置信息。默认值为 false 不配置筛选信息'
                        }
                      },
                      {
                        property: 'showOverflow',
                        label: {
                          text: {
                            zh_CN: '内容超出部分省略号配置'
                          }
                        },
                        required: true,
                        readOnly: false,
                        disabled: false,
                        cols: 12,
                        widget: {
                          component: 'MetaSelect',
                          props: {
                            options: [
                              {
                                label: '只显示省略号',
                                value: 'ellipsis'
                              },
                              {
                                label: '显示为原生 title',
                                value: 'title'
                              },
                              {
                                label: '显示为 tooltip 提示',
                                value: 'tooltip'
                              }
                            ],
                            clearable: true
                          }
                        },
                        description: {
                          zh_CN:
                            '设置内置列的内容超出部分显示省略号配置，该属性的可选值为 ellipsis（只显示省略号）/ title（显示为原生 title）/ tooltip（显示为 tooltip 提示）'
                        },
                        labelPosition: 'left'
                      }
                    ]
                  }
                ],
                widget: {
                  component: 'MetaArrayItem',
                  props: {
                    type: 'object',
                    textField: 'title',
                    language: 'json',
                    buttonText: '编辑列配置',
                    title: '编辑列配置',
                    expand: true
                  }
                },
                description: {
                  zh_CN: '表格列的配置信息'
                },
                labelPosition: 'left'
              },
              {
                property: 'fetchData',
                label: {
                  text: {
                    zh_CN: '服务端数据'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                onChange: "this.delProp('data')",
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {
                    name: 'fetchData',
                    dataType: 'JSExpression'
                  }
                },
                description: {
                  zh_CN: '服务端数据查询方法'
                }
              },
              {
                property: 'pager',
                label: {
                  text: {
                    zh_CN: '分页配置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                defaultValue: {
                  attrs: {
                    currentPage: 1
                  }
                },
                widget: {
                  component: 'MetaCodeEditor',
                  props: {
                    name: 'pager',
                    dataType: 'JSExpression'
                  }
                },
                description: {
                  zh_CN: '分页配置'
                }
              },
              {
                property: 'resizable',
                label: {
                  text: {
                    zh_CN: '调整列宽'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否允许调整列宽'
                },
                labelPosition: 'left'
              },
              {
                property: 'row-id',
                label: {
                  text: {
                    zh_CN: '行数据唯一标识的字段名'
                  }
                },
                required: false,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {
                    placeholder: '比如：id'
                  }
                },
                description: {
                  zh_CN: '行数据唯一标识的字段名'
                },
                labelPosition: 'left'
              },
              {
                property: 'select-config',
                label: {
                  text: {
                    zh_CN: '复选框配置'
                  }
                },
                required: false,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {
                    dataType: 'JSExpression'
                  }
                },
                description: {
                  zh_CN: '表格行数据复选框配置项'
                },
                labelPosition: 'left'
              },
              {
                property: 'edit-rules',
                label: {
                  text: {
                    zh_CN: '校验规则'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '表格校验规则配置项'
                },
                labelPosition: 'left'
              },
              {
                property: 'edit-config',
                label: {
                  text: {
                    zh_CN: '编辑配置项'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '表格编辑配置项'
                }
              },
              {
                property: 'expand-config',
                label: {
                  text: {
                    zh_CN: '复选框配置项'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '复选框配置项'
                },
                labelPosition: 'left'
              },
              {
                property: 'sortable',
                label: {
                  text: {
                    zh_CN: '可排序'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否允许列数据排序。默认为 true 可排序'
                },
                labelPosition: 'left'
              }
            ]
          },
          {
            label: {
              zh_CN: '其他属性'
            },
            description: {
              zh_CN: '其他属性'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'auto-resize',
                label: {
                  text: {
                    zh_CN: '可排序'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否允许列数据排序。默认为 true 可排序'
                },
                labelPosition: 'left'
              },
              {
                property: 'border',
                label: {
                  text: {
                    zh_CN: '边框'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否带有纵向边框'
                },
                labelPosition: 'left'
              },
              {
                property: 'seq-serial',
                label: {
                  text: {
                    zh_CN: '行号连续'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '设置行序号是否连续，开启分页时有效，该属性的默认值为 false'
                },
                labelPosition: 'left'
              },
              {
                property: 'highlight-current-row',
                label: {
                  text: {
                    zh_CN: '高亮当前行'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '高亮当前行'
                },
                labelPosition: 'left'
              },
              {
                property: 'highlight-hover-row',
                label: {
                  text: {
                    zh_CN: 'hover 时候高亮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '鼠标移到行是否要高亮显示'
                },
                labelPosition: 'left'
              },
              {
                property: 'row-class-name',
                label: {
                  text: {
                    zh_CN: 'hover 高亮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '给行附加 className，也可以是函数 Function({seq, row, rowIndex, $rowIndex})'
                },
                labelPosition: 'left'
              },
              {
                property: 'max-height',
                label: {
                  text: {
                    zh_CN: '最大高度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '设置表格内容区域（不含表格头部，底部）的最大高度。'
                },
                labelPosition: 'left'
              },
              {
                property: 'row-span',
                label: {
                  text: {
                    zh_CN: '行合并'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '设置行合并,该属性仅适用于普通表格，不可与 tree-config 同时使用'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          onFilterChange: {
            label: {
              zh_CN: '筛选条件改变时触发改事件'
            },
            description: {
              zh_CN:
                '配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'table',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '{$table,filters} 包含 table 实例对象和过滤条件的对象'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: 'function onClick(e) {}'
          },
          onSortChange: {
            label: {
              zh_CN: '点击列头，执行数据排序前触发的事件'
            },
            description: {
              zh_CN:
                '配置 remote-filter 开启服务端过滤，服务端过滤会调用表格 fetch-data 进行查询，filter-change 服务端过滤后触发的事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'table',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '{$table,filters} 包含 table 实例对象和过滤条件的对象'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: 'function onClick(e) {}'
          },
          onSelectAll: {
            label: {
              zh_CN: '当手动勾选全选时触发的事件'
            },
            description: {
              zh_CN: '只对 type=selection 有效，当手动勾选全选时触发的事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'table',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: ' 包含 table 实例对象'
                  }
                },
                {
                  name: 'checked',
                  type: 'boolean',
                  defaultValue: '',
                  description: {
                    zh_CN: '勾选状态'
                  }
                },
                {
                  name: 'selction',
                  type: 'Array',
                  defaultValue: '',
                  description: {
                    zh_CN: '选中的表格数据数组'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: 'function onClick(e) {}'
          },
          onSelectChange: {
            label: {
              zh_CN: '手动勾选并且值发生改变时触发的事件'
            },
            description: {
              zh_CN: '只对 type=selection 有效，当手动勾选并且值发生改变时触发的事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'table',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: ' table 实例对象'
                  }
                },
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: ' 原生 Event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: 'function onClick(e) {}'
          },
          onToggleExpandChange: {
            label: {
              zh_CN: '当行展开或收起时会触发该事件'
            },
            description: {
              zh_CN: '当行展开或收起时会触发该事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'table',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '{$table,row,rowIndex} 包含 table 实例对象和当前行数据的对象'
                  }
                },
                {
                  name: 'event',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: ' 原生 Event'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: 'function onClick(e) {}'
          },
          onCurrentChange: {
            label: {
              zh_CN: '行点击时触发'
            },
            description: {
              zh_CN: '行点击时触发'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          }
        },
        shortcuts: {
          properties: ['sortable', 'columns']
        },
        contentMenu: {
          actions: ['create symbol']
        },
        onBeforeMount:
          "console.log('table on load'); this.pager = source.pager; this.fetchData = source.fetchData; this.data = source.data ;this.columns = source.columns"
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['sortable', 'columns']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      name: {
        zh_CN: '分页'
      },
      component: 'TinyPager',
      icon: 'pager',
      description: '当数据量过多时，使用分页分解数据，常用于 Grid 和 Repeater 组件',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Pager',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 1,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 10,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'currentPage',
                label: {
                  text: {
                    zh_CN: '当前页数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '当前页数，支持 .sync 修饰符'
                },
                labelPosition: 'left'
              },
              {
                property: 'pageSize',
                label: {
                  text: {
                    zh_CN: '每页条数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '每页显示条目个数'
                },
                labelPosition: 'left'
              },
              {
                property: 'pageSizes',
                label: {
                  text: {
                    zh_CN: '可选每页条数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '设置可选择的每页显示条数'
                }
              },
              {
                property: 'total',
                label: {
                  text: {
                    zh_CN: '总条数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '数据总条数'
                },
                labelPosition: 'left'
              },
              {
                property: 'layout',
                label: {
                  text: {
                    zh_CN: '布局'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                defaultValue: 'total,sizes,prev, pager, next',
                widget: {
                  component: 'MetaInput',
                  props: {
                    type: 'textarea'
                  }
                },
                description: {
                  zh_CN: '组件布局，子组件名用逗号分隔'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          'onCurrentChange ': {
            label: {
              zh_CN: '切换页码时触发'
            },
            description: {
              zh_CN: '切换页码时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前页的值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onPrevClick ': {
            label: {
              zh_CN: '点击上一页按钮时触发'
            },
            description: {
              zh_CN: '点击上一页按钮时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'page',
                  type: 'String',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前页的页码值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onNextClick: {
            label: {
              zh_CN: '点击下一页按钮时触发'
            },
            description: {
              zh_CN: '点击上一页按钮时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'page',
                  type: 'String',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前页的页码值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['currentPage', 'total']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      name: {
        zh_CN: '弹出编辑'
      },
      component: 'TinyPopeditor',
      icon: 'popEditor',
      description: '该组件只能在弹出的面板中选择数据，不能手动输入数据；弹出面板中显示为 Tree 组件或者 Grid 组件',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'PopEditor',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 6,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定值'
                },
                labelPosition: 'left'
              },
              {
                property: 'placeholder',
                label: {
                  text: {
                    zh_CN: '占位文本'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '输入框占位文本'
                },
                labelPosition: 'left'
              },
              {
                property: 'show-clear-btn',
                label: {
                  text: {
                    zh_CN: '清除按钮'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示清除按钮'
                },
                labelPosition: 'left'
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '是否禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: ''
                }
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '其他'
            },
            content: [
              {
                property: 'width',
                label: {
                  text: {
                    zh_CN: '宽度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '设置弹出面板的宽度（单位像素）'
                },
                labelPosition: 'left'
              },
              {
                property: 'conditions',
                label: {
                  text: {
                    zh_CN: '过滤条件'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '当弹出面板配置的是表格时，设置弹出面板中的过滤条件'
                },
                labelPosition: 'left'
              },
              {
                property: 'grid-op',
                label: {
                  text: {
                    zh_CN: '表格配置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '设置弹出面板中表格组件的配置信息'
                },
                labelPosition: 'left'
              },
              {
                property: 'pager-op',
                label: {
                  text: {
                    zh_CN: '分页配置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '设置弹出编辑框中分页配置'
                },
                labelPosition: 'left'
              },
              {
                property: 'multi',
                label: {
                  text: {
                    zh_CN: '多选'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '设置弹出面板中的数据是否可多选'
                },
                labelPosition: 'left'
              },
              {
                property: 'show-pager',
                label: {
                  text: {
                    zh_CN: '启用分页'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '当 popseletor 为 grid 时才能生效，配置为 true 后还需配置 pagerOp 属性'
                }
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onChange: {
            label: {
              zh_CN: '选中值改变时触发'
            },
            description: {
              zh_CN: '在 Input 值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前选中项的值'
                  }
                },
                {
                  name: 'value',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前选中对象'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '当前选中的值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的当前选中值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onClose: {
            label: {
              zh_CN: '弹框关闭时触发的事件'
            },
            description: {
              zh_CN: '弹框关闭时触发的事件'
            },
            type: 'event',
            functionInfo: {
              params: [],
              returns: {}
            },
            defaultValue: ''
          },
          onPageChange: {
            label: {
              zh_CN: '分页切换事件'
            },
            description: {
              zh_CN: '表格模式下分页切换事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'String',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前页码数'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['modelValue', 'disabled']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'tree',
      name: {
        zh_CN: '树'
      },
      component: 'TinyTree',
      description:
        '可进行展示有父子层级的数据，支持选择，异步加载等功能。但不推荐用它来展示菜单，展示菜单推荐使用树菜单',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Tree',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 12,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'show-checkbox',
                label: {
                  text: {
                    zh_CN: '多选'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '设置接口是否可以多选'
                },
                labelPosition: 'left'
              },
              {
                property: 'data',
                label: {
                  text: {
                    zh_CN: '数据源'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                defaultValue: [
                  {
                    label: '一级 1',
                    children: [
                      {
                        label: '二级 1-1'
                      }
                    ]
                  }
                ],
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '可配置静态数据源和动态数据源'
                }
              },
              {
                property: 'node-key',
                label: {
                  text: {
                    zh_CN: '唯一标识'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '节点唯一标识属性名称'
                },
                labelPosition: 'left'
              },
              {
                property: 'icon-trigger-click-node',
                label: {
                  text: {
                    zh_CN: '触发NodeClick 事件'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '点击图标展开节点时是否触发 node-click 事件'
                },
                labelPosition: 'left'
              },
              {
                property: 'expand-icon',
                label: {
                  text: {
                    zh_CN: '展开图标'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '节点展开图标'
                },
                labelPosition: 'left'
              },
              {
                property: 'shrink-icon',
                label: {
                  text: {
                    zh_CN: '收缩图标'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '节点收缩的图标'
                },
                labelPosition: 'left'
              }
            ]
          },
          {
            name: '1',
            label: {
              zh_CN: '其他'
            },
            content: [
              {
                property: 'check-on-click-node',
                label: {
                  text: {
                    zh_CN: '点击节点选中'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点'
                },
                labelPosition: 'left'
              },
              {
                property: 'filter-node-method',
                label: {
                  text: {
                    zh_CN: '筛选函数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '节点筛选函数'
                },
                labelPosition: 'left'
              }
            ],
            description: {
              zh_CN: ''
            }
          }
        ],
        events: {
          onCheck: {
            label: {
              zh_CN: '勾选节点后的事件'
            },
            description: {
              zh_CN: '勾选节点后的事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'data',
                  type: 'object',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前选中节点信息'
                  }
                },
                {
                  name: 'currentNode',
                  type: 'object',
                  defaultValue: '',
                  description: {
                    zh_CN:
                      '树组件目前的选中状态信息，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          },
          onNodeClick: {
            label: {
              zh_CN: '点击节点后的事件'
            },
            description: {
              zh_CN: '点击节点后的事件'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'data',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前选中节点信息'
                  }
                },
                {
                  name: 'node',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN:
                      '树组件目前的选中状态信息，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性'
                  }
                },
                {
                  name: 'vm',
                  type: 'Object',
                  defaultValue: '',
                  description: {
                    zh_CN: '树组件实例'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['data', 'show-checkbox']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'timeline',
      name: {
        zh_CN: '时间线'
      },
      component: 'TinyTimeLine',
      description: 'TimeLine 时间线',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'TimeLine',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 3,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'horizontal',
                type: 'Boolean',
                defaultValue: {
                  type: 'i18n',
                  zh_CN: '布局',
                  en_US: 'layout',
                  key: ''
                },
                label: {
                  text: {
                    zh_CN: '水平布局'
                  }
                },
                cols: 12,
                rules: [],
                hidden: false,
                required: true,
                readOnly: false,
                disabled: false,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '节点和文字横向布局'
                }
              },
              {
                property: 'vertical',
                type: 'Boolean',
                defaultValue: {
                  type: 'i18n',
                  zh_CN: '垂直布局',
                  en_US: 'layout',
                  key: ''
                },
                label: {
                  text: {
                    zh_CN: '垂直布局'
                  }
                },
                cols: 12,
                rules: [],
                hidden: false,
                required: true,
                readOnly: false,
                disabled: false,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '节点和文字垂直布局'
                }
              },
              {
                property: 'active',
                label: {
                  text: {
                    zh_CN: '选中值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '步骤条的选中步骤值'
                },
                labelPosition: 'left'
              },
              {
                property: 'data',
                label: {
                  text: {
                    zh_CN: '数据'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                defaultValue: [
                  {
                    name: '配置基本信息',
                    status: 'ready'
                  },
                  {
                    name: '配置报价',
                    status: 'wait'
                  },
                  {
                    name: '完成报价',
                    status: 'wait'
                  }
                ],
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: '时间线步骤条数据'
                },
                labelPosition: 'left'
              }
            ]
          }
        ],
        events: {
          onClick: {
            label: {
              zh_CN: '节点的点击时触发'
            },
            description: {
              zh_CN: '节点的点击时触发的回调函数'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'type',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '点击节点的下标'
                  }
                },
                {
                  name: 'value',
                  type: 'string',
                  defaultValue: '',
                  description: {
                    zh_CN: '当前节点对象：{ name: 节点名称, time: 时间 }'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: false,
        isModal: false,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['active', 'data']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'tooltip',
      name: {
        zh_CN: '文字提示框'
      },
      component: 'TinyTooltip',
      description:
        '动态显示提示信息，一般通过鼠标事件进行响应；提供 warning、error、info、success 四种类型显示不同类别的信',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Tooltip',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 11,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 20,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'placement',
                label: {
                  text: {
                    zh_CN: '提示位置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'top',
                        value: 'top'
                      },
                      {
                        label: 'top-start',
                        value: 'top-start'
                      },
                      {
                        label: 'top-end',
                        value: 'top-end'
                      },
                      {
                        label: 'bottom',
                        value: 'bottom'
                      },
                      {
                        label: 'bottom-start',
                        value: 'bottom-start'
                      },
                      {
                        label: 'bottom-end',
                        value: 'bottom-end'
                      },
                      {
                        label: 'left',
                        value: 'left'
                      },
                      {
                        label: 'left-start',
                        value: 'left-start'
                      },
                      {
                        label: 'left-end',
                        value: 'left-end'
                      },
                      {
                        label: 'right',
                        value: 'right'
                      },
                      {
                        label: 'right-start',
                        value: 'right-start'
                      },
                      {
                        label: 'right-end',
                        value: 'right-end'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: 'Tooltip 的出现位置'
                },
                labelPosition: 'left'
              },
              {
                property: 'content',
                label: {
                  text: {
                    zh_CN: '内容'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                defaultValue: '提示信息',
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '显示的内容，也可以通过 slot#content 传入 DOM'
                }
              },
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '是否可见'
                  }
                },
                defaultValue: true,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '状态是否可见'
                }
              },
              {
                property: 'manual',
                label: {
                  text: {
                    zh_CN: '手动控制'
                  }
                },
                defaultValue: true,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效'
                }
              }
            ]
          }
        ],
        events: {},
        slots: {
          content: {
            label: {
              zh_CN: '提示内容'
            },
            description: {
              zh_CN: '自定义提示内容'
            }
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        isPopper: true,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['disabled', 'content']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    },
    {
      icon: 'popover',
      name: {
        zh_CN: '提示框'
      },
      component: 'TinyPopover',
      description: 'Popover可通过对一个触发源操作触发弹出框,支持自定义弹出内容，延迟触发和渐变动画',
      docUrl: '',
      screenshot: '',
      tags: '',
      keywords: '',
      devMode: 'proCode',
      npm: {
        package: '@opentiny/vue',
        exportName: 'Popover',
        version: '',
        destructuring: true
      },
      group: 'component',
      priority: 7,
      schema: {
        properties: [
          {
            label: {
              zh_CN: '基础信息'
            },
            description: {
              zh_CN: '基础信息'
            },
            collapse: {
              number: 6,
              text: {
                zh_CN: '显示更多'
              }
            },
            content: [
              {
                property: 'modelValue',
                label: {
                  text: {
                    zh_CN: '绑定值'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '双向绑定，手动控制是否可见的状态值'
                },
                labelPosition: 'left'
              },
              {
                property: 'placement',
                label: {
                  text: {
                    zh_CN: '位置'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'top',
                        value: 'top'
                      },
                      {
                        label: 'top-start',
                        value: 'top-start'
                      },
                      {
                        label: 'top-end',
                        value: 'top-end'
                      },
                      {
                        label: 'bottom',
                        value: 'bottom'
                      },
                      {
                        label: 'bottom-start',
                        value: 'bottom-start'
                      },
                      {
                        label: 'bottom-end',
                        value: 'bottom-end'
                      },
                      {
                        label: 'left',
                        value: 'left'
                      },
                      {
                        label: 'left-start',
                        value: 'left-start'
                      },
                      {
                        label: 'left-end',
                        value: 'left-end'
                      },
                      {
                        label: 'right',
                        value: 'right'
                      },
                      {
                        label: 'right-start',
                        value: 'right-start'
                      },
                      {
                        label: 'right-end',
                        value: 'right-end'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: ''
                },
                labelPosition: 'left'
              },
              {
                property: 'trigger',
                label: {
                  text: {
                    zh_CN: '触发方式'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSelect',
                  props: {
                    options: [
                      {
                        label: 'click',
                        value: 'click'
                      },
                      {
                        label: 'focus',
                        value: 'focus'
                      },
                      {
                        label: 'hover',
                        value: 'hover'
                      },
                      {
                        label: 'manual',
                        value: 'manual'
                      }
                    ]
                  }
                },
                description: {
                  zh_CN: '触发方式，该属性的可选值为 click / focus / hover / manual，该属性的默认值为 click'
                }
              },
              {
                property: 'popper-class',
                label: {
                  text: {
                    zh_CN: '自定义类'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '为 popper 添加类名'
                },
                labelPosition: 'left'
              },
              {
                property: 'visible-arrow',
                label: {
                  text: {
                    zh_CN: '显示箭头'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '是否显示 Tooltip 箭头'
                }
              },
              {
                property: 'append-to-body',
                label: {
                  text: {
                    zh_CN: '添加到body上'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: 'Popover弹窗是否添加到body上'
                }
              },
              {
                property: 'arrow-offset',
                label: {
                  text: {
                    zh_CN: '箭头的位置偏移'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '箭头的位置偏移，该属性的默认值为 0'
                }
              },
              {
                property: 'close-delay',
                label: {
                  text: {
                    zh_CN: '隐藏延迟'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '触发方式为 hover 时的隐藏延迟，单位为毫秒'
                }
              },
              {
                property: 'content',
                label: {
                  text: {
                    zh_CN: '显示的内容'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '显示的内容，也可以通过 slot 传入 DOM'
                }
              },
              {
                property: 'disabled',
                label: {
                  text: {
                    zh_CN: '禁用'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: 'Popover 是否可用'
                }
              },
              {
                property: 'offset',
                label: {
                  text: {
                    zh_CN: '位置偏移量'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '出现位置的偏移量'
                }
              },
              {
                property: 'open-delay',
                label: {
                  text: {
                    zh_CN: '显示延迟'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '触发方式为 hover 时的显示延迟，单位为毫秒'
                }
              },
              {
                property: 'popper-options',
                label: {
                  text: {
                    zh_CN: 'popper.js的参数'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaCodeEditor',
                  props: {}
                },
                description: {
                  zh_CN: 'popper.js 的参数'
                }
              },
              {
                property: 'title',
                label: {
                  text: {
                    zh_CN: '标题'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '标题'
                }
              },
              {
                property: 'transform-origin',
                label: {
                  text: {
                    zh_CN: '旋转中心点'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaSwitch',
                  props: {}
                },
                description: {
                  zh_CN: '组件的旋转中心点,组件的旋转中心点'
                }
              },
              {
                property: 'transition',
                label: {
                  text: {
                    zh_CN: '定义渐变动画'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaInput',
                  props: {}
                },
                description: {
                  zh_CN: '该属性的默认值为 fade-in-linear'
                }
              },
              {
                property: 'width',
                label: {
                  text: {
                    zh_CN: '宽度'
                  }
                },
                required: true,
                readOnly: false,
                disabled: false,
                cols: 12,
                widget: {
                  component: 'MetaNumber',
                  props: {}
                },
                description: {
                  zh_CN: '宽度'
                }
              }
            ]
          }
        ],
        events: {
          'onUpdate:modelValue': {
            label: {
              zh_CN: '双向绑定的值改变时触发'
            },
            description: {
              zh_CN: '手动控制是否可见的状态值改变时触发'
            },
            type: 'event',
            functionInfo: {
              params: [
                {
                  name: 'value',
                  type: 'boolean',
                  defaultValue: '',
                  description: {
                    zh_CN: '双向绑定的可见状态值'
                  }
                }
              ],
              returns: {}
            },
            defaultValue: ''
          }
        }
      },
      configure: {
        loop: true,
        condition: true,
        styles: true,
        isContainer: true,
        isModal: false,
        isPopper: true,
        nestingRule: {
          childWhitelist: '',
          parentWhitelist: '',
          descendantBlacklist: '',
          ancestorWhitelist: ''
        },
        isNullNode: false,
        isLayout: false,
        rootSelector: '',
        shortcuts: {
          properties: ['visible', 'width']
        },
        contextMenu: {
          actions: ['create symbol'],
          disable: ['copy', 'remove']
        }
      }
    }
  ],
  blocks: [],
  snippets: [
    {
      group: 'html',
      children: [
        {
          name: {
            zh_CN: '段落'
          },
          icon: 'paragraph',
          screenshot: '',
          snippetName: 'p',
          schema: {
            componentName: 'p',
            children: 'TinyEngine 前端可视化设计器致力于通过友好的用户交互提升业务应用的开发效率。'
          }
        },
        {
          name: {
            zh_CN: '链接'
          },
          icon: 'link',
          screenshot: '',
          snippetName: 'a',
          schema: {
            componentName: 'a',
            children: '链接'
          }
        },
        {
          name: {
            zh_CN: '分隔线'
          },
          icon: 'hr',
          screenshot: '',
          snippetName: 'hr',
          schema: {}
        },
        {
          name: {
            zh_CN: '标题'
          },
          icon: 'h16',
          screenshot: '',
          snippetName: 'h1',
          schema: {
            componentName: 'h1',
            props: {},
            children: 'Heading'
          }
        },
        {
          name: {
            zh_CN: '输入框'
          },
          icon: 'input',
          screenshot: '',
          snippetName: 'input',
          schema: {
            componentName: 'input',
            props: {
              type: 'text',
              placeholder: '请输入'
            }
          }
        },
        {
          name: {
            zh_CN: '视频'
          },
          icon: 'video',
          screenshot: '',
          snippetName: 'video',
          schema: {
            componentName: 'video',
            props: {
              src: 'img/webNova.jpg',
              width: '200',
              height: '100',
              style: 'border:1px solid #ccc'
            }
          }
        },
        {
          name: {
            zh_CN: '图片'
          },
          icon: 'Image',
          screenshot: '',
          snippetName: 'img',
          schema: {
            componentName: 'img',
            props: {
              src: 'img/webNova.jpg',
              width: '200',
              height: '100'
            }
          }
        },
        {
          name: {
            zh_CN: '按钮'
          },
          icon: 'button',
          screenshot: '',
          snippetName: 'button',
          schema: {
            componentName: 'button',
            props: {},
            children: [
              {
                componentName: 'Text',
                props: {
                  text: '按钮文案'
                }
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '表格'
          },
          icon: 'table',
          screenshot: '',
          snippetName: 'table',
          schema: {
            componentName: 'table',
            props: {
              border: '1',
              width: '100%'
            },
            children: [
              {
                componentName: 'tr',
                children: [
                  {
                    componentName: 'td',
                    children: 'Month'
                  },
                  {
                    componentName: 'td',
                    children: 'Savings'
                  }
                ]
              },
              {
                componentName: 'tr',
                children: [
                  {
                    componentName: 'td',
                    children: 'January'
                  },
                  {
                    componentName: 'td',
                    children: '100'
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '表单'
          },
          icon: 'form',
          screenshot: '',
          snippetName: 'form',
          schema: {
            componentName: 'form',
            props: {
              action: 'action'
            },
            children: [
              {
                componentName: 'label',
                props: {
                  for: 'male'
                },
                children: 'male'
              },
              {
                componentName: 'input',
                props: {
                  type: 'text'
                }
              },
              {
                componentName: 'br'
              },
              {
                componentName: 'label',
                props: {
                  for: 'Female'
                },
                children: 'Female'
              },
              {
                componentName: 'input',
                props: {
                  type: 'text'
                }
              }
            ]
          }
        }
      ]
    },
    {
      group: 'content',
      children: [
        {
          name: {
            zh_CN: '走马灯'
          },
          screenshot: '',
          snippetName: 'tiny-carousel',
          icon: 'carousel',
          schema: {
            componentName: 'TinyCarousel',
            props: {
              height: '180px'
            },
            children: [
              {
                componentName: 'TinyCarouselItem',
                children: [
                  {
                    componentName: 'div',
                    props: {
                      style: 'margin:10px 0 0 30px'
                    }
                  }
                ]
              },
              {
                componentName: 'TinyCarouselItem',
                children: [
                  {
                    componentName: 'div',
                    props: {
                      style: 'margin:10px 0 0 30px'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '表单'
          },
          screenshot: '',
          snippetName: 'tiny-form',
          icon: 'form',
          schema: {
            componentName: 'TinyForm',
            props: {
              labelWidth: '80px',
              labelPosition: 'top'
            },
            children: [
              {
                componentName: 'TinyFormItem',
                props: {
                  label: '人员'
                },
                children: [
                  {
                    componentName: 'TinyInput',
                    props: {
                      placeholder: '请输入',
                      modelValue: ''
                    }
                  }
                ]
              },
              {
                componentName: 'TinyFormItem',
                props: {
                  label: '密码'
                },
                children: [
                  {
                    componentName: 'TinyInput',
                    props: {
                      placeholder: '请输入',
                      modelValue: '',
                      type: 'password'
                    }
                  }
                ]
              },
              {
                componentName: 'TinyFormItem',
                props: {
                  label: ''
                },
                children: [
                  {
                    componentName: 'TinyButton',
                    props: {
                      text: '提交',
                      type: 'primary',
                      style: 'margin-right: 10px'
                    }
                  },
                  {
                    componentName: 'TinyButton',
                    props: {
                      text: '重置',
                      type: 'primary'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '下拉框'
          },
          icon: 'select',
          screenshot: '',
          snippetName: 'TinySelect',
          schema: {
            componentName: 'TinySelect',
            props: {
              modelValue: '',
              placeholder: '请选择',
              options: [
                {
                  value: '1',
                  label: '黄金糕'
                },
                {
                  value: '2',
                  label: '双皮奶'
                }
              ]
            }
          }
        },
        {
          name: {
            zh_CN: '开关'
          },
          icon: 'switch',
          screenshot: '',
          snippetName: 'TinySwitch',
          schema: {
            componentName: 'TinySwitch',
            props: {
              modelValue: ''
            }
          }
        },
        {
          name: {
            zh_CN: '复选框组'
          },
          icon: 'checkboxs',
          screenshot: '',
          snippetName: 'TinyCheckboxGroup',
          schema: {
            componentName: 'TinyCheckboxGroup',
            props: {
              modelValue: ['name1', 'name2'],
              type: 'checkbox',
              options: [
                {
                  text: '复选框1',
                  label: 'name1'
                },
                {
                  text: '复选框2',
                  label: 'name2'
                },
                {
                  text: '复选框3',
                  label: 'name3'
                }
              ]
            }
          }
        },
        {
          name: {
            zh_CN: '复选框拖拽按钮组'
          },
          icon: 'checkboxgroup',
          screenshot: '',
          snippetName: 'TinyCheckboxbuttonGroup',
          schema: {
            componentName: 'TinyCheckboxGroup',
            props: {
              modelValue: []
            },
            children: [
              {
                componentName: 'TinyCheckboxButton',
                children: [
                  {
                    componentName: 'div'
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '对话框'
          },
          screenshot: '',
          snippetName: 'TinyDialogBox',
          icon: 'dialogbox',
          schema: {
            componentName: 'TinyDialogBox',
            props: {
              visible: true,
              'show-close': true,
              title: 'dialogBox title'
            },
            children: [
              {
                componentName: 'div'
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '标签页'
          },
          icon: 'tabs',
          screenshot: '',
          group: true,
          snippetName: 'TinyTabs',
          schema: {
            componentName: 'TinyTabs',
            props: {
              modelValue: 'first'
            },
            children: [
              {
                componentName: 'TinyTabItem',
                props: {
                  title: '标签页1',
                  name: 'first'
                },
                children: [
                  {
                    componentName: 'div',
                    props: {
                      style: 'margin:10px 0 0 30px'
                    }
                  }
                ]
              },
              {
                componentName: 'TinyTabItem',
                props: {
                  title: '标签页2',
                  name: 'second'
                },
                children: [
                  {
                    componentName: 'div',
                    props: {
                      style: 'margin:10px 0 0 30px'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '折叠面板'
          },
          screenshot: '',
          snippetName: 'TinyCollapse',
          icon: 'collapse',
          schema: {
            componentName: 'TinyCollapse',
            props: {
              modelValue: 'collapse1'
            },
            children: [
              {
                componentName: 'TinyCollapseItem',
                props: {
                  name: 'collapse1',
                  title: '折叠项1'
                },
                children: [
                  {
                    componentName: 'div'
                  }
                ]
              },
              {
                componentName: 'TinyCollapseItem',
                props: {
                  name: 'collapse2',
                  title: '折叠项2'
                },
                children: [
                  {
                    componentName: 'div'
                  }
                ]
              },
              {
                componentName: 'TinyCollapseItem',
                props: {
                  name: 'collapse3',
                  title: '折叠项3'
                },
                children: [
                  {
                    componentName: 'div'
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '表格'
          },
          icon: 'grid',
          screenshot: '',
          snippetName: 'tinyGrid',
          schema: {
            componentName: 'TinyGrid',
            props: {
              editConfig: {
                trigger: 'click',
                mode: 'cell',
                showStatus: true
              },
              columns: [
                {
                  type: 'index',
                  width: 60
                },
                {
                  type: 'selection',
                  width: 60
                },
                {
                  field: 'employees',
                  title: '员工数'
                },
                {
                  field: 'created_date',
                  title: '创建日期'
                },
                {
                  field: 'city',
                  title: '城市'
                }
              ],
              data: [
                {
                  id: '1',
                  name: 'GFD科技有限公司',
                  city: '福州',
                  employees: 800,
                  created_date: '2014-04-30 00:56:00',
                  boole: false
                },
                {
                  id: '2',
                  name: 'WWW科技有限公司',
                  city: '深圳',
                  employees: 300,
                  created_date: '2016-07-08 12:36:22',
                  boole: true
                }
              ]
            }
          }
        },
        {
          name: {
            zh_CN: '弹出编辑'
          },
          icon: 'popeditor',
          screenshot: '',
          snippetName: 'TinyPopeditor',
          schema: {
            componentName: 'TinyPopeditor',
            props: {
              modelValue: '',
              placeholder: '请选择',
              gridOp: {
                columns: [
                  {
                    field: 'id',
                    title: 'ID',
                    width: 40
                  },
                  {
                    field: 'name',
                    title: '名称',
                    showOverflow: 'tooltip'
                  },
                  {
                    field: 'province',
                    title: '省份',
                    width: 80
                  },
                  {
                    field: 'city',
                    title: '城市',
                    width: 80
                  }
                ],
                data: [
                  {
                    id: '1',
                    name: 'GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司GFD科技有限公司',
                    city: '福州',
                    province: '福建'
                  },
                  {
                    id: '2',
                    name: 'WWW科技有限公司',
                    city: '深圳',
                    province: '广东'
                  },
                  {
                    id: '3',
                    name: 'RFV有限责任公司',
                    city: '中山',
                    province: '广东'
                  },
                  {
                    id: '4',
                    name: 'TGB科技有限公司',
                    city: '龙岩',
                    province: '福建'
                  },
                  {
                    id: '5',
                    name: 'YHN科技有限公司',
                    city: '韶关',
                    province: '广东'
                  },
                  {
                    id: '6',
                    name: 'WSX科技有限公司',
                    city: '黄冈',
                    province: '武汉'
                  }
                ]
              }
            }
          }
        },
        {
          name: {
            zh_CN: '树'
          },
          icon: 'tree',
          screenshot: '',
          snippetName: 'TinyTree',
          schema: {
            componentName: 'TinyTree',
            props: {
              data: [
                {
                  label: '一级 1',
                  children: [
                    {
                      label: '二级 1-1',
                      children: [
                        {
                          label: '三级 1-1-1'
                        }
                      ]
                    }
                  ]
                },
                {
                  label: '一级 2',
                  children: [
                    {
                      label: '二级 2-1',
                      children: [
                        {
                          label: '三级 2-1-1'
                        }
                      ]
                    },
                    {
                      label: '二级 2-2',
                      children: [
                        {
                          label: '三级 2-2-1'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        },
        {
          name: {
            zh_CN: '文字提示框'
          },
          icon: 'tooltip',
          screenshot: '',
          snippetName: 'TinyTooltip',
          schema: {
            componentName: 'TinyTooltip',
            props: {
              content: 'Top Left 提示文字',
              placement: 'top-start',
              manual: true,
              modelValue: true
            },
            children: [
              {
                componentName: 'span',
                children: [
                  {
                    componentName: 'div',
                    props: {}
                  }
                ]
              },
              {
                componentName: 'Template',
                props: {
                  slot: 'content'
                },
                children: [
                  {
                    componentName: 'span',
                    children: [
                      {
                        componentName: 'div',
                        props: {
                          placeholder: '提示内容'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '提示框'
          },
          icon: 'popover',
          screenshot: '',
          snippetName: 'TinyPopover',
          schema: {
            componentName: 'TinyPopover',
            props: {
              width: 200,
              title: '弹框标题',
              trigger: 'manual',
              modelValue: true
            },
            children: [
              {
                componentName: 'Template',
                props: {
                  slot: 'reference'
                },
                children: [
                  {
                    componentName: 'div',
                    props: {
                      placeholder: '触发源'
                    }
                  }
                ]
              },
              {
                componentName: 'Template',
                props: {
                  slot: 'default'
                },
                children: [
                  {
                    componentName: 'div',
                    props: {
                      placeholder: '提示内容'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          name: {
            zh_CN: '分页'
          },
          icon: 'pager',
          screenshot: '',
          snippetName: 'TinyPager',
          schema: {
            componentName: 'TinyPager',
            props: {
              layout: 'total, sizes, prev, pager, next',
              total: 100,
              pageSize: 10,
              currentPage: 1
            }
          }
        },
        {
          name: {
            zh_CN: '面包屑'
          },
          icon: 'breadcrumb',
          screenshot: '',
          snippetName: 'TinyBreadcrumb',
          schema: {
            componentName: 'TinyBreadcrumb',
            props: {
              options: [
                {
                  to: "{ path: '/' }",
                  label: '首页'
                },
                {
                  to: "{ path: '/breadcrumb' }",
                  label: '产品'
                },
                {
                  replace: 'true',
                  label: '软件'
                }
              ]
            }
          }
        }
      ]
    },
    {
      group: 'general',
      children: [
        {
          name: {
            zh_CN: 'Row'
          },
          icon: 'row',
          screenshot: '',
          snippetName: 'TinyRow',
          schema: {
            componentName: 'TinyRow',
            props: {},
            children: [
              {
                componentName: 'TinyCol',
                props: {
                  span: 3
                }
              },
              {
                componentName: 'TinyCol',
                props: {
                  span: 3
                }
              },
              {
                componentName: 'TinyCol',
                props: {
                  span: 3
                }
              },
              {
                componentName: 'TinyCol',
                props: {
                  span: 3
                }
              }
            ]
          }
        },
        {
          name: {
            zh_CN: 'Col'
          },
          icon: 'col',
          screenshot: '',
          snippetName: 'TinyCol',
          schema: {
            componentName: 'TinyCol',
            props: {
              span: 12,
              style: {
                height: '30px',
                border: '1px solid #ccc'
              }
            }
          }
        },
        {
          name: {
            zh_CN: '按钮'
          },
          icon: 'button',
          screenshot: '',
          snippetName: 'TinyButton',
          schema: {
            componentName: 'TinyButton',
            props: {
              text: '按钮文案'
            }
          }
        },
        {
          name: {
            zh_CN: '按钮组'
          },
          icon: 'buttons',
          snippetName: 'TinyButtons',
          screenshot: '',
          schema: {
            componentName: 'div',
            props: {},
            children: [
              {
                componentName: 'TinyButton',
                props: {
                  text: '提交',
                  type: 'primary',
                  style: {
                    margin: '0 5px 0 5px'
                  }
                }
              },
              {
                componentName: 'TinyButton',
                props: {
                  text: '重置',
                  style: {
                    margin: '0 5px 0 5px'
                  }
                }
              },
              {
                componentName: 'TinyButton',
                props: {
                  text: '取消'
                }
              }
            ]
          },
          configure: {
            isContainer: true
          }
        },
        {
          name: {
            zh_CN: '互斥按钮组'
          },
          icon: 'buttons',
          snippetName: 'TinyButtonGroup',
          screenshot: '',
          schema: {
            componentName: 'TinyButtonGroup',
            props: {
              data: [
                {
                  text: 'Button1',
                  value: '1'
                },
                {
                  text: 'Button2',
                  value: '2'
                },
                {
                  text: 'Button3',
                  value: '3'
                }
              ],
              modelValue: '1'
            }
          }
        },
        {
          name: {
            zh_CN: '输入框'
          },
          icon: 'input',
          screenshot: '',
          snippetName: 'TinyInput',
          schema: {
            componentName: 'TinyInput',
            props: {
              placeholder: '请输入',
              modelValue: ''
            }
          }
        },
        {
          name: {
            zh_CN: '单选'
          },
          icon: 'radio',
          screenshot: '',
          snippetName: 'TinyRadio',
          schema: {
            componentName: 'TinyRadio',
            props: {
              label: '1',
              text: '单选文本'
            }
          }
        },
        {
          name: {
            zh_CN: '复选框'
          },
          icon: 'checkbox',
          screenshot: '',
          snippetName: 'TinyCheckbox',
          schema: {
            componentName: 'TinyCheckbox',
            props: {
              text: '复选框文案'
            }
          }
        }
      ]
    },
    {
      group: 'navigation',
      children: [
        {
          name: {
            zh_CN: '搜索框'
          },
          icon: 'search',
          screenshot: '',
          snippetName: 'TinySearch',
          schema: {
            componentName: 'TinySearch',
            props: {
              modelValue: '',
              placeholder: '输入关键词'
            }
          }
        },
        {
          name: {
            zh_CN: '时间线'
          },
          icon: 'timeline',
          screenshot: '',
          snippetName: 'TinyTimeLine',
          schema: {
            componentName: 'TinyTimeLine',
            props: {
              active: '2',
              data: [
                {
                  name: '已下单'
                },
                {
                  name: '运输中'
                },
                {
                  name: '已签收'
                }
              ]
            }
          }
        }
      ]
    }
  ]
}
