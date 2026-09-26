import "@/app/labs/lab2/tailwind/utilities.css";
import { FaUserCircle } from "react-icons/fa";

type Person = {
  name: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

const PEOPLE: Person[] = [
  {
    name: "Tony Stark",
    loginId: "001234561S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-10-01",
    totalActivity: "10:21:32",
  },
  {
    name: "Bruce Wayne",
    loginId: "001234562S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-11-02",
    totalActivity: "15:32:43",
  },
  {
    name: "Steve Rogers",
    loginId: "001234563S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-10-02",
    totalActivity: "23:32:43",
  },
  {
    name: "Natasha Romanoff",
    loginId: "001234564S",
    section: "S101",
    role: "TA",
    lastActivity: "2020-11-05",
    totalActivity: "13:23:34",
  },
  {
    name: "Thor Odinson",
    loginId: "001234565S",
    section: "S101",
    role: "STUDENT",
    lastActivity: "2020-12-01",
    totalActivity: "11:22:33",
  },
  {
    name: "Nick Fury",
    loginId: "001234566F",
    section: "S101",
    role: "FACULTY",
    lastActivity: "2020-11-15",
    totalActivity: "40:12:18",
  },
  // On your own: three more people I added
  {
    name: "Yi-Jhao Chen",
    loginId: "001234567S",
    section: "S102",
    role: "STUDENT",
    lastActivity: "2026-09-17",
    totalActivity: "08:14:02",
  },
  {
    name: "Mei Lin",
    loginId: "001234568S",
    section: "S102",
    role: "STUDENT",
    lastActivity: "2026-09-16",
    totalActivity: "06:45:10",
  },
  {
    name: "Wei Huang",
    loginId: "001234569T",
    section: "S102",
    role: "TA",
    lastActivity: "2026-09-15",
    totalActivity: "22:03:51",
  },
  // With AI: three sample roster rows
  {
    name: "Jane Sample",
    loginId: "001234570S",
    section: "S103",
    role: "STUDENT",
    lastActivity: "2026-09-10",
    totalActivity: "04:11:09",
  },
  {
    name: "Alex Sample",
    loginId: "001234571S",
    section: "S103",
    role: "STUDENT",
    lastActivity: "2026-09-11",
    totalActivity: "05:22:18",
  },
  {
    name: "Sam Sample",
    loginId: "001234572T",
    section: "S103",
    role: "TA",
    lastActivity: "2026-09-12",
    totalActivity: "09:33:27",
  },
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {PEOPLE.map((person) => (
            <tr key={person.loginId} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {person.name}
              </td>
              <td className="p-2">{person.loginId}</td>
              <td className="p-2">{person.section}</td>
              <td className="p-2">{person.role}</td>
              <td className="p-2">{person.lastActivity}</td>
              <td className="p-2">{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
