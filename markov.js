/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    
    let result = new Map()
    for(let i = 0; i < this.words.length; i++){
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null

      if(result.has(word)) {
        result.get(word).push(nextWord)
        
      } else{
        result.set(word, [nextWord])
      }
    }
    
    this.result =  result
  }

  static getRandom(arr) {

    return arr[Math.floor(Math.random() * arr.length)]
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    let text = []
    let keys = Array.from(this.result.keys())
    // console.log(keys)
    let key = MarkovMachine.getRandom(keys)
    // console.log(this.result.get(key))
    for(let i = 1; i < numWords && key !== null; i++){
      text.push(key)
      key = MarkovMachine.getRandom(this.result.get(key))
    }
    return text.join(' ')
  }
}

module.exports = {MarkovMachine}

