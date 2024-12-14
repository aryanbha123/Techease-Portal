import { keyframes } from '@emotion/react';
import axios from 'axios'; // Import axios
import {createAsyncThunk} from '@reduxjs/toolkit'
export const getUser = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/profile`, { withCredentials: true });
            return response.data.message;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
