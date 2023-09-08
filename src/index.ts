const modifyMainText = (text: string) => {
  const mainText = document.querySelector('.main-text');
  if (mainText) {
    mainText.textContent = text;
  }
};

modifyMainText('Hello World!');