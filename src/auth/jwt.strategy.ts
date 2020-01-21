import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { SecurityVars } from 'src/const/const-security';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: SecurityVars.getSecretOrKey(),
    });
  }

  async validate(payload: JwtPayload) {
    const { username } = payload;
    console.log(`PAYLOAD ---> ${payload.username}`);
    console.log(`PAYLOAD ---> ${payload.timevalidate}`);
    console.log(`PAYLOAD ---> ${Date.now() - payload.timevalidate}`);

    if (Date.now() - payload.timevalidate > SecurityVars.getTime()) { // 1 minuto
      throw new UnauthorizedException('Sessão expirada!');
    }

    const user = await this.userRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
