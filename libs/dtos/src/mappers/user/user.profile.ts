import { InjectMapper, AutomapperProfile } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserEntity } from 'database-postgres/database-postgres';
import { UserDTO } from 'dtos/dtos';
import type { Mapper } from '@automapper/core';
import { createMap, MappingProfile } from '@automapper/core';

@Injectable()
export class UserProfile extends AutomapperProfile {
    constructor(@InjectMapper() readonly _mapper: Mapper) {
        super(_mapper);
    }

    override get profile(): MappingProfile {
        return (_mapper) => {
            createMap(_mapper, UserEntity, UserDTO);
            createMap(_mapper, UserDTO, UserEntity);
        };
    }

    // protected get mappingConfigurations(): MappingConfiguration[] {
        // the 3 createMap() above will get this `extend()`
        // return [extend(BaseEntity, BaseDto)];
    // }
}
