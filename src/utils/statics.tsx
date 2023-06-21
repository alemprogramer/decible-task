import { Button } from "antd";

export const dataSource = [
  {
    callType: "Voice Mail",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Answered",
    direction: "Inbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Missed",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Voice Mail",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Answered",
    direction: "Inbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Missed",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Voice Mail",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
  {
    callType: "Answered",
    direction: "Inbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Unarchive",
  },
  {
    callType: "Missed",
    direction: "Outbound",
    duration: "80 minutes 23 seconds",
    durationSeconds: "(4823 seconds)",
    from: "+33148288105",
    to: "+33166114113",
    via: "+33148288105",
    createdAt: "12-082022",
    status: "Archived",
  },
];

export const columns = [
  // 1st column
  {
    title: "CALL TYPE",
    dataIndex: "call_type",
    key: "call_type",
    render: (text: any, record: any) => (
      <span
        style={{
          color:
            record.call_type.toLowerCase() === "Missed".toLowerCase()
              ? "#DB6D81"
              : record.call_type.toLowerCase() === "Voice Mail".toLowerCase()
              ? "#566596"
              : "#79E0D6",
        }}
      >
        {text}
      </span>
    ),
  },
  // 2nd column
  {
    title: "DIRECTION",
    dataIndex: "direction",
    key: "direction",
    render: (text: any) => <span style={{ color: "#566596" }}>{text}</span>,
  },
  {
    title: "DURATION",
    dataIndex: "duration",
    key: "duration",
    render: (text: any, record: any) => (
      <>
        <p>{`${Math.floor(text / 60)} minutes and ${text % 60} seconds`}</p>
        <p style={{ color: "#566596" }}>{`(${text} seconds)`}</p>
      </>
    ),
  },
  {
    title: "FORM",
    dataIndex: "from",
    key: "from",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "TO",
    dataIndex: "to",
    key: "to",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "VIA",
    dataIndex: "via",
    key: "via",
    render: (text: any) => <span>{text}</span>,
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    key: "created_at",
    render: (text: any) => <span>{`${new Date(text).toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" }).replace(/\//g, '-')}`}</span>,
  },
  {
    title: "STATUS",
    dataIndex: "is_archived",
    key: "is_archived",
    render: (text: any, record: any) => (

      <Button
        style={{
          color: !text ? "#9D9E9D" : "#63DBD0",
          background:
            !text ? "#EEEEEE" : "#EDFBFA",
          border: 0,
        }}
      >
        {text ? 'Archived' : 'unarchive'}
      </Button>
    ),
  },
  {
    title: "ACTIONS",
    key: "actions",
    render: () => (
      <Button
        style={{
          color: "#ffffff",
          background: "#000000",
          border: 0,
        }}
        className=""
      >
        Add Note
      </Button>
    ),
  },
];
