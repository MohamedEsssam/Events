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
exports.EventRepository = void 0;
var Repository_1 = require("./repository/Repository");
var EventSchema_1 = require("../schemas/EventSchema");
var BadRequest_1 = __importDefault(require("../exceptions/BadRequest"));
var OrganizationRepository_1 = require("./OrganizationRepository");
var organization_1 = __importDefault(require("../models/organization"));
var EventRepository = /** @class */ (function (_super) {
    __extends(EventRepository, _super);
    function EventRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.organizationRepository = new OrganizationRepository_1.OrganizationRepository(organization_1.default);
        return _this;
    }
    /**OverLoading method getAll */
    EventRepository.prototype.getAll = function (searchQuery) {
        return __awaiter(this, void 0, void 0, function () {
            var events;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchQuery["title"] = searchQuery["title"]
                            ? {
                                $regex: new RegExp("^" + searchQuery["title"] + ".*$"),
                            }
                            : null;
                        return [4 /*yield*/, this.model
                                .find(searchQuery["title"] ? searchQuery : {})
                                .sort({ holdOn: "desc" })];
                    case 1:
                        events = _a.sent();
                        return [2 /*return*/, events];
                }
            });
        });
    };
    /**Override method create */
    EventRepository.prototype.create = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var error, createdEvent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        error = EventSchema_1.validateEventSchema(event).error;
                        if (error)
                            throw new Error(BadRequest_1.default.description);
                        createdEvent = new this.model(event);
                        return [4 /*yield*/, this.organizationRepository.addEvent(createdEvent["owner"], createdEvent["_id"])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, createdEvent.save()];
                    case 2: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    EventRepository.prototype.addParticipant = function (id, userId) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var existEvent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.model.findById({ _id: id })];
                    case 1:
                        existEvent = _b.sent();
                        if (!existEvent)
                            return [2 /*return*/, false];
                        (_a = existEvent === null || existEvent === void 0 ? void 0 : existEvent.participants) === null || _a === void 0 ? void 0 : _a.push(userId);
                        return [4 /*yield*/, existEvent.save()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    EventRepository.prototype.removeParticipant = function (id, userId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var existEvent;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.model.findById({ _id: id })];
                    case 1:
                        existEvent = _c.sent();
                        if (!existEvent)
                            return [2 /*return*/, false];
                        (_a = existEvent.participants) === null || _a === void 0 ? void 0 : _a.splice((_b = existEvent.participants) === null || _b === void 0 ? void 0 : _b.indexOf(userId), 1);
                        return [4 /*yield*/, existEvent.save()];
                    case 2:
                        _c.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return EventRepository;
}(Repository_1.Repository));
exports.EventRepository = EventRepository;
