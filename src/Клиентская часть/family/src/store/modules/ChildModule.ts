import {VuexModule,Module,Action, Mutation, getModule} from 'vuex-module-decorators';
import store from '@/store/index'
import { Child } from "../models/Child";
import axios from 'axios';


@Module ({store, name: "childs", dynamic: true})
class ChildModule extends VuexModule{
    child = new Child ()
    childs: Child [] = []

    /**
     *
     *
     * @param { Child } this is object Child
     * child commit is function which edit state child.
     *
     */
    @Mutation
    private childCommit(child: Child[]) {
        this.childs = child
    }


    /**
     *
     *
     * @param { Child } this is object Child
     * child commit is function which edit state child.
     *
     */
    @Mutation
    private messageCommit(child: Child){
        this.child = child
    }

    /**
     * @param { Promise }
     * "getResponse" ( this is a function whith make request in server)
     * @return { Response.data }
     */
    @Action ({commit: "childCommit"})
    public async getResponse (){
        const Response = await axios.get("https://localhost:44351/api/user")
        return Response.data
    }


    /**
     * @param { Promise }
     * "getResponse" ( this is a function whith make request in server)
     * @return { Response.data }
     */
    @Action ({commit: "messageCommit"})
    public async CreateUser (child: Child) {
        const response = await axios.post( "https://localhost:44351/api/user", child);

        return response.data
    }


    get getChild  () {
        return this.child;
    }

    get getChilds () {
        return this.childs;
    }
}
export default getModule(ChildModule);