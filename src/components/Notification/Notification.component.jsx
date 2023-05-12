import Avatar from "../Avatar/Avatar.component";

import style from "./Notification.module.scss";

function Notification(props) {
  return (
    <div className={style.notification}>
      <Avatar text={props.text} />
      <aside>{props.subtext}</aside>
    </div>
  );
}

export default Notification;
