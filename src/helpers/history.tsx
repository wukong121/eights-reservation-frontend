import {useLocation, useNavigate} from "react-router-dom";

interface HistoryType {
  navigate: ReturnType<typeof useNavigate> | null;
  location: ReturnType<typeof useLocation> | null;
}

export const history: HistoryType = {
  navigate: null,
  location: null,
};