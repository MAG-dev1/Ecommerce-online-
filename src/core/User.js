export class User {
    username;
    password;

    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    isadmin() {
        throw new Error('debe ser un admin o cliente');
    }
}