class Singleton {
    static instance: Singleton
    owner: string;

    private constructor(owner: string) {
        this.owner = owner;
    }

    static getInstance() {
        if(!Singleton.instance) {
                Singleton.instance = new Singleton('Randhir Kumar');
            return Singleton.instance;
        }
        
        return Singleton.instance;
    }
}


function fun () {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();
    if(singleton1 === singleton2) {
        console.log('Both are same instances');
    } else {
        console.log('Different instances');
    }
}

fun();