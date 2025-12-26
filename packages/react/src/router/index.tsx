import { Navigate, useRoutes } from "react-router";
import Home from "../pages/home";
import Docs from "../pages/docs";
import Introduction from "../pages/accordion";
import HowToUse from "../pages/how-to-use";
import Accordion from "../pages/accordion";
import Alert from "../pages/alert";
import Avatar from "../pages/avatar";
import Badge from "../pages/badge";
import Box from "../pages/box";
import Breadcrumb from "../pages/breadcrumb";
import Button from "../pages/button";
import Carousel from "../pages/carousel";
import Chart from "../pages/chart";
import Checkbox from "../pages/checkbox";
import Combobox from "../pages/combobox";
import Datatable from "../pages/data-table";
import Datepicker from "../pages/datepicker";
import Dialog from "../pages/dialog";
import Input from "../pages/input";
import Menu from "../pages/menu";
import Pagination from "../pages/pagination";
import Popover from "../pages/popover";
import ProgressCircular from "../pages/progress-circular";
import ProgressLinear from "../pages/progress-linear";
import RadioGroup from "../pages/radio-group";
import Select from "../pages/select";
import Sheet from "../pages/sheet";
import Slider from "../pages/slider";
import Switch from "../pages/switch";
import Table from "../pages/table";
import Tabs from "../pages/tabs";
import Textarea from "../pages/textarea";
import Toast from "../pages/toast";
import Tooltip from "../pages/tooltip";
import App from "../App";

function Router() {
  const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/docs",
          element: <Docs />,
          children: [
            { path: "", element: <Navigate to="/docs/introduction" replace /> },
            { path: "introduction", element: <Introduction /> },
            { path: "how-to-use", element: <HowToUse /> },
            { path: "accordion", element: <Accordion /> },
            { path: "alert", element: <Alert /> },
            { path: "avatar", element: <Avatar /> },
            { path: "badge", element: <Badge /> },
            { path: "box", element: <Box /> },
            { path: "breadcrumb", element: <Breadcrumb /> },
            { path: "button", element: <Button /> },
            { path: "carousel", element: <Carousel /> },
            { path: "chart", element: <Chart /> },
            { path: "checkbox", element: <Checkbox /> },
            { path: "combobox", element: <Combobox /> },
            { path: "data-table", element: <Datatable /> },
            { path: "datepicker", element: <Datepicker /> },
            { path: "dialog", element: <Dialog /> },
            { path: "input", element: <Input /> },
            { path: "menu", element: <Menu /> },
            { path: "pagination", element: <Pagination /> },
            { path: "popover", element: <Popover /> },
            { path: "progress-circular", element: <ProgressCircular /> },
            { path: "progress-linear", element: <ProgressLinear /> },
            { path: "radio-group", element: <RadioGroup /> },
            { path: "select", element: <Select /> },
            { path: "sheet", element: <Sheet /> },
            { path: "slider", element: <Slider /> },
            { path: "switch", element: <Switch /> },
            { path: "table", element: <Table /> },
            { path: "tabs", element: <Tabs /> },
            { path: "textarea", element: <Textarea /> },
            { path: "toast", element: <Toast /> },
            { path: "tooltip", element: <Tooltip /> },
          ],
        },
      ],
    },
  ];

  return useRoutes(routes);
}

export default Router;
