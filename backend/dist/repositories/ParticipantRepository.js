"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantRepository = void 0;
var Repository_1 = require("./repository/Repository");
var EncryptPasswordService_1 = require("../services/EncryptPasswordService");
var ParticipantSchema_1 = require("../schemas/ParticipantSchema");
var BadRequest_1 = __importDefault(require("../exceptions/BadRequest"));
var EmailService_1 = require("../services/EmailService");
var EventRepository_1 = require("./EventRepository");
var event_1 = __importDefault(require("../models/event"));
var emailService = new EmailService_1.EmailServices();
var ParticipantRepository = /** @class */ (function (_super) {
    __extends(ParticipantRepository, _super);
    function ParticipantRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eventRepository = new EventRepository_1.EventRepository(event_1.default);
        return _this;
    }
    ParticipantRepository.prototype.register = function (participant) {
        return __awaiter(this, void 0, void 0, function () {
            var error, createdParticipant, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        error = ParticipantSchema_1.validateParticipantSchema(participant).error;
                        if (error)
                            throw new Error(BadRequest_1.default.description);
                        return [4 /*yield*/, this.model.findOne({
                                email: participant["email"],
                            })];
                    case 1:
                        createdParticipant = _c.sent();
                        if (createdParticipant)
                            return [2 /*return*/, null];
                        _a = participant;
                        _b = "password";
                        return [4 /*yield*/, EncryptPasswordService_1.encryptPassword(participant["password"])];
                    case 2:
                        _a[_b] = (_c.sent());
                        createdParticipant = new this.model(participant);
                        return [4 /*yield*/, emailService.sendVerificationEmail(createdParticipant["_id"], participant["email"], participant["firstName"] + " " + participant["lastName"])];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, createdParticipant.save()];
                    case 4: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    ParticipantRepository.prototype.participate = function (id, eventId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var existParticipant;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.model.findById({
                            _id: id,
                        })];
                    case 1:
                        existParticipant = _b.sent();
                        if (!existParticipant)
                            return [2 /*return*/, null];
                        (_a = existParticipant.events) === null || _a === void 0 ? void 0 : _a.push(eventId);
                        return [4 /*yield*/, this.eventRepository.addParticipant(eventId, id)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, existParticipant.save()];
                    case 3: return [2 /*return*/, (_b.sent())];
                }
            });
        });
    };
    ParticipantRepository.prototype.unParticipate = function (id, eventId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var existParticipant;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.model.findById({
                            _id: id,
                        })];
                    case 1:
                        existParticipant = _c.sent();
                        if (!existParticipant)
                            return [2 /*return*/, null];
                        (_a = existParticipant.events) === null || _a === void 0 ? void 0 : _a.splice((_b = existParticipant.events) === null || _b === void 0 ? void 0 : _b.indexOf(eventId), 1);
                        return [4 /*yield*/, this.eventRepository.removeParticipant(eventId, id)];
                    case 2:
                        _c.sent();
                        return [4 /*yield*/, existParticipant.save()];
                    case 3: return [2 /*return*/, (_c.sent())];
                }
            });
        });
    };
    return ParticipantRepository;
}(Repository_1.Repository));
exports.ParticipantRepository = ParticipantRepository;
