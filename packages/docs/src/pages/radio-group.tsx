import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/radio-group.md?raw";
import vueMd from "../md/vue/radio-group.md?raw";
import vanillaMd from "../md/vanilla/radio-group.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
