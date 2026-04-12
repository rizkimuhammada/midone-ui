import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/combobox.md?raw";
import vueMd from "../md/vue/combobox.md?raw";
import vanillaMd from "../md/vanilla/combobox.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
