import React from "react";
import '../OurServices/Services.css'
function Services() {
  const serviceList = [
    {
      heading: "Mobile Device Repair:",
      point: [
        "Screen repair and replacement",
        "Battery replacement",
        "Water damage repair",
        "Charging port repair",
        "Software troubleshooting and repair",
      ],
    },
    {
      heading: "Mobile Device Accessories:",
      point: [
        "Cases and screen protectors",
        "Chargers and cables",
        "Headphones and earbuds",
        "Power banks and wireless chargers",
      ],
    },
    {
      heading: "Mobile Device Unlocking:",
      point: [
        "Unlocking services for locked phones, enabling them to work with different carriers",
      ],
    },
    {
      heading: "Mobile Carrier Services:",
      point: [
        "Cellular plans and contracts",
        "Mobile data plans",
        "Roaming services",
      ],
    },
    {
      heading: "Mobile Device Recycling:",
      point: [
        "Services for recycling and disposing of old mobile devices in an environmentally friendly way",
      ],
    },
    {
      heading: "Mobile Device Accessories Repair:",
      point: [
        "Repair services for accessories like headphones, earbuds, and chargers",
      ],
    },
    {
      heading: "",
      point: [
        "Screen repair and replacement",
        "Battery replacement",
        "Water damage repair",
        "Charging port repair",
        "Software troubleshooting and repair",
      ],
    },
  ];

  return (
    <>
    <div className="service-main-top">
    { serviceList.map((lists)=>{
      return (
      <div className="service-main">
      <div className="service-heading">{lists.heading}</div>
      {lists.point.map((listPoints)=>{

        return(
<div className="service-list"><div className="listDot">*</div>{listPoints}</div>
        )
      })}
    </div>
    )
    })
      }
      </div>
    </>
  );
}

export default Services;
