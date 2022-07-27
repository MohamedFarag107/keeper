import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiCloseLine } from "react-icons/ri";
import Card from "../Card/Card";

import { notesActions } from "../../store/notesSlice";

function Notes() {
  const {notes} = useSelector((state) => state.notes);
  const dispatch = useDispatch()
  const deleteOne = (id) => {
    dispatch(notesActions.deleteNote(id));
  };
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return (
          <Card key={note.id}>
            <div
              className="p-4 rounded-md"
              style={{
                backgroundColor: note.taskColor.lightBG,
                color: note.taskColor.text,
              }}
            >
              <div className="flex justify-between items-center">
                <span>
                  <h1 className="font-bold text-2xl">{note.title}</h1>
                  <p>{note.time}</p>
                </span>
                <RiCloseLine
                  onClick={()=>deleteOne(note.id)}
                  className="text-[20px]"
                />
              </div>
              <div className="pt-4">
                <p>{note.content}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

export default Notes;
