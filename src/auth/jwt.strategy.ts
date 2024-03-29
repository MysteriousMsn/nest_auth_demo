import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'SECRET',
        })
    }

    async validate(payload: any){
        // if we want to pass more user information then we have to fetch and pass like below. 
        // whatever will be returned below will be available in req.user;
        // const user = await this.usersService.getById(payload.sub);
        return { id: payload.sub,
            name: payload.name,
            // ...user,
        };
    }
}