import { HttpStatus } from '@nestjs/common';
import { Mapper } from '@automapper/core';
import { InjectMapper, MapPipe } from '@automapper/nestjs';
import { Body, Controller, Get, HttpException, Post, UploadedFile, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'auth/auth';
import { UserEntity } from 'database-postgres/database-postgres';
import { UserDTO, userDTOSchema } from 'dtos/dtos';
import { JoiValidationPipe } from 'Tools/tools';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(
        private readonly _authService: AuthService,
        @InjectMapper() private readonly _mapper: Mapper,
    ) { }

    @Get('logger')
    login(): void {
        this._authService.setLogger();
    }

    @Post('file')
    @UseInterceptors(FileInterceptor('file'))
    getFile(@UploadedFile('file') file: any): void {
        return this._authService.setLogger();
    }

    @Post()
    @UsePipes(new JoiValidationPipe(userDTOSchema))
    async create(@Body(MapPipe(UserDTO, UserEntity)) user: UserEntity): Promise<UserDTO> {
        const response = await this._mapper.mapAsync(user, UserEntity, UserDTO);
        return response;
    }

    @Get('error')
    error(): void {
        throw new HttpException('funfa', HttpStatus.BAD_REQUEST);
    }
}
