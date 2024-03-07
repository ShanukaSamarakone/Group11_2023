/* eslint-disable react/prop-types */
// columns.js
export const COLUMNS = [
    {
      Header: "Rank",
      accessor: (row, index) => index + 1,
    },
    {
      Header: "User",
      accessor: "user",
    //   Cell: ({ row }) => (
    //     <div style={{ display: "flex", alignItems: "center" }}>
    //       <img
    //         src={row.original.profilePicture}
    //         alt={row.original.user}
    //         style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
    //       />
    //       <span>{row.original.user}</span>
    //     </div>
    //   )
    },
    {
      Header: "Score",
      accessor: "score",
    },
  ];