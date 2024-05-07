import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentList: [],
  studentEdit: null,
};

export const { reducer: reactFormReducer, actions: reactFormActions } =
  createSlice({
    initialState,
    name: "ReactForm",
    reducers: {
      addStudent: (state, { payload }) => {
        state.studentList.push(payload);
      },
      deleteStudent: (state, { payload }) => {
        state.studentList = state.studentList.filter(
          (student) => student.id !== payload
        );
      },
      editStudent: (state, { payload }) => {
        state.studentEdit = payload;
      },

      updateStudent: (state, { payload }) => {
        state.studentList = state.studentList.map((student) =>
          student?.id !== payload.id ? student : payload
        );

        state.studentEdit = null;
      },
    },
  });
