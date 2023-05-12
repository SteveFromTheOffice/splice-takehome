import Table, {TableStatus} from "../../components/Table/Table.component";
import style from "./Dashboard.module.scss";

const SPENDING_DATA = [
  {manager: "Koray Okumus", date: "Jun 24, 2022", amount: 942, status: TableStatus.IN_PROGRESS},
  {manager: "Natali Craig", date: "Mar 10, 2022", amount: 881, status: TableStatus.REJECTED},
  {manager: "Olivia Rhye", date: "Nov 10, 2022", amount: 409, status: TableStatus.COMPLETED},
  {manager: "Orlando Diggs", date: "Dec 20, 2022", amount: 953, status: TableStatus.APPROVED},
  {manager: "Koray Okumus", date: "Jun 24, 2022", amount: 942, status: TableStatus.PENDING},
];

function Dashboard() {
  return (
    <main className={style.dashboard}>
      <Table title="Project Spendings" data={SPENDING_DATA} />
    </main>
  );
}

export default Dashboard;
