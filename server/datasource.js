// datasource.js
const dotenv = require('dotenv');
const typeorm = require('typeorm');

console.log("1. Starting datasource.js...");

// Load environment variables
dotenv.config();
console.log("2. dotenv configured.");

// Log the variables to ensure they are loaded correctly
console.log(`   -> HOST: ${process.env.DB_HOST}`);
console.log(`   -> PORT: ${process.env.DB_PORT}`);
console.log(`   -> USER: ${process.env.DB_USERNAME}`);
console.log(`   -> DB: ${process.env.DB_NAME}`);

const dataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migration/*.js'],
    synchronize: false,
};

console.log("3. dataSourceOptions object created.");

// The script will likely hang on the next line if it's a connection issue
const dataSource = new typeorm.DataSource(dataSourceOptions);

console.log("4. DataSource object instantiated."); // We probably won't see this line

module.exports = {
    dataSource: dataSource
};