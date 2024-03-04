import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session_setializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  //below used for passport jwt strategy.
  imports:[UsersModule, PassportModule, JwtModule.register({
    secret:"SECRET",
    signOptions:{
      expiresIn: '60s'
    }
  })],

  //below used for passport local strategy.
  // imports:[UsersModule, PassportModule, PassportModule.register({session: true})],
  // providers: [AuthService, LocalStrategy, SessionSerializer],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
