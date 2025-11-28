'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getSingleNote } from '@/lib/api';

export default function NoteDetailsClient() {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  const formattedDate = note?.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note?.createdAt}`;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {(error as Error).message}</p>}
      <h2>{note?.title}</h2>
      <p>{note?.content}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
