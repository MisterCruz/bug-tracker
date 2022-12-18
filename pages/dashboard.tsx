import axios from "axios";
import { GetServerSideProps } from "next";
import { AppProps } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { Key } from "react";
import NewProject from "../components/NewProject";

const Dashboard = ({ projectList }: AppProps) => {
  return (
    <div className="text-[#1f2937]">
      <div className="overflow-x-auto relative border-solid border-2 border-gray-200 shadow-md shaddow-inner dark:bg-gray-700 dark:text-gray-400">
        <div className="flex justify-between pb-5 pt-5 pr-5">
          <h1 className="font-bold float-left pl-5">Projects</h1>
          <NewProject />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Project
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Contributors
              </th>
              <th scope="col" className="py-3 px-6">
                Story Points
              </th>
            </tr>
          </thead>

          <tbody>
            {projectList.map(
              (project: { _id: Key; title: string | number; desc: string }) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={project._id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    key={project._id}
                  >
                    <Link href={`/projects/${project._id}`}>
                      {project.title}
                    </Link>
                  </th>
                  <td className="py-4 px-6">{project.desc}</td>
                  <td className="py-4 px-6">Rolando</td>
                  <td className="py-4 px-6">5</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(`http://localhost:3000/api/projects`);
  return {
    props: {
      projectList: res.data,
    },
  };
};

export default Dashboard;
