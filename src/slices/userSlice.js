import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

// const usersAdapter = createEntityAdapter();
// const initialState = usersAdapter.getInitialState();
const initialState = {}

export const fetchUsers = createAsyncThunk(
 'users/fetchUsers',
 async () => {
    const response = await axios.get('https://dummyjson.com/users?limit=10');
    console.log('@@@@@@@@@', response.data.users)
    return response.data.users;
 }
)

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        // любые редьюсеры, которые нам нужны
      },
      extraReducers: (builder) => {
        builder
          // Вызывается прямо перед выполнением запроса
          .addCase(fetchUsers.pending, (state) => {
            state.loadingStatus = 'loading';
            state.error = null;
          })
          // Вызывается в том случае если запрос успешно выполнился
          .addCase(fetchUsers.fulfilled, (state, action) => {
            // Добавляем пользователя
            // usersAdapter.addOne(state, action);
            console.log('actionPayload', action.payload);
            console.log(state.users, 'state');
            state.users = action.payload;
            state.loadingStatus = 'idle';
            state.error = null;
          })
          // Вызывается в случае ошибки
          .addCase(fetchUsers.rejected, (state, action) => {
            state.loadingStatus = 'failed';
            state.error = action.error;
          });
      },
});
export default userSlice.reducer;

