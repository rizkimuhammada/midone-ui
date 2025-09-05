import { useRoutes } from "react-router";
import Checkbox from "../pages/checkbox";
import Accordion from "../pages/accordion";
import Alert from "../pages/alert";
import Avatar from "../pages/avatar";
import Box from "../pages/box";
import Badge from "../pages/badge";
import Breadcrumb from "../pages/breadcrumb";
import Button from "../pages/button";
import Carousel from "../pages/carousel";
import Chart from "../pages/chart";
import Combobox from "../pages/combobox";
import DataTable from "../pages/data-table";
import Datepicker from "../pages/datepicker";
import Dialog from "../pages/dialog";
import Input from "../pages/input";
import Menu from "../pages/menu";
import Pagination from "../pages/pagination";
import Popover from "../pages/popover";
import ProgressLinear from "../pages/progress-linear";
import ProgressCircular from "../pages/progress-circular";
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
        { path: "/", element: <Button /> },
        { path: "checkbox", element: <Checkbox /> },
        { path: "accordion", element: <Accordion /> },
        { path: "alert", element: <Alert /> },
        { path: "avatar", element: <Avatar /> },
        { path: "box", element: <Box /> },
        { path: "badge", element: <Badge /> },
        { path: "breadcrumb", element: <Breadcrumb /> },
        { path: "button", element: <Button /> },
        { path: "carousel", element: <Carousel /> },
        { path: "chart", element: <Chart /> },
        { path: "combobox", element: <Combobox /> },
        { path: "data-table", element: <DataTable /> },
        { path: "datepicker", element: <Datepicker /> },
        { path: "dialog", element: <Dialog /> },
        { path: "input", element: <Input /> },
        { path: "menu", element: <Menu /> },
        { path: "pagination", element: <Pagination /> },
        { path: "popover", element: <Popover /> },
        { path: "progress-linear", element: <ProgressLinear /> },
        { path: "progress-circular", element: <ProgressCircular /> },
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
  ];

  return useRoutes(routes);
}

export default Router;
