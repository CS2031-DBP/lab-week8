import axios, { type AxiosResponse } from "axios";

const BACKEND_URL: string = "http://localhost:8080";

export type Student = {
  id: number | null;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  age: number;
  description: string;
  password: string;
};

export async function studentPost(student: Student): Promise<AxiosResponse> {
  try {
    const response = await axios.post(`${BACKEND_URL}/student`, student);
    console.log(response);
    return response;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}

export async function studentGet(): Promise<AxiosResponse> {
  try {
    const response = await axios.get(`${BACKEND_URL}/student`);
    console.log(response);
    return response;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}

export async function studentPut(student: Student): Promise<AxiosResponse> {
  try {
    const response = await axios.put(`${BACKEND_URL}/student/${student.id}`, student);
    console.log(response);
    return response;
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}
