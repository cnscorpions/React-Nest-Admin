<p align="center">
  React Nest Admin
</p>

<p align="center">
  <a href="https://github.com/facebook/react">
    <img src="https://img.shields.io/badge/react-16.12.0-brightgreen.svg" alt="react">
  </a>
  <a href="https://github.com/nestjs/nest">
    <img src="https://img.shields.io/badge/nest-6.10.14-red.svg" alt="nest">
  </a>
</p>

简体中文 | [English](./README.en.md)

## 简介

[ React Nest Admin ]([https://github.com/cnscorpions/React-Nest-Admin](https://github.com/cnscorpions/React-Nest-Admin)) 是怎么来的？<br/>
学习React想要找一个练手的项目，结果市面上开源的都是各种TODO App，甚至于[Real World系列](https://github.com/gothinkster/realworld)也很难让人满意。付费课程，也很难详尽地讲清楚方方面面。同时，Admin, dashboard之类的中后台的需求日愈旺盛，值得前端开发者多多关注。于是，就有了这样一个项目，本人预期如下：
1. 这是一个产品，能贯穿前端（开发，版本管理，单元测试，打包部署），后端（接口开发，单元测试，打包部署等），运维（服务器环境搭建，CI & CD等）
2. 这是一个Admin前后端解决方案，涉及JWT鉴权，基于角色权限管理;
3. 这是一套Web项目的完整学习资料，涉及到相关知识会提供Roadmap和tips

- [在线版本](https://react-nestjs-admin.xyz) 账号密码：`admin 123` or `morty 123`
- 系列教程

## 环境
- node 13 + （建议使用nvm进行node版本管理）
- npm 6 +
- git
- pm2 （可选，初级部署需要，使用npm安装即可）

## 准备
本项目前端基于CRA搭建，技术栈涉及es6+, react, react-router, react-redux（以及redux-devTools, redux-thunk, react-persist等中间件），axios和ant design of react，sass, CSS Module等等，后端基于nest-cli搭建，技术栈涉及Typescript, nest.js及其中间件，mongodb, mongoose, rxjs等等，运维涉及MEAN环境搭建（涉及到Nginx的偏多），PM2部署node应用，Docker部署实践，Travis CI集成等等。
提前了解其中知识会对使用本项目大有帮助。

系列教程如下：
1.  

## 效果图
- 登录页
![](https://github.com/cnscorpions/React-Nest-Admin/blob/master/doc/images/%E7%99%BB%E5%BD%95%E9%A1%B5.png)

- 用户管理
![](https://github.com/cnscorpions/React-Nest-Admin/blob/master/doc/images/%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86.png)

- 文件上传
![](https://github.com/cnscorpions/React-Nest-Admin/blob/master/doc/images/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.png)

- 富文本编辑器
![](https://github.com/cnscorpions/React-Nest-Admin/blob/master/doc/images/%E5%AF%8C%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8.png)

- 404页面
![](https://github.com/cnscorpions/React-Nest-Admin/blob/master/doc/images/404.png)

## 功能及技术实现
- 登录 & 注册
	- [x] 登录
	- [x] 注册
	- [x] 重置密码
- 用户鉴权
	- [x] Bcrypt + Salt + JWT鉴权
	- [x] Role-Based 权限管理 
- 状态管理
	- [x] React-Redux
	- [x] Redux-DevTools 开发调试
	- [x] Redux-Thunk dispatch 异步Action
	- [x] Redux-persist（状态可持久化）
- 网络请求
	- [x] axios拦截请求，注入token
	- [x] 后台filter自定义全局HTTP异常捕获
	- [x] 后台请求响应拦截，统一放回格式
	- [x] 后台auth guard
	- [x] 后台role guard
- 文件上传
	- [x] 上传
	- [x] 列表查询
	- [x] 删除
- 计划中
	- [x] 帐号密码MD5+salt加密
    - [x] 前端使用绝对路径引入
	- [ ] token失效弹窗提示
	- [ ] refresh token
	- [ ] 写unit test
	- [ ] 配置travis初步实现CI
	- [ ] Docker容器化
	- [ ] i18n

## 开发
```
# 前端开发
npm run start or yarn start

# 后端开发
npm run start:dev or yarn start:dev
```

## 发布
```
# 前端代码格式化
npm run formate

# 前端打包
npm run build & yarn build

# 前端提交commit 
yarn git "commit message"

# 前端部署（注意要修改pm2的配置文件）
npm run update
```
