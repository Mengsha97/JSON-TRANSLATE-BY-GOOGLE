const translate = require("translate-google");
const fs = require("fs");
const originData = require("./language/original.json");
const args = process.argv.slice(2);
const originLang = args && args.length > 0 ? args[0] : "en";

async function translateFunc(language, countryCode) {
  const resultData = JSON.parse(JSON.stringify(originData));
  await Promise.all(
    Object.keys(originData).map(async (value) => {
      const res = await translate(originData[value], { from: originLang, to: language });
      resultData[value] = res;
      return res;
    })
  );
  const lang = language === "zh-cn" || language === "zh-tw" ? "zh" : language.toLowerCase();
  const country = countryCode.toUpperCase();
  const fileName = `src/language/${lang}_${country}.json`;
  console.log(fileName);
  console.log(resultData);
  fs.writeFileSync(fileName, JSON.stringify(resultData));
}

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

needToTranslate.forEach((value) => {
  translateFunc(value.language, value.countryCode);
});
