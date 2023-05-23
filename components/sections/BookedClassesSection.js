// import './table.css';

import React, { useEffect, useState } from "react";
import {
  callAllBookedClasses,
  callAllLocationsData,
  callAllPromoLeads,
  eventSignUp,
  fetchFeedbackFetch,
} from "../../services/authroutes";

import SectionHeader from "./partials/SectionHeader";
import { checkauthfailed } from "../../utils/AppConstant";
import classNames from "classnames";
import dynamic from "next/dynamic";
import { useRouter as useHistory } from "next/router";
import Calendar from "../elements/Calendar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// import Chart from "react-apexcharts";
const BookedClassesSection = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [data, setdata] = useState([]);
  const [promodata, setpromodata] = useState([]);
  const [locationData, setLocationData] = useState({});
  const history = useHistory();
  const [chartComp, setChartComp] = useState(null);
  const [allLeads, setAllLeads] = useState([]);

  const setIsLoading = props.setIsLoading;
  useEffect(() => {
    let body = {
      username: localStorage.getItem("username"),
    };
    setIsLoading(true);
    
    callAllLocationsData(body).then((res) => {
      const uniqueCities = [
        ...new Set(res.data.forms.databycity.map((item) => item.city)),
      ];
      const uniqueCounts = [
        ...new Set(res.data.forms.databycity.map((item) => item.count)),
      ];

      const uniquePath = [
        ...new Set(res.data.forms.databypath.map((item) => item.path)),
      ];
      const uniquePathCounts = [
        ...new Set(res.data.forms.databypath.map((item) => item.count)),
      ];

      let chartconfig1 = {
        options: {
          chart: {
            id: "city-chart",
          },
          xaxis: {
            categories: uniqueCities,
          },
        },
        series: [
          {
            name: "City Count",
            data: uniqueCounts,
          },
        ],
      };

      let chartconfig2 = {
        options: {
          chart: {
            id: "path-chart",
          },
          xaxis: {
            categories: uniquePath,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: "50%",
            rangeBarGroupRows: true,
          },
        },
        series: [
          {
            name: "Path Count",
            data: uniquePathCounts,
          },
        ],
      };

      setChartComp(
        <div className="container">
          <div className="chartAreaCity mb-16 mt-16">
            <p>By City</p>
            <Chart
              options={chartconfig1.options}
              series={chartconfig1.series}
              type="bar"
              height={400}
            />
          </div>
          <div className="chartAreaPath mb-16">
            <p>By Path</p>
            <Chart
              options={chartconfig2.options}
              series={chartconfig2.series}
              type="bar"
              height={400}
            />
          </div>
        </div>
      );
    });
    fetchAllFeedback();
    callAllBookedClasses(body)
      .then((res) => {
        setdata(res.data.forms || []);
        setIsLoading(false);
      })
      .catch((err) => {
        if (checkauthfailed(err, setIsLoading, history)) {
          return;
        }
        setIsLoading(false);
        history.push("/");
      });
      
      callAllPromoLeads(body)
      .then((res) => {
        setpromodata(res.data.forms || []);
        setIsLoading(false);
      })
      .catch((err) => {
        if (checkauthfailed(err, setIsLoading, history)) {
          return;
        }
        setIsLoading(false);
        history.push("/");
      });
  }, []);
  const outerClasses = classNames(
    "adminpanel section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Admin Panel",
  };

  async function fetchAllFeedback() {
    let body = {
      showAll: true,
      username: localStorage?.getItem("username"),
    };
    try {
      setIsLoading(true);
      let res = await fetchFeedbackFetch(body);
      setIsLoading(false);
      setAllLeads(res.data.forms);
      // setAllLeadsOriginal(res.data.forms);
    } catch (err) {
      setIsLoading(false);
      if (checkauthfailed(err, setIsLoading, history)) {
        return;
      }
      alert("Lead/User Not Found");
      return;
    }
  }

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content"
            from="adminPanel"
          />
          <div>
          {
            allLeads.length && <Calendar events={allLeads}/>
          }
          </div>
          <div className="table-responsive">
            <h2 style={{ color: "#5658dd", margin: "0" }}>Promo Leads</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Course</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {promodata.map((item, index) => (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.course}</td>
                    <td>{item.src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <h2 style={{ color: "#5658dd", margin: "0" }}>Booked Classes</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Course</th>
                  <th>Subject</th>
                  <th>Preferred Call Time</th>
                  <th>Special Requirement</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.name}</td>
                    <td>{item.mobile}</td>
                    <td>{item.course}</td>
                    <td>{item.subject}</td>
                    <td>{(item?.formattedDate || "")+" "+(item?.time || "")}</td>
                    <td>{item.specialRequirement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-responsive">
            <h2 style={{ color: "#5658dd", margin: "0" }}>Location Data</h2>
            <p style={{ color: "#5658dd", margin: "0" }}>
              *This data is only valid for those users who have given permission
              to access location on their device.
            </p>
            {chartComp}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookedClassesSection;
