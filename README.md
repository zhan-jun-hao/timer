<img width="1920" height="1080" alt="icon" src="https://github.com/user-attachments/assets/c541cb75-0c8d-401f-9d64-8fb56acfa149" />
# timer

介绍: html + css + 纯生js + Electron 的桌面计时器。

设计: 正计时系统

功能: 1. 计时

<img width="693" height="404" alt="功能1" src="https://github.com/user-attachments/assets/cfb31449-548e-4800-ad5f-acac7cd2f2c7" />

2.点击结束键自动记录时间节点和持续节点

<img width="662" height="503" alt="功能2" src="https://github.com/user-attachments/assets/65c3f785-4d3b-4cba-af08-5f27fa914033" />


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
