import React from "react";
import { StudentForm } from "./StudentForm";
import { StudentTable } from "./StudentTable";

export const ReactForm = () => {
  return (
    <div>
      <div>
        <StudentForm />
      </div>
      <div className="mt-4">
        <StudentTable />
      </div>
    </div>
  );
};
