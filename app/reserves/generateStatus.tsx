/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import fa from "app/lib/fa.json";

const GenerateStatus: React.FC = () => {
  const [serverOrderStatus, setServerOrderStatus] = useState("pending");
  const [orderStatus, setOrderStatus] = useState("pending");

  // Function to simulate a server request to get the latest order status
  const simulateServerRequest = (currentStatus: string) => {
    // Simulate different order statuses (pending -> in-process -> delivery -> delivered)
    switch (currentStatus) {
      case "pending":
        return "in-process";
      case "in-process":
        return "delivery";
      case "delivery":
        return "delivered";
      case "delivered":
        return "pending"; // Reset to pending after delivered for demonstration purposes
      default:
        return currentStatus;
    }
  };

  // Effect to update order status every 5 seconds
  useEffect(() => {
    const statusUpdateInterval = setInterval(() => {
      // Update the order status
      orderStatus !== serverOrderStatus && setOrderStatus(serverOrderStatus);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(statusUpdateInterval);
  }, [serverOrderStatus, orderStatus]);

  // Effect to automatically change the order status every 30 seconds
  useEffect(() => {
    const autoChangeInterval = setInterval(() => {
      // Simulate a server request to automatically change the order status
      const newStatus = simulateServerRequest(serverOrderStatus);

      // Update the server order status
      setServerOrderStatus(newStatus);
    }, 30000);

    // Cleanup interval on component unmount
    return () => clearInterval(autoChangeInterval);
  }, [serverOrderStatus]);

  return <span>{(fa.reserves as Record<string, string>)[orderStatus]}</span>;
};

export default GenerateStatus;
