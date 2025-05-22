"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailsController = void 0;
const common_1 = require("@nestjs/common");
const trails_service_1 = require("./trails.service");
const create_trail_dto_1 = require("../dto/create-trail.dto");
const update_trail_dto_1 = require("../dto/update-trail.dto");
const swagger_1 = require("@nestjs/swagger");
const trail_entity_1 = require("../trail.entity");
let TrailsController = class TrailsController {
    constructor(trailsService) {
        this.trailsService = trailsService;
    }
    async getTrailById(id) {
        const trail = await this.trailsService.getTrailById(id);
        if (!trail) {
            throw new common_1.NotFoundException(`Trail with ID ${id} not found`);
        }
        return trail;
    }
    getAllTrails() {
        return this.trailsService.getTrails();
    }
    async createTrail(createTrailDto) {
        return this.trailsService.createTrail(createTrailDto);
    }
    async updateTrail(id, updateTrailDto) {
        return this.trailsService.updateTrail(Number(id), updateTrailDto);
    }
    async deleteTrail(id) {
        return this.trailsService.deleteTrail(Number(id));
    }
};
exports.TrailsController = TrailsController;
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'One trail', type: trail_entity_1.Trail }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TrailsController.prototype, "getTrailById", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all trails' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of trails', type: [trail_entity_1.Trail] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TrailsController.prototype, "getAllTrails", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new trail' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Trail created successfully',
        type: trail_entity_1.Trail,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trail_dto_1.CreateTrailDto]),
    __metadata("design:returntype", Promise)
], TrailsController.prototype, "createTrail", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an existing trail' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trail updated', type: trail_entity_1.Trail }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_trail_dto_1.UpdateTrailDto]),
    __metadata("design:returntype", Promise)
], TrailsController.prototype, "updateTrail", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a trail' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Trail deleted successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TrailsController.prototype, "deleteTrail", null);
exports.TrailsController = TrailsController = __decorate([
    (0, swagger_1.ApiTags)('trails'),
    (0, common_1.Controller)('trails'),
    __metadata("design:paramtypes", [trails_service_1.TrailsService])
], TrailsController);
//# sourceMappingURL=trails.controller.js.map