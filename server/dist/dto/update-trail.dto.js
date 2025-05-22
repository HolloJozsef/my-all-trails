"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTrailDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_trail_dto_1 = require("./create-trail.dto");
class UpdateTrailDto extends (0, mapped_types_1.PartialType)(create_trail_dto_1.CreateTrailDto) {
}
exports.UpdateTrailDto = UpdateTrailDto;
//# sourceMappingURL=update-trail.dto.js.map