
export function alias(aliasname: string) {

    return function (target: Object, propertyKey: string | symbol) {
        target['constructor']['alias'] = target['constructor']['_alias'] || {};
        target['constructor']['alias'][propertyKey] = aliasname;
    };
}

export class User implements UserInterface {
    @alias('Id')
    id: number;

    @alias('UserName')
    username: string;

    @alias('Password')
    password: string;

    @alias('SuperUser')
    isSuperUser: boolean;

    @alias('Active')
    isActive: boolean;

    @alias('CompanyId')
    companyID: number;

    constructor(args: any) {
        const fields = (<any>User)._alias;
        for (const field in fields) {
            if (fields.hasOwnProperty(field)) {
            const aliasname = fields[field];
            this[field] = args[aliasname];
            }
        }
    }
}

