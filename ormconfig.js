module.exports = {
  type: process.env.TYPEORM_TYPE | 'postgres',
  host: process.env.TYPEORM_HOST | 'localhost',
  port: parseInt(process.env.TYPEORM_PORT) | 5432,
  username: process.env.TYPEORM_USERNAME | 'postgres',
  password: process.env.TYPEORM_PASSWORD | 'postgres',
  database: process.env.TYPEORM_DATABASE | 'Movie',
  logging: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migration/**/*.js'],
  cli: {
    entitiesDir: 'src/common/entities/*.entity.ts',
    migrationsDir: 'src/migration',
  },
  synchronize: false,
};
