const {MarkovMachine} = require('./markov')

describe('Shud test markov text', function () {
    let markov;
    let text;
    beforeEach(function () {
        markov = new MarkovMachine(`I do so like
        Green eggs and ham!
        Thank you!
        Thank you,
        Sam-I-am`)
        text = markov.makeText()
    })
    

    test('should test length', function () {
        expect(text.split(' ').length).toBeGreaterThan(1)
    })
    test('should test if result is a string', function () {
        expect(typeof text).toBe('string')
    })
})