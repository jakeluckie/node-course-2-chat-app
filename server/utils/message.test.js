var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Jake';
        var text = 'Hello there';

        var res = generateMessage(from, text);

        expect(from).toEqual(res.from);
        expect(text).toEqual(res.text);
        expect(res.createdAt).toBeA('number');
    });
});