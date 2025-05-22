"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailsModule = void 0;
const common_1 = require("@nestjs/common");
const trails_controller_1 = require("./trails.controller");
const trails_service_1 = require("./trails.service");
const trail_entity_1 = require("../trail.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TrailsModule = class TrailsModule {
};
exports.TrailsModule = TrailsModule;
exports.TrailsModule = TrailsModule = __decorate([
    (0, common_1.Module)({
        controllers: [trails_controller_1.TrailsController],
        providers: [trails_service_1.TrailsService],
        exports: [trails_service_1.TrailsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([trail_entity_1.Trail])],
    })
], TrailsModule);
//# sourceMappingURL=trails.module.js.map