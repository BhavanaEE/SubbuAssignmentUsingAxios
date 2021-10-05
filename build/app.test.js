"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const app_1 = require("./app");
jest.mock('axios');
const mockedAxios = axios_1.default; // type casting
test("When API call is successful and status is success", () => __awaiter(void 0, void 0, void 0, function* () {
    mockedAxios.get.mockResolvedValue({
        data: {
            message: "Hello",
            status: "success"
        }
    });
    let url = "https://dog.ceo/api/breeds/image/random";
    let expected = true;
    let statusFromUrl = yield (0, app_1.logStatusFromAPICall)(url);
    expect(statusFromUrl).toBe(expected);
}));
test("When API call is successful and status is success", () => __awaiter(void 0, void 0, void 0, function* () {
    mockedAxios.get.mockResolvedValue({
        data: {
            message: "Hello",
            status: "error"
        }
    });
    let url = "https://dog.ceo/api/breeds/image/random";
    let expected = false;
    let statusFromUrl = yield (0, app_1.logStatusFromAPICall)(url);
    expect(statusFromUrl).toBe(expected);
}));
