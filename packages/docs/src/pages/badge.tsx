import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/badge.md?raw";
import vueMd from "../md/vue/badge.md?raw";
import vanillaMd from "../md/vanilla/badge.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
