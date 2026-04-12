import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/progress-circular.md?raw";
import vueMd from "../md/vue/progress-circular.md?raw";
import vanillaMd from "../md/vanilla/progress-circular.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
