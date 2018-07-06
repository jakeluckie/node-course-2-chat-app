const _ = require('lodash');

class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var user = this.getUser(id);
        
        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
            // var arrayRes = _.pullAllBy(this.users, [{'id':id}], 'id');
        }
        return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    // How I coded...
    // removeUser (id) {
    //     var deletedUser = this.users.filter((user) => user.id === id);
    //     var arrayRes = _.pullAllBy(this.users, [{'id':id}], 'id');

    //     return {deletedUser, arrayRes};
    // }
    // getUser (id) {
    //     var findUser = this.users.filter((user) => user.id === id);
    //     return findUser;
    // }

    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {Users};
// class Person {
//     constructor (name, age) {
//         console.log(name, age);
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

// var me = new Person('Jake', 31);
// var description = me.getUserDescription();
// console.log(description);
