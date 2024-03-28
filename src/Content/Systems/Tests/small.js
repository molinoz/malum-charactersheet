function createObjects(objName) {
  function getNumber(num1) {
    return num1 + 8;
  }
  return {
    name: objName,
    number: getNumber(this.additionals.modifier),
    additionals: {
      modifier: 1,
    },
  }
}

const gary = createObjects('gary');

console.log(gary.number);