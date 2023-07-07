import React from "react";
import { useStore } from "../store/store";

const DataTable: React.FC = () => {
  const { formData } = useStore();
  return (
    <div className="m-4 md:max-w-md md:mx-auto border rounded p-1 md:p-2 ">
      {formData.length > 0 ? (
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="">Name</th>
              <th className="">Email</th>
              <th className="">Age</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data) => (
              <tr key={data.id} className="border-t">
                <td className="px-4 py-2 text-gray-400">{data.name}</td>
                <td className="px-4 py-2 text-gray-400">{data.email}</td>
                <td className="px-4 py-2 text-gray-400">{data.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No data to display</p>
      )}
    </div>
  );
};

export default DataTable;
