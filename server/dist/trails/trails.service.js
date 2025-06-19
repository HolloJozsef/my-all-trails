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
exports.TrailsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const fs = require("fs");
const path = require("path");
const trail_entity_1 = require("../trail.entity");
const typeorm_2 = require("typeorm");
const trail_factory_1 = require("./trail.factory");
let TrailsService = class TrailsService {
    constructor(trailRepository, trailFactory) {
        this.trailRepository = trailRepository;
        this.trailFactory = trailFactory;
        this.trailsFilePath = path.join(__dirname, '../data/trails.json');
    }
    getTrailsFromJSON() {
        const data = fs.readFileSync(this.trailsFilePath, 'utf8');
        return JSON.parse(data);
    }
    async getTrails() {
        return this.trailRepository.find();
    }
    async getTrailById(id) {
        return this.trailRepository.findOne({ where: { id } });
    }
    async createTrail(createTrailDto) {
        const trailObject = this.trailFactory.createTrail(createTrailDto);
        console.log(`New ${trailObject.type} trail created: ${trailObject.name}`);
        console.log(`Safety Warning: ${trailObject.getSafetyWarning()}`);
        console.log(`Gear Recommendation: ${trailObject.getGearRecommendation()}`);
        const newTrailEntity = this.trailRepository.create(createTrailDto);
        return this.trailRepository.save(newTrailEntity);
    }
    async updateTrail(id, updateTrailDto) {
        const trail = await this.trailRepository.findOne({ where: { id } });
        if (!trail) {
            throw new common_1.NotFoundException(`Trail with id ${id} not found`);
        }
        const updatedTrail = { ...trail, ...updateTrailDto };
        return await this.trailRepository.save(updatedTrail);
    }
    async deleteTrail(id) {
        const result = await this.trailRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Trail with id ${id} not found`);
        }
        return { message: `Trail with id ${id} deleted successfully` };
    }
};
exports.TrailsService = TrailsService;
exports.TrailsService = TrailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(trail_entity_1.Trail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        trail_factory_1.TrailFactory])
], TrailsService);
//# sourceMappingURL=trails.service.js.map