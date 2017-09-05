'use strict';

module.exports = app =>{
    class User extends app.Service{
        async find(uid){
            return {
                name: 'test',
                age: '123',
                id:uid
            };
        }
    }
    return User
};