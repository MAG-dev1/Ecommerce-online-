import { User } from './User.js';
export class Admin extends User{

    constructor(username, password){
        super(username, password);
    }

      isadmin(){
        return true;
    }
}