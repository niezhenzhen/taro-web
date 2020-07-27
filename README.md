# taro-web

## 本地运行

``` bash
# 安装依赖，或 npm i
yarn

# 运行小程序，编译后的文件位于项目下的 dist 文件夹
# （微信 dev:weapp，支付宝 dev:alipay）
npm run dev:weapp

# 运行 H5
npm run dev:h5

# 运行 React Native，请务必查阅文档：https://nervjs.github.io/taro/docs/react-native.html
npm run dev:rn
```

## 项目结构

```
.
├── config                          # 存储一些项目用到的脚本
│   ├── index.js                    # webpack 基础配置
│   ├── dev.js                      # webpack 开发环境配置
│   └── prod.js                     # webpack 生产环境配置                           
│  
└── src                             # 源代码
    ├── index.html                  # HTML 模板
    ├── app.js                      # 入口文件
    ├── pages                       # 按照业务拆分的模块   
    ├── actions                     # 
    ├── assets                      # 静态资源
    ├── components                  # 公用的组件
    ├── constants                   # 
    │   └── api.js                  # 接口配置
    ├── reducers                    # 
    ├── store                       # Redux 的 Store
    ├── styles                      # 样式目录
    └── utils                       # 
        └── redux.js                # 状态管理
        └── request.js              # 请求封装
```
