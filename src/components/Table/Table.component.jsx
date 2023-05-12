import Avatar from "../Avatar/Avatar.component";
import Badge from "../Badge/Badge.component";
import Search from "../Search/Search.component";

import {ReactComponent as DotsIcon} from "../../images/ThreeDots.svg";
import style from "./Table.module.scss";

export const TableStatus = {
  IN_PROGRESS: "In Progress",
  REJECTED: "Rejected",
  COMPLETED: "Completed",
  APPROVED: "Approved",
  PENDING: "Pending",
};

function Table(props) {
  return (
    <section className={style.table}>
      <header>
        <h2>{props.title}</h2>
        <Search />
        <Badge icon={DotsIcon} />
      </header>
      <table>
        <thead>
          <tr>
            <th>Manager</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, index) => (
            <tr key={index}>
              <td>
                <Avatar text={row.manager} />
              </td>
              <td>{row.date}</td>
              <td>{row.amount}</td>
              <td>{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
