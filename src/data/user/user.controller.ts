import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AddUserDto, UpdateUserDto } from './user.dto';
import { ApiTags, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { ApiConsumesFromUrl, Roles, URole } from 'src/shared';
import { User } from './user.entity';
@ApiTags('User')
@ApiBearerAuth('access-token')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/add')
  @ApiConsumes(ApiConsumesFromUrl)
  @Roles(URole.SuperAdmin)
  async addUser(@Body() createUserDto: AddUserDto): Promise<User> {
    return this.userService.addUser(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/find/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch('update')
  @ApiConsumes(ApiConsumesFromUrl)
  update(@Body() updateUserDto: UpdateUserDto, @Req() req) {
    const id = req.user.id;
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
