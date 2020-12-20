import React from "react";
import Layout from "../components/layout/Layout";


interface TableConfig {
  tableTitles: string[],
  data: string[][],
}


const tableConfig: TableConfig = {
  tableTitles: ["Poradie", "Tím", "Dosiahnutý čas", "Dátum", "Miestnosť"],
  data: [
    ["1.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["2.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["3.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["4.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["5.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["6.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["7.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["8.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["9.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
    ["10.", "Example team", "15:25", "12.12.2020", "Mission Impossible"],
  ],
};



export default () => (
  <Layout>
    <div className="container mx-auto pt-20">
      <h2 className="text-3xl lg:text-4xl alt-font px-3">Leaderboard</h2>
      <table className="table-auto text-left border-collapse mx-3">
        <thead>
          <tr>
            {tableConfig.tableTitles.map((label, i) => {
              return (
                <th key={i} className="p-5 py-2">
                  {label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableConfig.data.map((row, rowKey) => {
            return (
              <tr key={rowKey}>
                {row.map((cell, cellKey) => {
                  return (
                    <td
                      key={cellKey}
                      className="px-5 py-2  border border-grey-600"
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </Layout>
);
