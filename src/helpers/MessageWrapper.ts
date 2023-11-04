import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState, store} from "../store";
import {message} from "antd";
import {alertActions} from "../store/alert.slice";

const MessageWrapper: React.FC = () => {
  const alert = useSelector((state: RootState) => state.alert.value);

  useEffect(() => {
    if (!alert || !alert?.showAfterRedirect) {
      store.dispatch(alertActions.clear());
      return;
    }
    message[alert.type](alert.message);
    store.dispatch(alertActions.clear());
  }, [alert])

  return null;
}

export default MessageWrapper;