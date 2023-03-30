class User{
    _varsta; // protected
    #email; //private
    constructor(id,nume,email, varsta){
        //setam proprietatile
        this.id = id;
        this.nume = nume;
        this.#email = email;
        this._varsta = varsta;
    }
    get email(){
        console.log('sunt in getter de email');
        return this.#email;
    }
    set email(newEmail){
        console.log('sunt in setter de email');
        
        this.#email = newEmail;
    }





    get myAge(){
        return this._varsta;
    }

    set myAge(varstaNoua){
        if(varstaNoua >0){
            this._varsta = varstaNoua;
        }
        else{
             throw 'Error: invalid data !'; 
            // console.error('Error');
        }
    }


    mananca (claorii){
        console.log(`Mananca ${claorii} calorii pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} ore pe zi`);
    }
}
export {User}
