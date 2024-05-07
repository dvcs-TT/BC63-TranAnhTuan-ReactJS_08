import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { reactFormActions } from "../store/ReactForm/sliceReactForm";

export const StudentForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const { studentEdit } = useSelector((state) => state.reactFormReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!studentEdit) {
      reset({
        id: "",
        name: "",
        phone: "",
        email: "",
      });

      return;
    }

    reset(studentEdit);
  }, [studentEdit]);
  return (
    <form
      onSubmit={handleSubmit((payload) => {
        if (!studentEdit) {
          dispatch(reactFormActions.addStudent(payload));
          return;
        }

        dispatch(reactFormActions.updateStudent(payload));
      })}
    >
      <h2 className="bg-dark text-warning p-3">Thông tin sinh viên</h2>
      <div className="row">
        <div className="col-6">
          <p>Mã SV</p>
          <input
            className="form-control"
            {...register("id", {
              required: "Vui lòng nhập mã SV",
              minLength: {
                value: 3,
                message: "ID có ít nhất 3 ký tự",
              },
              maxLength: {
                value: 6,
                message: "ID có nhiều nhất 6 ký tự",
              },
              disabled: !!studentEdit,
            })}
          />
          {errors?.id && <p className="text-danger">{errors?.id?.message}</p>}
        </div>
        <div className="col-6">
          <p>Họ tên</p>
          <input
            className="form-control"
            {...register("name", {
              required: "Vui lòng nhập họ tên",
            })}
          />
          {errors?.name && (
            <p className="text-danger">{errors?.name?.message}</p>
          )}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <p>Số điện thoại</p>
          <input
            className="form-control"
            {...register("phone", {
              required: "Vui lòng nhập số điện thoại",
              pattern: {
                value: /^\d{9,10}$/,
                message: "Vui lòng nhập đúng định dạng số điện thoại",
              },
              minLength: {
                value: 9,
                message: "Số điện thoại có ít nhất 9 chữ số",
              },
              maxLength: {
                value: 10,
                message: "Số điện thoại có nhiều nhất 10 chữ số",
              },
            })}
          />
          {errors?.phone && (
            <p className="text-danger">{errors?.phone?.message}</p>
          )}
        </div>
        <div className="col-6">
          <p>Email</p>
          <input
            className="form-control"
            {...register("email", {
              required: "Vui lòng nhập địa chỉ email",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Vui lòng nhập đúng định dạng email",
              },
            })}
          />
          {errors?.email && (
            <p className="text-danger">{errors?.email.message}</p>
          )}
        </div>
      </div>
      <div>
        {!studentEdit && <button className="btn btn-success">Thêm Mới</button>}

        {!!studentEdit && (
          <button className="btn btn-info ms-3">Cập nhật</button>
        )}
      </div>
    </form>
  );
};
