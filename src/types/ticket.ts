export type ticket = {
    ticket: {
        id: number;
        title: string;
        status: string;
        createdAt: any;
        messages: Array<{
            __typename?: "Message";
            id: number;
        }>;
        user: {
            __typename?: "User";
            firstName: string;
            lastName: string;
        };
    };
};
