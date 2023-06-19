function convert() {
  const convertedText = document.getElementById("converted-value");
  const csv = document.getElementById("textarea");
  const csvArr = csv.value.split("\n");
  const fieldsName = [];
  const jsonObj = [];
  for (let i = 0; i < csvArr.length; i++) {
    const csvFieldsArr = csvArr[i].split(",");
    for (let k = 0; k < csvFieldsArr.length; k++) {
      const csvField = csvFieldsArr[k].replace(/["']/g, "");
      if (i === 0) {
        fieldsName.push(csvField);
      } else {
        const fieldName = fieldsName[k];
        if (!jsonObj[i - 1]) {
          jsonObj[i - 1] = {};
        }
        jsonObj[i - 1][fieldName] = csvField;
      }
    }
  }
  convertedText.innerText = JSON.stringify(jsonObj);
}
