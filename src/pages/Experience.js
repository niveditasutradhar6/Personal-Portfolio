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
          date="2005 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Maria's Public School,Guwahati,Assam
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          Elementary School
        </h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Gurukul Grammar Senior Secondary School, Guwahati,Assam
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            High School
          </h4>

          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kalinga Institute Of Industrial Technology, Bhubaneswar,Odisha
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science And Engineering</p>
        </VerticalTimelineElement>

        

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2023- June 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          HighRadius Corporation
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Product and Consulting Intern
          </h4>
          <p>Worked on requirement gathering and gap analysis to identify the underlying reasons of the company's issues, and made use of my communication abilities to effectively summarise the data in insightful presentations.

</p>
          <p> Used SQL and MS Excel/Google Sheets to analyse various datasets using charts and visualisations and solved business case studies and guessestimates. </p>
          

        
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023- July 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Indian Oil Corporation Limited,Guwahati,Assam
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Information Systems Trainee
          </h4>
          <p>Worked on a vehicle/device locator system that allows to retrieve real time location of the vehicle or device using geolocation API and plotting it on Google Maps using API key. 

</p>
          
          

        
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2023- July 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          AICTE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            AWS Data Analytics Intern
          </h4>
          <p>Learnt about several topics, such as data extraction, transformation, loading (ETL), data warehousing, data visualization, machine learning snd AWS tools like Amazon S3, Sagemaker, Bokeh, Athena, Glue, Redshift. The goal is to familiarize myslef with the AWS ecosystem and equip myself with the skills needed to work with data in the cloud.

</p>
          
          

        
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
