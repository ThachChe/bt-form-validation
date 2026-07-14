import { useState } from "react";
export default function FormStudent() {
  const [student, setStudent] = useState({
    maSV: "",
    name: "",
    phone: "",
    email: "",
  });

  const [listStudent, setListStudent] = useState([]);

  const getInfoStudent = (event) => {
    event.preventDefault();
    const isDuplicate = listStudent.some((item) => item.maSV === student.maSV);

    if (isDuplicate) {
      alert("Mã sinh viên này đã tồn tại! Vui lòng nhập mã khác.");
      return; // Dừng hàm lại, không chạy code phía dưới nữa
    }

    const cloneListStudent = [...listStudent];
    cloneListStudent.push(student);
    setListStudent(cloneListStudent);
  };

  const renderListInfo = (event) => {
    return listStudent.map((students) => {
      return (
        <tr key={students.maSV}>
          <th className="px-4 py-2">{students.maSV}</th>
          <th className="px-4 py-2">{students.name}</th>
          <th className="px-4 py-2">{students.phone}</th>
          <th className="px-4 py-2">{students.email}</th>
          <th className="px-4 py-2">
            <button
              onClick={() => handleDelete(students.maSV)}
              type="button"
              className="text-white bg-danger box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
  };

  const _findIndexInfo = (list, maSV) => {
    return list.findIndex((students) => students.maSV === maSV);
  };

  const handleDelete = (maSV) => {
    const index = _findIndexInfo(listStudent, maSV);

    if (index != 1) {
      const cloneListStudent = [...listStudent];
      cloneListStudent.splice(index, 1);
      setListStudent(cloneListStudent);
    }
  };

  const handleOnChange = (event) => {
    // console.log(123);
    const value = event.target.value;
    const name = event.target.name;
    console.log(name, value);
    setStudent({
      ...student,
      //student.maSV =value
      [name]: value,
    });
  };

  let disable =
    !student.maSV || !student.name || !student.phone || !student.email;

  console.log(student);
  return (
    <div className="flex">
      <form className="max-[70%] mx-auto pt-10">
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">
            Ma sinh vien
          </label>
          <input
            onChange={handleOnChange}
            type="text"
            name="maSV"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">
            Ho va Ten
          </label>
          <input
            onChange={handleOnChange}
            type="tel"
            name="name"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">
            So dien thoai
          </label>
          <input
            onChange={handleOnChange}
            type="phone"
            name="phone"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder=""
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">
            Email
          </label>
          <input
            onChange={handleOnChange}
            type="email"
            name="email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
          />
        </div>

        <button
          disabled={disable}
          onClick={getInfoStudent}
          type="submit"
          className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Submit
        </button>
      </form>

      <div className="w-[40%] mx-auto pt-10">
        <table>
          <thead>
            <tr>
              <th className="px-4 py-2">Mã Sinh Viên</th>
              <th className="px-4 py-2">Họ và Tên</th>
              <th className="px-4 py-2">Số Điện Thoại</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>{renderListInfo()}</tbody>
        </table>
      </div>
    </div>
  );
}
