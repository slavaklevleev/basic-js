/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }

  encrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    str = str.toUpperCase().split("");

    let koef = Math.ceil(str.length / key.length);
    key = key.toUpperCase().repeat(koef).split("");

    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[A-Z]/g)) {
        key.splice(i, 0, str[i]);
      }
    }

    key = key.join("");

    let codeA = "A".charCodeAt();
    let lettersCount = "Z".charCodeAt() - "A".charCodeAt() + 1;

    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[A-Z]/g)) {
        result += str[i];
      } else {
        let letterCode = str[i].charCodeAt() - codeA;
        let shift = key[i].charCodeAt() - codeA;
        let letter = String.fromCharCode(
          codeA + ((letterCode + shift) % lettersCount)
        );
        result += letter;
      }
    }

    return this.mode === false ? result.split("").reverse().join("") : result;
  }

  decrypt(str, key) {
    if (str === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    str = str.toUpperCase().split("");

    let koef = Math.ceil(str.length / key.length);
    key = key.toUpperCase().repeat(koef).split("");

    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[A-Z]/g)) {
        key.splice(i, 0, str[i]);
      }
    }

    key = key.join("");

    let codeA = "A".charCodeAt();
    let abcCount = "Z".charCodeAt() - "A".charCodeAt() + 1;

    let result = "";

    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[A-Z]/g)) {
        result += str[i];
      } else {
        let letterCode = str[i].charCodeAt() - codeA;
        let shift = key[i].charCodeAt() - codeA;
        let letter = String.fromCharCode(
          codeA + ((letterCode - shift + abcCount) % abcCount)
        );
        result += letter;
      }
    }

    return this.mode === false ? result.split("").reverse().join("") : result;
  }
}