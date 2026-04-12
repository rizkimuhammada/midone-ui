import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/native-select.md?raw";
import vueMd from "../md/vue/native-select.md?raw";
import vanillaMd from "../md/vanilla/native-select.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
