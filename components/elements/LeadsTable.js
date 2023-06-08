import React, { useRef, useState } from "react";

import ReactPaginate from "react-paginate";
import { Table } from "reactstrap";
import { removeCountryCodeAndSpaces } from "../../utils/AppConstant";

const LeadsTable = ({ allLeads, tableRef, feedback, fetchFeedback }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 10;

  const getCreationDate = (id) => {
    var timestamp = id.toString().substring(0, 8);

    var date = new Date(parseInt(timestamp, 16) * 1000);
    var month = date.getUTCMonth() + 1; //months from 1-12
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();

    let newdate = day + "/" + month + "/" + year;

    return newdate;
  };

  function flattenLeadsArray(allLeads) {
    const flattenedLeads = [];

    allLeads.forEach((lead) => {
      const flattenedLead = {};

      function flattenObject(obj, prefix = "") {
        for (const key in obj) {
          if (key == "date") continue;
          if (obj.hasOwnProperty(key)) {
            const propName = key;
            const value = obj[key];

            if (
              typeof value === "object" &&
              value !== null &&
              !Array.isArray(value)
            ) {
              flattenObject(value, propName);
            } else {
              flattenedLead[propName] = value;
            }
          }
        }
      }

      flattenObject(lead);
      flattenedLeads.push(flattenedLead);
    });

    for (let i = 0; i < flattenedLeads.length; i++) {
      flattenedLeads[i].creationDate = getCreationDate(flattenedLeads[i]._id);
      flattenedLeads[i].phoneNumber = removeCountryCodeAndSpaces(
        flattenedLeads[i].phoneNumber
      );
    }
    for (let i = 0; i < flattenedLeads.length; i++) {
      //delete flattenedLeads[i]._id;
      delete flattenedLeads[i].date;
      delete flattenedLeads[i].roles;
    }

    return flattenedLeads;
  }

  let formattedallLeads = flattenLeadsArray(allLeads);

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

  const getHighlightedRow = (remarks) => {
    if (remarks?.match(/enrolled/i)) {
      return "enrolled";
    } else if (remarks?.match(/booked/i)) {
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

  let headersfinal = {
    creationDate: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    relationship: "",
    selectedCourse: "",
    topicsOfInterest: "",
    preferredCommunication: "",
    geographicLocation: "",
    howTheyHeard: "",
    age: "",
    gender: "",
    educationalBackground: "",
    remarks: "",
    remarks2: "",
    formattedDate: "",
    time: "",
  };

  const currentPageData = formattedallLeads
    .slice(offset, offset + PER_PAGE)
    .map((item, index) => {
      return (
        <>
          <tr
            key={`${index}__leads`}
            className={`${getHighlightedRow(item.remarks)}`}
          >
            <td>{index + 1}</td>
            {/* {Object.values(item).map((val, dataindex) => {
              // if(val._isAMomentObject){
              //   return;
              // } */}
            {Object.keys(headersfinal).map((header, dataindex) => {
              return (
                <td
                  style={
                    dataindex == 2 || dataindex == 0
                      ? { color: "brown", fontWeight: "bold" }
                      : {}
                  }
                >
                  {dataindex == 3 ? (
                    <div style={{ display: "flex" }}>
                      <i
                        onClick={() => {
                          fetchFeedback(item._id);
                        }}
                        style={{ marginRight: "2px" }}
                        className="fa fa-edit"
                      ></i>
                      <a
                        style={{ color: "blue" }}
                        href={`tel:${getTdValue(item[header])}`}
                      >
                        {getTdValue(item[header])}
                      </a>
                    </div>
                  ) : (
                    getTdValue(item[header])
                  )}
                </td>
              );
            })}

            {/* })} */}
          </tr>
        </>
      );
    });

  const pageCount = Math.ceil(formattedallLeads.length / PER_PAGE);
  let demoheaders = {
    "Demo Date": "1",
    formattedDate: "1",
    "Demo Time": "1",
  };

  let feedbackdata = { ...feedback };
  let headers = { ...headersfinal };
  delete headers["date"];
  delete feedbackdata.userdata.date;
  return (
    <>
      <Table hover responsive innerRef={tableRef}>
        <thead>
          <tr key={"header"}>
            <th>Count</th>
            {Object.keys({
              ...headersfinal,
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
