const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id:'1',
            name: 'mikey',
            room: 'Get em'
        },{
            id:'2',
            name: 'fecker',
            room: 'Get demered'
        },{
            id:'3',
            name: 'sicko',
            room: 'Get em'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Jake',
            room: 'DBZ'
        };

        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);
        // console.log(users.users);

    });

    it('should remove a user', () => {
        var user = users.removeUser('3');

        expect(user.id).toBe('3');
        expect(users.users.length).toBe(2);
        // expect(user.arrayRes).toExclude(user.user);
        // expect(user.user).toNotBe(undefined);
    });

    it('should not remove user', () => {
        var user = users.removeUser('4');

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
        // var usersLength = users.users.length;
        // var res = users.removeUser('5');

        // expect(usersLength).toEqual(3);
    });

    it('should find user', () => {
        var id = '2';
        var res = users.getUser(id);
        expect(res.id).toEqual(id);
    });

    it('should not find user', () => {
        var res = users.getUser('4');
        expect(res).toEqual(undefined);
    });

    it('should return names for "Get em" room', () => {
        var userList = users.getUserList('Get em');

        expect(userList).toEqual(['mikey', 'sicko']);
    });

    it('should return names for "Get demered" room', () => {
        var userList = users.getUserList('Get demered');

        expect(userList).toEqual(['fecker']);
    });

});