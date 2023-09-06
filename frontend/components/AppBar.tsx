import { useAuth } from "@pangeacyber/react-auth";

import Link from "next/link";
import React from "react";

const AppBar = () => {
  const {
    authenticated,
    loading,
    error,
    user,
    client,
    login,
    logout,
    getToken,
  } = useAuth();

  return (
    <header>
      <div className="nav">
        <Link href={"/"}>Home</Link>
        {authenticated && (
          <Link href={"/user"}>Profile ({user.profile.first_name})</Link>
        )}
      </div>
      <div className="actions">
        {authenticated && (
          <button className="header-action" onClick={() => logout(false)}>
            Sign Out
          </button>
        )}
        {!authenticated && (
          <button className="header-action" onClick={() => login()}>
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};

export default AppBar;
