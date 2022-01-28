使用说明：

1、安装ts-node
npm install -g ts-node

2、更新目录底下paperwork.ts文案路径,定位搜索global
const srcDir = `D:\\Mocas\\project\\P_UI\\utils\\P_UCC_PBX\\`; // 新文案目录
const desDir = `D:\\Mocas\\project\\P_UI\\pbxweb\\public\\templates\\`; // 工程目录
const diffDir = `D:\\Mocas\\project\\P_UI\\pbxweb\\src\\extra-tools\\diff-files\\`; // 项目与文案差异性目录

3、使用ts-node paperwork.ts执行，有说明

PS
1、确保public/template/en.js最后一个key没有逗号，否则会报错
2、暂无异常处理，后期有需要再增加
3、隐藏根目录下的tsconfig.json内容，即内容为空(注释)即可，使用完还原文件
