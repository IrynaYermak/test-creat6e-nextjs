import axios from 'axios';

export type Note = {
  id: string;
  title: string;
  content: string;
  category: string;
  user: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};

const myToken = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study';

export const getNotes = async () => {
  console.log(myToken);

  const res = await axios.get<NoteListResponse>('/notes', {
    headers: {
      Authorization: `Bearer ${myToken}`,
    },
  });
  return res.data;
};
