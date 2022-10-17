const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  cipher(message, keyword, encrypt = true) {
    if (!message || !keyword) {
      throw new Error('Incorrect arguments!');
    }

    const msg = message.toUpperCase().split('');
    const key = keyword.repeat(Math.ceil(message.length / keyword.length)).toUpperCase()

    let i = 0;
    let newMsg = '';

    msg.map((char) => {
      if (this.a.includes(char)) {
        const charIndexInA = this.a.indexOf(key[i++]);
        const newA = `${this.a.slice(charIndexInA)}${this.a.slice(0, charIndexInA)}`;
        return encrypt
          ? newMsg += `${newA[this.a.indexOf(char)]}`
          : newMsg += `${this.a[newA.indexOf(char)]}`;
      } else {
        return newMsg += char;
      }
    });

    return this.direct
      ? newMsg
      : newMsg.split('').reverse().join('');

  }

  encrypt = (message, keyword) => this.cipher(message, keyword);
  decrypt = (message, keyword) => this.cipher(message, keyword, false);

}

module.exports = {
  VigenereCipheringMachine
};
