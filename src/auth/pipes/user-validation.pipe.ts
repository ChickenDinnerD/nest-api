import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { UserRegistrationDto } from "../dto/user-registration.dto";

@Injectable()
        export class UserValidationPipe implements PipeTransform {
            constructor(private schema: UserRegistrationDto) {}
          
            transform(value: any, metadata: ArgumentMetadata) {
              const { error } = this.schema.validate(value);
              if (error) {
                throw new BadRequestException('Validation failed');
              }
              return value;
            }
        }