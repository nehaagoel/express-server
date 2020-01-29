interface Ipermission {
    getUsers: IgetUser;
}

interface IgetUser {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}

interface Iuser {
    traineeEmail: string;
    reviewerEmail: string;
}
export { Ipermission, IgetUser, Iuser };