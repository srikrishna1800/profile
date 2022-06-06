import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
           <h3 className="vertical-timeline-element-title">
          JNTUK, Bachelor's Degree </h3>
          <h4 className="vertical-timelinee-lement-subtitle">
          Kakinada, India
          </h4>
          <p>Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Developer, LV Prasad Eye Hospital
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, India
          </h4>

          <p> Worked extensively on Hospital Management System developed in-house</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          University of Southern Queensland
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Queensland, AUS
          </h4>
          <p>Master of Information Technology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Gradduate Developer - GO1
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Brisbane, AUS
          </h4>
          <p>
            Helped the team launch a major features by working in the front end.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;