import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks";
import { NoteRoutes } from "../notes/routes/NoteRoutes";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status == "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<NoteRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/* Login y registro */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}

      {/* NotesApp */}
      {/* <Route path="/*" element={<NoteRoutes />} /> */}
    </Routes>
  );
};
