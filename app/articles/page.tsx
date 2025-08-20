import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

const ArticlesPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>this is the article page</h1>
      </div>
    </ProtectedRoute>
  );
};

export default ArticlesPage;
