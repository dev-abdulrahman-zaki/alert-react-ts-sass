import { X } from "lucide-react";
import "./index.scss";
import { ReactNode, useState } from "react";
import { AlertTypes } from "../../Types";

interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function Alert({
  type = "alert-default",
  icon,
  title,
  description,
  children,
}: IProps) {
  const [hide, setHide] = useState<boolean>(false);

  return (
    <div className={`${type} ${hide ? "hide" : ""}`}>
      <div className="alert-header">
        <div className="alert-title">
          {icon}
          <h4>{title}</h4>
        </div>
        <span>
          <X size={20} onClick={()=>{setHide(true)}} />
        </span>
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
}
