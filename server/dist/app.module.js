"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const trail_entity_1 = require("./trail.entity");
const trails_module_1 = require("./trails/trails.module");
const dotenv = require("dotenv");
const trails_service_1 = require("./trails/trails.service");
const trails_controller_1 = require("./trails/trails.controller");
const search_controller_1 = require("./search/search.controller");
const search_service_1 = require("./search/search.service");
const search_module_1 = require("./search/search.module");
const trail_factory_1 = require("./trails/trail.factory");
dotenv.config();
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT, 10),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [trail_entity_1.Trail],
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forFeature([trail_entity_1.Trail]),
            trails_module_1.TrailsModule,
            search_module_1.SearchModule,
        ],
        controllers: [app_controller_1.AppController, trails_controller_1.TrailsController, search_controller_1.SearchController],
        providers: [app_service_1.AppService, trails_service_1.TrailsService, search_service_1.SearchService, trail_factory_1.TrailFactory],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map