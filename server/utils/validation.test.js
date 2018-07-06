const expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
        var text = {blerg:'turd'};

        var validationString = isRealString(text);

        expect(validationString).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var text = '      ';

        var validationString = isRealString(text);

        expect(validationString).toBe(false);
    });

    it('Should allow string with non-space characters', () => {
        var text = 'Nig    FoReal';

        var validationString = isRealString(text);

        expect(validationString).toBe(true);
    });
});
