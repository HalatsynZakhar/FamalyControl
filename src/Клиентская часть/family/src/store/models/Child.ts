/**
 * @param { number } This is id child
 * @param { string } This is Name of User
 * @param { string } This is email of User
 *  @param { string } This is password of User
 * @param { string } This is Last Name of User
 * @param { boolean } This is status device of User
 * @param { number } This is Id of users
 */

export class Child {
    id!: number;
    userName!: string;
    password!: string;
    email!: string;
    lastName!: string;
    isActive!: boolean;
    parentId!: number;
}
