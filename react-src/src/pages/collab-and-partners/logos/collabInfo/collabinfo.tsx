import React, { useState } from "react";
import "./collabinfo.css";
import { Button, Col, Row } from "react-bootstrap";

interface CollabInfoProps {
  collabs: {
    id: number;
    title: string;
    info: string;
  }[];
}

const CollabInfo: React.FC<CollabInfoProps> = ({ collabs }) => {
  const [activeCollabId, setActiveCollabId] = useState<number | null>(
    collabs.length > 0 ? collabs[0].id : null
  );

  const handleButtonClick = (id: number) => {
    setActiveCollabId(id);
  };

  const activeCollab = collabs.find((collab) => collab.id === activeCollabId);

  return (
    <Row className="m-0 px-md-5 px-3 ">
      <Col
        sm={3}
        className="d-flex flex-column justify-content-center pe-md-5 ps-md-0 "
      >
        {collabs.map((collab, index) => (
          <React.Fragment key={collab.id}>
            <ul className="menu-list ">
              {" "}
              <li key={index} className="menu-item">
                {" "}
                <Button
                  className={`w-100 p-3 ${
                    activeCollabId === collab.id
                      ? "collab-btn-active"
                      : " collab-btn"
                  }`}
                  variant="primary"
                  onClick={() => handleButtonClick(collab.id)}
                >
                  {collab.title}
                </Button>
              </li>
            </ul>
          </React.Fragment>
        ))}
      </Col>
      <Col
        sm={9}
        className="d-flex justify-content-end align-items-center mt-5 mt-md-0"
      >
        <div className="info-container p-4">
          <h1 className="">
            {activeCollab ? activeCollab.title : "Select a collbration"}
          </h1>
          <div
            className="mt-3 mb-4 mx-auto"
            style={{
              borderBottom: "1px solid rgb(0,166,162)",
              width: "10%",
            }}
          ></div>
          <div className="text-box ">
            {activeCollab
              ? activeCollab.info
                  .split("\n\n")
                  .map((paragraph, index) => <p key={index}>{paragraph}</p>)
              : ""}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CollabInfo;
