    export interface Registration {
        canRegister: boolean;
    }

    export interface User {
        language: string;
        statusCode: string;
    }

    export interface RootObject {
        isSSOEnabled?: any;
        instalationType?: any;
        registration: Registration;
        user: User;
    }