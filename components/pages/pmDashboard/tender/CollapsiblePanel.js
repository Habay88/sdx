import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";

function CollapsiblePanel({ children, ...props }) {
  const { title, collapse } = props;
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-right");
  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  const animate = collapse => {
    setIsCollapse(collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
      ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  useEffect(() => {
    animate(!collapse);
  }, [collapse]);

  return (
    <div className="coll-panel">
      <button
        type="button"
        className="coll-panel-btn  btn-block text-left "
        onClick={() => toggle()}
      >
        <i className={icon} /> {title}
      </button>
      <Collapse className="border text-left p-2" isOpen={isCollapse}>
        {children}
      </Collapse>
    </div>
  );
}

CollapsiblePanel.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsiblePanel;
