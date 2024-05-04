import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDisclosure } from "@nextui-org/react";
import { AuthContext } from "../../../../../../../providers/AuthContext";
import {
  getCourses,
  deleteCourse,
} from "./../../../../../../../services/course.service";
import {
  getSubjects,
  deleteSubjects,
} from "./../../../../../../../services/subjects.service";
import { getUsers } from "./../../../../../../../services/user.service";
import Modal from "./../../../components/Modal";
import ContentView from "../../../../components/ContentView";
import { Subject } from "./../../../components/Form";
import { Course } from "./../../../components/Form";
import {
  rowsCourse,
  columnsCourse,
  optionsFilterCourse,
  rowsSubject,
  columnsSubject,
  optionsFilterSubject,
} from "./data";
import { toast } from "sonner";

const SecondayContent = () => {
  const { accessToken, refreshToken, setAccessToken, setRefreshToken } =
    useContext(AuthContext);
  const { academicId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(1);
  const [valueFilter, setValueFilter] = useState(new Set([]));
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [isLoading, setIsloading] = useState(true);
  const [updatePage, setUpdatePage] = useState(false);
  const [getData, setGetData] = useState({});
  const [teachers, setTeachers] = useState([]);
  const isSubject = location.pathname.endsWith("/subject");
  const isCourse = location.pathname.endsWith("/course");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [elementEdit, setElementEdit] = useState("");

  useEffect(() => {
    const callAPI = async () => {
      try {
        if (updatePage) {
          setIsloading(true);
        }
        if (isSubject) {
          const responseTeacher = await getUsers(
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken,
            { rol: "docente" }
          );
          setTeachers(responseTeacher.elements);
          const params = {
            teacher:
              valueFilter.Profesor?.size > 0 ? valueFilter?.currentKey : null,
            search: search !== "" ? search : undefined,
          };
          const response = await getSubjects(
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken,
            academicId,
            params
          );
          setGetData({
            title: "Niveles academicos - Asignatura",
            elementName: "asignatura",
            rows: rowsSubject(response.elements),
            columns: columnsSubject,
            optionsFilter: optionsFilterSubject(responseTeacher.elements),
            totalPage: response.totalPage,
          });
        } else if (isCourse) {
          const params = {
            search: search !== "" ? search : undefined,
          };
          const response = await getCourses(
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken,
            academicId,
            params
          );
          setGetData({
            title: "Niveles academicos - Curso",
            elementName: "curso",
            rows: rowsCourse(response.elements),
            columns: columnsCourse,
            optionsFilter: optionsFilterCourse,
            totalPage: response.totalPage,
          });
        } else {
          navigate("../../");
        }
      } finally {
        setIsloading(false);
        setUpdatePage(false);
      }
    };
    callAPI();
  }, [isSubject, isCourse, navigate, search, offset, updatePage]);

  const handleEdit = (id) => {
    setElementEdit(id);
    onOpen();
  };

  const handleCreate = () => {
    setElementEdit("");
    onOpen();
  };

  const handleDelete = async (ids) => {
    try {
      const elementToDelete = Array.isArray(ids)
        ? ids
        : Array.from(String(ids), Number);
      const elementToDeleteFuntion =
        getData.elementName === "asignatura" ? deleteSubjects : deleteCourse;
      for (const element of elementToDelete) {
        await elementToDeleteFuntion(
          accessToken,
          setAccessToken,
          refreshToken,
          setRefreshToken,
          element
        );
        setSelectedKeys(prevKeys => {
          const newKeys = new Set(prevKeys);
          newKeys.delete(element);
          return newKeys;
      });
      }

      toast.success("Borrados con éxito");
    } catch (error) {
      toast.warning(error.message);
    } finally {
      setUpdatePage(true);
    }
  };
  return (
    <>
      <ContentView
        isLoading={isLoading}
        title={getData?.title}
        elementName={getData?.elementName}
        rows={getData?.rows}
        columns={getData?.columns}
        optionsFilter={getData?.optionsFilter}
        valueFilter={valueFilter}
        setValueFilter={setValueFilter}
        selectedKeys={selectedKeys}
        setSelectedKeys={setSelectedKeys}
        totalPage={getData?.totalPages}
        search={search}
        setSearch={setSearch}
        create
        handleCreate={handleCreate}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        offset={offset}
        setOffset={setOffset}
      />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        elementEdit={elementEdit}
        elementName={getData?.elementName}
      >
        {isSubject && (
          <Subject
            elementEdit={elementEdit}
            academicId={academicId}
            onClose={onClose}
            setUpdatePage={setUpdatePage}
            teachers={teachers}
          />
        )}
        {isCourse && (
          <Course
            elementEdit={elementEdit}
            academicId={academicId}
            onClose={onClose}
            setUpdatePage={setUpdatePage}
          />
        )}
      </Modal>
    </>
  );
};

export default SecondayContent;
