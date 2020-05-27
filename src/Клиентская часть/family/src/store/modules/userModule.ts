import {VuexModule,Module,Action, Mutation, getModule} from 'vuex-module-decorators';
import store from '@/store/index'
import { User } from '../models/User';
import axios from 'axios';

@Module ({store, name: "Users", dynamic: true})
class UserModule extends VuexModule{
    user = new User ()
    message: String = ""

    @Mutation
    private userCommit(user: User) {
        this.user = user
    }

    @Mutation
    private messageCommit(message: string){
        this.message = message
    }


    @Action ({commit: "userCommit"})
    public async CreateAccount (user: User) {
        const response = await axios.post( "account", user);

/*
        this.userCommit(user);
        this.context.commit("userCommit", user);
*/
        return response.data
    }


    get User(){
        return this.user;
    }

    get Message(){
        return this.message;
    }
}
export default getModule(UserModule);