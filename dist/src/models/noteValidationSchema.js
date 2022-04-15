"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidation = void 0;
const yup_1 = require("yup");
exports.bodyValidation = yup_1.object({
    title: yup_1.string().required(),
    description: yup_1.string().required(),
    year: yup_1.number().required().integer(),
    isPublic: yup_1.boolean().required(),
    isCompleted: yup_1.boolean().required(),
});
//# sourceMappingURL=noteValidationSchema.js.map