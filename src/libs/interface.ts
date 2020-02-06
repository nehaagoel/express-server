interface IAuth {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}
interface Iperm {
    getUsers: IAuth;
}
export default Iperm;