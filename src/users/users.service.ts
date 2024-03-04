import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
}
@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john',
            password: '123456',
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane',
            password: '123456',
        },
    ];

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email);
    }
}
