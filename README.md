# timer

介绍: html + css + 纯生js + Electron 的桌面计时器。
设计: 正计时系统
功能: 1. 计时

## 1.检查node环境

node -v
npm -v

## 2.初始化node环境

npm init -y

## 3.安装electron

npm install electron --save-dev

## 4.启动项目

npm start

## 5.项目结构

        Electron

        主进程(main.js)
        |
        |
        创建窗口
        |
        ↓
        渲染进程
                HTML
                CSS
                JavaScript

## 6.项目打包

npm install electron-builder --save-dev
npm run build
