export type ticketMessage = {
    __typename?: 'Message';
    id: number;
    text: string;
    user: {
        __typename?: 'User';
        firstName: string;
        lastName: string;
    };
}