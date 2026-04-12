import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/chart.md?raw";
import vueMd from "../md/vue/chart.md?raw";
import vanillaMd from "../md/vanilla/chart.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
