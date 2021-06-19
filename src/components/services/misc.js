const misc = {
  paymentStatus(status) {
    return status === "1" ? "Received" : "Waiting...";
  },
  paymentRefunded(status) {
    return status === "1" ? "Refunded" : "Pending";
  },

  statusColor(status) {
    return status === "1" ? "badge-success" : "badge-warning";
  },
};

export default misc;
