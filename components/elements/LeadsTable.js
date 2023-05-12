import React, { useRef, useState } from "react";

import ReactPaginate from "react-paginate";
import { Table } from "reactstrap";

const LeadsTable = ({ allLeads, tableRef, feedback, fetchFeedback }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 10;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const getTdValue = (val) => {
    if (typeof val == "object") {
      return (
        <div>
          <span style={{ color: "brown" }}>Comment:</span>
          {val.comment} <span style={{ color: "brown" }}>Rating:</span>
          {val.rating}
        </div>
      );
    } else {
      return val || "N/A";
    }
  };
  const offset = currentPage * PER_PAGE;
  const getCreationDate = (id) => {
    var timestamp = id.toString().substring(0, 8);

    var date = new Date(parseInt(timestamp, 16) * 1000);
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;

    return newdate;
  };

  const getHighlightedRow = (remarks) => {
    if (remarks?.match(/enrolled/i)) {
      return "enrolled";
    } else if (remarks?.match(/booked/)) {
      return "booked";
    }
    let arr = [
      "call back",
      "reachable",
      "not connected",
      "unable to connect",
      "unable to contact",
    ];
    for (let i = 0; i < arr.length; i++) {
      if (remarks?.toLocaleLowerCase()?.match(arr[i].toLocaleLowerCase())) {
        return "highlighted";
      }
    }
  };

  const currentPageData = allLeads
    .slice(offset, offset + PER_PAGE)
    .map((item, index) => (
      <>
        <tr
          key={`${index}__leads`}
          className={`${getHighlightedRow(item.userdata.remarks)}`}
        >
          <td>{index + 1}</td>
          <td style={{ color: "black", fontWeight: "bold" }}>
            {getCreationDate(item._id)}
          </td>
          {Object.values({
            ...item?.userdata,
            ...(item?.postdemo || {}),
          }).map((val, dataindex) => {
            // if(val._isAMomentObject){
            //   return;
            // }
            delete item.userdata.date;
            return (
              <td
                style={
                  dataindex == 2 || dataindex == 0
                    ? { color: "brown", fontWeight: "bold" }
                    : {}
                }
              >
                {dataindex == 1 ? (
                  <div style={{ display: "flex" }}>
                    <i
                      onClick={() => {
                        fetchFeedback(val);
                      }}
                      style={{ marginRight: "2px" }}
                      className="fa fa-edit"
                    ></i>
                    <a
                      style={{ color: "blue" }}
                      href={`tel:${getTdValue(val)}`}
                    >
                      {getTdValue(val)}
                    </a>
                  </div>
                ) : (
                  getTdValue(val)
                )}
              </td>
            );
          })}
        </tr>
      </>
    ));

  const pageCount = Math.ceil(allLeads.length / PER_PAGE);
  let demoheaders = {
    "Demo Date": "1",
    formattedDate: "1",
    "Demo Time": "1",
  };

  let feedbackdata = { ...feedback };
  let headers = { ...feedback.userdata };
  delete headers["date"];
  delete feedbackdata.userdata.date;
  return (
    <>
      <Table hover responsive innerRef={tableRef}>
        <thead>
          <tr key={"header"}>
            <th>Count</th>
            <th>Date</th>
            {Object.keys({
              ...feedbackdata.userdata,
              ...feedbackdata.postdemo,
            }).map((key) => (
              <th
                style={{
                  textTransform: "capitalize",
                  ...(demoheaders[key] ? { color: "brown" } : {}),
                }}
              >
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{currentPageData}</tbody>
      </Table>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
      />
    </>
  );
};

export default LeadsTable;
