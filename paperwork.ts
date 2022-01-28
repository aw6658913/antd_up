/* eslint-disable */
/**
 * @description 获取对比文件内容
 * @param fileName 文件名 + 路径
 */
export const getFileContent = (fileName: string) => {
  let data = fs.readFileSync(fileName);
  const dataStr = data
    .toString("utf-8")
    .replace("/* eslint-disable */", "")
    .replace("window.__lang__ = {", "{")
    .replace("};", "}");
  return JSON.parse(dataStr);
};

/**
 * @description 获取时间
 */
const curentTime = () => {
  const now = new Date();

  let year = now.getFullYear(); //年
  let month = now.getMonth() + 1; //月
  let day = now.getDate(); //日

  let hh = now.getHours(); //时
  let mm = now.getMinutes(); //分

  let clock = year + "-";

  if (month < 10) clock += "0";

  clock += month + "-";

  if (day < 10) clock += "0";

  clock += day + " ";

  if (hh < 10) clock += "0";

  clock += hh + ":";
  if (mm < 10) clock += "0";
  clock += mm;
  clock += " " + now.getMilliseconds();

  return clock;
};

/**
 * @description 日志打印
 * @param content 内容
 */
const printLog = (content: string) => {
  const template = `${curentTime()} ${content}`;
  console.info(template);
};

//////////////////全局变量定义global

const fs = require("fs");

const srcDir = `.\\new\\`; // 新文案目录
const desDir = `.\\public\\templates\\`; // 工程目录
const diffDir = `.\\src\\extra-tools\\diff-files\\`; // 项目与文案差异性目录

const en = getFileContent(`${srcDir}en.json`);
const enCurrent = getFileContent(`${desDir}en.js`);

//////////////////文件操作功能

/**
 * @description 生成文件
 * @param fileName 文件名
 * @param data 文本内容
 */
export const createFile = (fileName: string, data: string) => {
  fs.writeFile(fileName, data, function (err: any) {});
};

/**
 * @description 拷贝文件到指定位置
 * @param srcFile 拷贝文件源
 * @param desFile 拷贝目的地
 * @param extendData 额外数据源处理，先不做扩展，后面有需要再扩展
 */
export const copyFile = (srcFile: string, desFile: string, extendData: any) => {
  let data = fs.readFileSync(srcFile);
  if (extendData) {
    let jsonData = JSON.parse(data.toString());
    const keys = Object.keys(extendData);
    keys.map((key: string) => {
      if (!jsonData[key]) {
        jsonData[key] = extendData[key];
      }
    });
    data = JSON.stringify(jsonData, null, "\t");
  }
  data = formatTemplate(data);
  fs.writeFileSync(desFile, data);
};

/**
 * @description 获取目录底下的文件，暂不考虑多层情况
 * @param path 文件目录，包含路径
 */
export const getDirFiles = (path: string) => {
  const files = fs.readdirSync(path);
  return files;
};

//////////////////业务处理

/**
 * @description 获取标准版语言模板
 * @param data 文件内容
 */
export const formatTemplate = (data: string) => {
  const content = `
/* eslint-disable */
window.__lang__ = ${data};
    `;
  return content;
};

/**
 * @description 对比语言模板json对象数据，过滤双方不一样的Key，并导出工具和项目的Key
 * @returns json 项目新增文案
 */
export const comparisonJsonDoc = () => {
  printLog("对比...");
  // 新文案key
  const enKey = Object.keys(en).sort();
  // 旧文案key
  const enCurrentKey = Object.keys(enCurrent).sort();

  // 如果新文案在旧文案中存在，则从旧文案中删除key, 否则记录这是文案工具新增的key
  const tmpEnCurrentKey = enCurrentKey;
  // const tmpEnCurrentKey = _.cloneDeep(enCurrentKey);
  const arr: any = [];
  const arrObj: any = {};
  enKey.map((value) => {
    const index = tmpEnCurrentKey.indexOf(value);
    if (index > -1 && tmpEnCurrentKey[index] === value) {
      tmpEnCurrentKey.splice(index, 1);
    } else {
      // 文案工具那边新增的key
      arr.push(value);
      arrObj[value] = (en as any)[value];
    }
  });

  // 如果旧文案在新文案中存在，则从新文案中删除key,否则记录这是项目新增的key
  // const tmpEnKey = _.cloneDeep(enKey);
  const tmpEnKey = enKey;
  const arrCurrent: any = [];
  const arrCurrentObj: any = {};
  enCurrentKey.map((value) => {
    const index = tmpEnKey.indexOf(value);
    // 存在，且key相等
    if (index > -1 && tmpEnKey[index] === value) {
      tmpEnKey.splice(index, 1);
    } else {
      // 项目新增的key
      arrCurrent.push(value);
      arrCurrentObj[value] = (enCurrent as any)[value];
    }
  });
  createFile(diffDir + "文案工具新增.json", JSON.stringify(arrObj, null, "\t"));
  createFile(
    diffDir + "项目文案新增.json",
    JSON.stringify(arrCurrentObj, null, "\t")
  );
  printLog("对比结束...");
  return arrCurrentObj;
};

/**
 * @description 合并最新文案到工程
 * @param data 项目新增数据
 */
export const mergeToProject = (data: any) => {
  printLog("开始合并到项目...");
  // 需要判断目录是否存在，不存在为空
  const files = getDirFiles(srcDir);
  files.forEach((fileName: string) => {
    const srcFile = `${srcDir}${fileName}`;
    let desFile = `${desDir}${fileName.replace(/.json/g, ".js")}`;
    if (fileName === "zh.json") {
      desFile = `${desDir}${"zh-CN.json".replace(/.json/g, ".js")}`;
    }
    printLog(`合并${srcFile}到项目中，文件名为${desFile}...`);
    copyFile(srcFile, desFile, fileName === "en.json" ? data : undefined);
  });
  printLog("合并到项目结束...");
};

//////////////////main
printLog("start 开始执行文案更新...");
const newData = comparisonJsonDoc();
mergeToProject(newData);
printLog("end 文案更新结束");
