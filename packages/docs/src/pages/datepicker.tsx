import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/datepicker.md?raw";
import vueMd from "../md/vue/datepicker.md?raw";
import vanillaMd from "../md/vanilla/datepicker.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
