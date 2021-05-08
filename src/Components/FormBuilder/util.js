export const paginateForm = (fieldsRef, target, formPage) => {
  const pagesArr = [[]];
  let currentPage = pagesArr.length - 1;
  let pageHeight = 0;
  for (let [key, value] of fieldsRef) {
    if (!value) return;
    const { marginTop, marginBottom } = getComputedStyle(value);
    const outerHeight =
      Number(marginTop.replace("px", "")) +
      Number(marginBottom.replace("px", "")) +
      value.offsetHeight;
    console.log("outer height", outerHeight);
    if (value === null) continue;
    if (outerHeight >= target) {
      if (pagesArr[currentPage].length < 1) {
        pagesArr[currentPage].push(
          formPage.filter((val) => val.id.toString() === key.toString())[0]
        );
      } else {
        pagesArr.push(formPage.filter((val) => val.id == key));
      }
      pageHeight = 0;
      currentPage = pagesArr.length - 1;
      continue;
    }

    if (pageHeight + outerHeight > target) {
      pagesArr.push(formPage.filter((val) => val.id == key));
      pageHeight = outerHeight;
      currentPage = pagesArr.length - 1;
      continue;
    }

    if (pageHeight + outerHeight <= target) {
      pagesArr[currentPage].push(formPage.filter((val) => val.id == key)[0]);
      pageHeight += outerHeight;
      currentPage = pagesArr.length - 1;
    }
  }
  return pagesArr;
};
