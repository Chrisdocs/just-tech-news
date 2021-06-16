const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020')
});

test('format_plural() returns a plural if input is multiple', () => {

    expect(format_plural('Tiger', 2)).toBe('Tigers')
})

test('format_url() should return a simplified url string', () => {
    const url1 = format_url('http://test.com/test/1')
    const url2 = format_url('http://www.cool.com/abc/')
    const url3 = format_url('http://www.wows.com?q=what')

    expect(url1).toBe('test.com');
    expect(url2).toBe('cool.com');
    expect(url3).toBe('wows.com')
})