import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { reactFormActions } from "../store/ReactForm/sliceReactForm";

export const StudentTable = () => {
  const { studentList } = useSelector((state) => state.reactFormReducer);
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const keyStudentSearch = searchParams.get("student");
  const newStudentList = studentList.filter((val) =>
    val.name
      .toLowerCase()
      .includes((keyStudentSearch || "").toLocaleLowerCase())
  );

  return (
    <div>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { newStudentList.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch(reactFormActions.deleteStudent(student.id))
                    }
                  >
                    Xóa
                  </button>
                  <button
                    className="btn btn-info ms-3"
                    onClick={() =>
                      dispatch(reactFormActions.editStudent(student))
                    }
                  >
                    Sửa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
