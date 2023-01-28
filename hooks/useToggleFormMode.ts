import { useDispatch } from "react-redux";
const useToggleFormMode = (action: Function) => {
   const dispatch = useDispatch();

   return function () {
      dispatch(action());
   };
};

export default useToggleFormMode;
