"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HikingTrail = void 0;
const trail_type_enum_1 = require("./trail-type.enum");
class HikingTrail {
    constructor(data) {
        this.type = trail_type_enum_1.TrailType.HIKING;
        this.name = data.name;
        this.description = data.description;
        this.difficulty = data.difficulty;
        this.length = data.length;
        this.location = data.location;
    }
    getSafetyWarning() {
        return 'Hikers should bring sufficient water and be aware of changing weather conditions.';
    }
    getGearRecommendation() {
        return 'Recommended gear: Sturdy hiking boots, map, and a first-aid kit.';
    }
}
exports.HikingTrail = HikingTrail;
//# sourceMappingURL=hiking-trail.model.js.map