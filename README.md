### Vue3组件库搭建

###### 一、搭建monorepo环境

> 使用`pnpm`安装包速度快，磁盘空间利用率高效，使用`pnpm`可以快速建立`monorepo`，so~ 这里我们使用`pnpm workspace`来实现`monorepo`。

```javascript
npm install pnpm -g # 全局安装pnpm
pnpm init # 初始化package.json配置文件 私有库
pnpm install vue typescript -D # 全局下添加依赖
```

> 使用pnpm必须要建立`.npmrc`文件，`shamefully-hoist=true`，否则安装的模块无法放置到`node_modules`目录下