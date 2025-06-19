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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTrailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const trail_type_enum_1 = require("../trails/trail-type.enum");
class CreateTrailDto {
}
exports.CreateTrailDto = CreateTrailDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'Sunset Trail',
        description: 'The name of the trail',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: 'A beautiful sunset trail with scenic views.',
        description: 'Description of the trail',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '',
        description: 'directions',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "directions", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        example: '45.54',
        description: 'Latitude',
    }),
    __metadata("design:type", Number)
], CreateTrailDto.prototype, "lat", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        example: '45.54',
        description: 'Longitude',
    }),
    __metadata("design:type", Number)
], CreateTrailDto.prototype, "lon", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "length", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'easy',
        description: 'Level of dificulty',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "difficulty", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    (0, swagger_1.ApiProperty)({
        example: 4.5,
        description: 'Rating out of 5',
        minimum: 0,
        maximum: 5,
    }),
    __metadata("design:type", Number)
], CreateTrailDto.prototype, "rating", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        example: '2 hours',
        description: 'Estimated time to complete the trail',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "estimatedTime", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'Austria',
        description: 'Country/Region',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "location", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        example: 'https://example.com/trail.jpg',
        description: 'Image URL of the trail',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "imageUrl", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(trail_type_enum_1.TrailType),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        enum: trail_type_enum_1.TrailType,
        example: trail_type_enum_1.TrailType.HIKING,
        description: 'The type of the trail',
    }),
    __metadata("design:type", String)
], CreateTrailDto.prototype, "type", void 0);
//# sourceMappingURL=create-trail.dto.js.map