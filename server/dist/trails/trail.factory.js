"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrailFactory = void 0;
const common_1 = require("@nestjs/common");
const trail_type_enum_1 = require("./trail-type.enum");
const hiking_trail_model_1 = require("./hiking-trail.model");
const biking_trail_model_1 = require("./biking-trail.model");
let TrailFactory = class TrailFactory {
    createTrail(createTrailDto) {
        switch (createTrailDto.type) {
            case trail_type_enum_1.TrailType.HIKING:
                return new hiking_trail_model_1.HikingTrail(createTrailDto);
            case trail_type_enum_1.TrailType.BIKING:
                return new biking_trail_model_1.BikingTrail(createTrailDto);
            default:
                throw new common_1.BadRequestException(`Invalid trail type: ${createTrailDto.type}`);
        }
    }
};
exports.TrailFactory = TrailFactory;
exports.TrailFactory = TrailFactory = __decorate([
    (0, common_1.Injectable)()
], TrailFactory);
//# sourceMappingURL=trail.factory.js.map