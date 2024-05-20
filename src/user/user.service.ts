import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { login, password } = createUserDto;
    if (!login || !password) {
      throw new BadRequestException('Login and password are required');
    }
    const newUser = this.userRepository.create({ login, password });
    return this.userRepository.save(newUser);
  }

  async update(
    id: string,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<User> {
    const user = await this.findOne(id);
    const { oldPassword, newPassword } = updatePasswordDto;
    if (user.password !== oldPassword) {
      throw new ForbiddenException('Old password is incorrect');
    }
    user.password = newPassword;
    user.version += 1;
    return this.userRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }
}
