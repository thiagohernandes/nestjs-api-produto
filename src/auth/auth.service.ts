import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { SignedUser } from './dto/signed-user';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {
  }

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<SignedUser> {
    const userName = await this.userRepository.validateUserPassword(authCredentialsDto);

    if (!userName) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const timeCalc = Date.now();

    const payload: JwtPayload = { username: userName, timevalidate: timeCalc};
    const token = await this.jwtService.sign(payload);

    return { username: userName, timecalc: timeCalc, accesstoken: token };
  }
}
