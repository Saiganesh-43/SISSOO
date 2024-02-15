
import GridViewIcon from "@mui/icons-material/GridView";
// import Chat from "../messages/Chat";
import ListIcon from "@mui/icons-material/List";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ProposalManagement from "./TrainerProposalManagement/ProposalManagement";
import Requirements from "../components/Requirements/Requirements"
// import TrainingPrograms from "../components/TrainingManagement/TrainingManagement"
// import { Dashboard } from "@mui/icons-material";
import Dashboard from "./Dashboard/Dashboard";
import TrainingManagement from "../components/TrainingManagement/TrainingManagement";
import MyTrainings from "./TrainerMyTrainings/MyTrainings";
import TrainerProposalManagement from "./TrainerProposalManagement/TrainerProposalManagement";
// import Upcoming from "../components/Sections/Upcoming"
// import OngoingTraining from "./Sections/OnGoingTraining";
// import Completed from "./Sections/Completed";
// import Denied from "./Sections/Denied";
// import Feed from "../feed/Feed";
// import TrainerSettings from "../settings/TrainerSettings";
// import TrainerBillPayments from "../billpayments/TrainerBillPayments";

export const option = [
  {
    name: "Dashboard",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: <Dashboard/>
  },
  {
    name: "Feed",
    icon: <ListIcon sx={{ marginRight: "10px" }} />,
    show: <Requirements/>
  },
  {
    name: "TrainerMyTrainings",
    icon: <ListIcon sx={{ marginRight: "10px" }} />,
    show: <MyTrainings/>
  },
  {
    name: "TrainingManagement",
    icon: <RateReviewOutlinedIcon sx={{ marginRight: "10px" }} />,
    show: <TrainingManagement/>
  },
  {
    name: "Messages",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: ""
  },
  {
    name: "Proposal Management",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: <ProposalManagement/>
  },
  {
    name: "Trainer Proposal",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: <TrainerProposalManagement />
  },
  {
    name: "Settings",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: ""
  },
  {
    name: "Billing & Payments",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: ""
  },
  {
    name: "Help & Support",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: ""
  },
  {
    name: "Privacy & Security",
    icon: <GridViewIcon sx={{ marginRight: "10px" }} />,
    show: ''
  },
];