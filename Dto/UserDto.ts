class User {
    private _email: string;
    private _nombres: string;
    private _apellidos: string;
    private _telefono: string;
    private _domicilio: string;
    private _password: string
  static username: any;
    constructor(
        email: string, nombres: string,
        apellidos: string, telefono: string,
        domicilio:string, password: string
    ) {
        this._email = email;
        this._nombres = nombres;
        this._apellidos = apellidos;
        this._telefono = telefono;
        this._domicilio = domicilio;
        this._password = password
    }

    //getters
    get email(): string{
        return this._email
    }
    get nombres(): string{
        return this._nombres
    }

    get apellidos(): string{
        return this._apellidos
    }

    get telefono(): string{
        return this._telefono
    }
    get domicilio(): string{
        return this._domicilio
    }
    get password(): string{
        return this._password
    }

    //setters
    set email(email:string){
        this._email = email
    }

    set nombres(nombres:string){
        this._nombres = nombres
    }

    set apellidos(apellidos:string){
        this._apellidos = apellidos
    }

    set telefono(telefono:string){
        this._telefono = telefono
    }
    set domicilio(domicilio:string){
        this._domicilio = domicilio
    }
    set password(password:string){
        this._password = password
    }
}

export default User;