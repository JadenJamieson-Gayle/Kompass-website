import React, { useState, useRef } from "react";
import "./QA.css";
import { Card, Col, Row } from "react-bootstrap";
import PlusIcon from "./plus-icon.svg";

interface DataItem {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  data: DataItem[];
}

const QA: React.FC<Props> = ({ data }) => {
  const [openRows, setOpenRows] = useState<number[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleRowClick = (index: number, id: number) => {
    setOpenRows(
      (prevOpenRows) =>
        prevOpenRows.includes(id)
          ? prevOpenRows.filter((rowId) => rowId !== id) // Close the row if it's open
          : [...prevOpenRows, id] // Open the row if it's closed
    );

    if (buttonRefs.current[index]) {
      buttonRefs.current[index]!.click();
    }
  };

  return (
    <>
      {data.map((item, index) => (
        <Row
          key={item.id}
          className="d-flex align-self-start w-100"
          onClick={() => handleRowClick(index, item.id)}
        >
          <div className="w-100 text-start accordion-row">
            <Row
              className={`d-flex flex-row justify-content-between align-items-center ${
                openRows.includes(item.id) ? "pt-5" : "py-5"
              }  px-0`}
            >
              {" "}
              <Col>
                <h5 className="m-0" id={`${item.id}`}>
                  <strong>{item.question}</strong>
                </h5>
              </Col>
              <Col className="d-flex justify-content-end">
                <button
                  className="btn btn-outline-none"
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => handleRowClick(index, item.id)}
                >
                  <img
                    src={PlusIcon}
                    height={"20px"}
                    width={"20px"}
                    alt="Plus Icon"
                  />
                </button>
              </Col>
            </Row>

            {openRows.includes(item.id) && (
              <Row className="mt-3 ">
                <Col className="pe-5 me-5">
                  <p>{item.answer}</p>
                </Col>
              </Row>
            )}
          </div>
        </Row>
      ))}
    </>
  );
};

export default QA;
