import axios from "axios";
import {logStatusFromAPICall} from "./app";

jest.mock('axios'); 

const mockedAxios = axios as jest.Mocked<typeof axios>; // type casting

test("When API call is successful and status is success",async () => {
    mockedAxios.get.mockResolvedValue({
        data:{
            message:"Hello",
            status:"success"
        }
    }); 
    let url="https://dog.ceo/api/breeds/image/random"
    let expected=true;
    let statusFromUrl = await logStatusFromAPICall(url);
    expect(statusFromUrl).toBe(expected);
});


test("When API call is successful and status is success",async () => {
    mockedAxios.get.mockResolvedValue({
        data:{
            message:"Hello",
            status:"error"
        }
    }); 
    let url="https://dog.ceo/api/breeds/image/random"
    let expected=false;
    let statusFromUrl = await logStatusFromAPICall(url);
    expect(statusFromUrl).toBe(expected);
});