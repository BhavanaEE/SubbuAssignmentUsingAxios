import {getData} from "./app";

test("it fetches an api and returns success",async ()=>{
    const received= await getData();
    const expected="success";
    expect(received).toEqual(expected);
})