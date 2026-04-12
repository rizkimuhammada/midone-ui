import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/progress-linear.md?raw";
import vueMd from "../md/vue/progress-linear.md?raw";
import vanillaMd from "../md/vanilla/progress-linear.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
