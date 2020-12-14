import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../router/cordinator";

export function useUnProtectedPage() {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      goToFeed(history)
          
    }

    
  }, [history]);
}

