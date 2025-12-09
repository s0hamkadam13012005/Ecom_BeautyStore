import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/";

export const userRequest = axios.create({
    baseURL:BASE_URL
})


// export const userRequest = axios.create({ baseURL: BASE_URL });
// You are:

// Creating a new axios instance

// Pre-configured with:

// baseURL

// And exporting it so the whole app can use it

// So now this is TRUE:

// js
// Copy code
// userRequest.get(...)
// userRequest.post(...)
// userRequest.put(...)
// userRequest.delete(...)
// All work ✅
// All behave EXACTLY like axios.get/post/etc ✅
// But they automatically attach:

// bash
// Copy code
// http://localhost:3000/api/v1/