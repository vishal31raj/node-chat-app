const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'admin';
        var text = 'hello everyone';        
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'admin';
        var latitude = 1;
        var longitude = 1;        
        var message = generateLocationMessage(from, latitude, longitude);

        expect(message).toMatchObject({from});
        expect(typeof message.createdAt).toBe('number');
        expect(message.url).toBe('https://www.google.com/maps?q=1,1');
    });
});