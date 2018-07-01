var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var lat = 1;
        var lng = 1;
        
        var locationMessage = generateLocationMessage(from,lat,lng);

        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage.from).toEqual(from);
        expect(locationMessage.url).toEqual(`https://www.google.com/maps?q=${lat},${lng}`);


    });
})