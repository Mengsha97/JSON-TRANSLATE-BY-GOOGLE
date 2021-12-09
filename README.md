## 介绍

将[translate-google](https://github.com/shikar/NODE_GOOGLE_TRANSLATE)插件封装了一下，实现了传入一个 json 文件，一次输出多个翻译版本的 json 文件

## 使用说明

1. 执行

   ```shell
   npm init
   ```

2. 更改 src/index.js 文件中的 “needToTranslate”，language 对应的字段可以在[language.js](https://github.com/shikar/NODE_GOOGLE_TRANSLATE/blob/master/languages.js)这里找到，最后导出的文件名的格式是
   “\[language\]\_\_[countryCode\].json”，另外将 language 设置为"zh-cn"和"zh-tw"都会转成"zh"

   ```javascript
   const needToTranslate = [
     {
       language: "th",
       countryCode: "TH",
     },
     {
       language: "zh-cn",
       countryCode: "CN",
     },
     {
       language: "zh-tw",
       countryCode: "HK",
     },
   ];
   ```

3. 将需要翻译的字段按照 json 格式放在 src/language/original.json 里，默认是放英文格式的，如果放其他格式的，需要在执行的时候特别说明，见下文

4. 执行下面的语句

   ```shell
   npm run start
   ```

   如果翻译的源文件语言是中文简体，需要执行这样的语句，参数也是依据[language.js](https://github.com/shikar/NODE_GOOGLE_TRANSLATE/blob/master/languages.js)来设置的

   ```shell
   npm run start zh-cn
   ```

5. 成功的话就能看到翻译后的文件在 src/language 目录下
