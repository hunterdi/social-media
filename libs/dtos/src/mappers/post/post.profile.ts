import { createMap, MappingProfile } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import type { Mapper } from '@automapper/core';
import { PostEntity } from "database-postgres/database-postgres";
import { PostDTO } from "dtos/dtos";

export class PostProfile extends AutomapperProfile {
    constructor(@InjectMapper() readonly _mapper: Mapper) {
        super(_mapper);
    }

    override get profile(): MappingProfile {
        return (_mapper) => {
            createMap(_mapper, PostEntity, PostDTO);
            createMap(_mapper, PostDTO, PostEntity);
        };
    }
}