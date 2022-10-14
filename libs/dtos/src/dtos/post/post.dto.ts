import { AutoMap } from "@automapper/classes";
import { UserDTO } from "..";

export class PostDTO {
    @AutoMap()
    title!: string;

    @AutoMap()
    description!: string;

    @AutoMap()
    isPublished!: boolean;

    @AutoMap(() => UserDTO)
    user?: UserDTO;
}