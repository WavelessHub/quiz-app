import { Toaster } from "react-hot-toast";
import { NextPage } from "next";

interface Props {}

const ToastProvider: NextPage<Props> = ({}) => {
  return <Toaster />;
};

export default ToastProvider;
