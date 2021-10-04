import {getData} from "./app";
test("it fetches an api and returns success",async ()=>{
    const received= await getData();
    expect(received).toEqual("success");
})