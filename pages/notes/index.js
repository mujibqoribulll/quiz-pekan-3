import AlertPopup from "@/components/alert-popup";
import ButtonText from "@/components/buttons/button-text";
import Card from "@/components/card";
import { useFunctionTodos } from "@/hooks/useFunctionTodos";
import { useMutate } from "@/hooks/useMutate";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LayoutComponent = dynamic(() => import("@/components/layouts"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const LayoutModal = dynamic(() => import("@/components/modal"));

const Notes = (props) => {
  const { todos } = props;
  const {
    form,
    isModalOpen,
    isAlertOpen,
    type,
    function: {
      closeModal,
      openModal,
      handleChange,
      handleSubmit,
      deleteSingleNote,
      closeAlert,
      openAlert,
    },
  } = useFunctionTodos();

  return (
    <LayoutComponent metaData="Notes">
      <div className="lg:flex space-y-3 flex-row-reverse justify-center">
        <div className="flex flex-row mt-3 justify-center lg:justify-start items-start">
          <ButtonText
            label="Add note"
            styleContainer={
              "animate-none bg-gray-900 text-white w-[30rem] md:w-[10rem]"
            }
            onPress={() => openAlert("create")}
          />
        </div>
        <div className=" mx-3 gap-3 flex lg:flex-row flex-wrap justify-center items-center">
          {todos?.data?.map((item, index) => (
            <Card
              key={index}
              todo={item}
              onPress={(type, id) => openAlert(type, id)}
            />
          ))}
        </div>
      </div>
      <LayoutModal isOpen={isModalOpen} onClose={closeModal} type={type}>
        <h2 className="text-xl font-semibold mb-2 outline-gray-500/75">
          {type === "create" ? "Create a Task" : "Edit a Task"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="py-2 gap-x3 flex flex-col">
            <label htmlFor="title" className="text-lg font-normal">
              Title
            </label>
            <input
              placeholder="Title"
              name="title"
              value={form.title}
              className="border-gray-500/75 border p-2 rounded-lg"
              onChange={handleChange}
            />
          </div>
          <div className="py-2 gap-x3 flex flex-col">
            <label htmlFor="title" className="text-lg font-normal">
              description
            </label>
            <textarea
              placeholder="description"
              name="description"
              value={form.description}
              className="border-gray-500/75 border p-2 rounded-lg"
              onChange={handleChange}
            />
          </div>
          <ButtonText
            // onClick={closeModal}
            label={type === "create" ? "Submit" : "Edit"}
            type="submit"
            styleContainer={
              "animate-none bg-gray-900 text-white w-[30rem] md:w-[10rem]"
            }
          />
        </form>
      </LayoutModal>
      <AlertPopup
        isOpen={isAlertOpen}
        onClose={closeAlert}
        onPress={deleteSingleNote}
      />
    </LayoutComponent>
  );
};

export default Notes;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/todos", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todos = await res.json();
  return { props: { todos } };
}
