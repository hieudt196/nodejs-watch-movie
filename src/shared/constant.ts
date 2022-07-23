export enum URole {
  SuperAdmin = 'super admin',
  Admin = 'admin',
  User = 'user',
}

export const DatabaseOption = {
  type: 'postgres' || process.env.TYPEORM_TYPE,
  host: 'localhost' || process.env.TYPEORM_HOST,
  port: 5432 || +process.env.TYPEORM_PORT,
  username: 'postgres' || process.env.TYPEORM_USERNAME,
  password: 'postgres' || process.env.TYPEORM_PASSWORD,
  database: 'Movie' || process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
};
export const DatabaseTest = {
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
};
