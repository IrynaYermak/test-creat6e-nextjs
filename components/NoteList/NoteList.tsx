import NoteItem from '../NoteItem/NoteItem';
import { Note } from '@/lib/api';

type Props = {
  notes: Note[];
};

export default function NoteList({ notes }: Props) {
  return (
    <ul>
      {notes.map(note => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
}
