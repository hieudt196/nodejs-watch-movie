import { SetMetadata } from '@nestjs/common';
import { URole } from './constant';

export const Public = () => SetMetadata('isPublic', true);
export const Roles = (...roles: URole[]) => SetMetadata('roles', roles);
