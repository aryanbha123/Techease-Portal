import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.(`${process.env.REACT_APP_API_URL}/api/auth/login`, data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

