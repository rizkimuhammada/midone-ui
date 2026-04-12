import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/map.md?raw";
import vueMd from "../md/vue/map.md?raw";
import vanillaMd from "../md/vanilla/map.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
