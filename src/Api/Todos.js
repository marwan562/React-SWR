import axios from "axios";

const todosApi = axios.create({
  baseURL: "http://localhost:3500",
});
export const todosUrlEndpoint = "/todos";

const delay = () => new Promise((res) => setTimeout(() => res(), 500));

export const getTodos = async () => {
  await delay();
  const response = await todosApi.get(todosUrlEndpoint);
  return response.data;
};

export const addTodo = async ({ userId, title, completed }) => {
  await delay();
  if (Math.random() < 0.4) {
    throw new Error("Failed to add new item.");
  }

  const response = await todosApi.post(todosUrlEndpoint, {
    userId,
    title,
    completed,
  });
  return response.data;
};

export const updateTodo = async (todo) => {
  await delay();
  const response = await todosApi.patch(`${todosUrlEndpoint}/${todo.id}`, todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  return await todosApi.delete(`${todosUrlEndpoint}/${id}`, id);
};
