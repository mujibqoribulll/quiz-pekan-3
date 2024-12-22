import { useRouter } from "next/router";
import { useMutate } from "./useMutate";

const { useState, useEffect } = require("react");

export const useFunctionTodos = () => {
  const router = useRouter();
  const {
    function: { fetchData },
  } = useMutate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const [type, settype] = useState("");
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openAlert = (type, id) => {
    setSelectItem(id);
    settype(type);
    if (type === "edit" || type === "create") {
      openModal();
    } else {
      setAlertOpen(true);
    }
  };
  const closeAlert = () => setAlertOpen(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [todos, setTodos] = useState({
    data: null,
    isLoading: true,
    isError: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const getNoteById = async () => {
    try {
      let result = await await fetchData({
        url: `http://localhost:3000/api/todos/${selectItem}`,
        method: "GET",
      });
      setForm((prevState) => ({
        ...prevState,
        title: result?.data?.title,
        description: result?.data?.description,
      }));
    } catch (error) {}
  };

  const deleteSingleNote = async () => {
    if (selectItem !== null) {
      try {
        await fetchData({
          url: `http://localhost:3000/api/todos/${selectItem}`,
          method: "DELETE",
        });
        setSelectItem(null);
        router.reload();
      } catch (error) {}
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { description, title } = form;
    console.log("form", form);
    const method = type === "create" ? "POST" : "PATCH";
    if (!description || !title) {
      return null;
    }
    try {
      let url =
        type === "create"
          ? `http://localhost:3000/api/todos`
          : `http://localhost:3000/api/todos/${selectItem}`;
      await fetchData({
        url,
        method,
        payload: form,
      });
      router.reload();
      closeModal();
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if (selectItem !== null && type === "edit") {
      getNoteById();
    }
  }, [selectItem]);

  return {
    form,
    isModalOpen,
    todos,
    isAlertOpen,
    type,
    function: {
      openModal,
      closeModal,
      handleChange,
      handleSubmit,
      deleteSingleNote,
      closeAlert,
      openAlert,
    },
  };
};
