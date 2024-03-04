import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(email);
        if (user && user.password === password) {
            const { email, password, ...rest } = user;
            return rest;
        }
        return null;
    }

    // used for passport jwt strategy.
    async login(user: any) {
        const payload = { name: user.name, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
