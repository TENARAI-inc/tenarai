export const addHtmlClass = (clsStr: string) => {
  const html = document.getElementsByTagName('html')[0];
  html.classList.add(clsStr);
};

export const removeHtmlClass = (clsStr: string) => {
  const html = document.getElementsByTagName('html')[0];
  html.classList.remove(clsStr);
};

export const wait = (milisec: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, milisec);
  });
};
