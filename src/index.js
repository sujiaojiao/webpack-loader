

// 浏览器识别不了import webpack模块打包引入工具
// Es Moudule 模块引入方式
import logo from './logo.png';
// 全局使用样式
// import './index.scss';
// 局部样式，不会全局使用
import style from './index.scss';
import creatLogo from './creatLogo.js';
// CommonJs
// var logo = require('./logo.png');
creatLogo();
var img = new Image();
img.src = logo;
// 全局使用样式
// img.classList.add('logo');
// 局部样式，不会全局使用
img.classList.add(style.logo);
var root = document.getElementById('root');
root.append(img);
