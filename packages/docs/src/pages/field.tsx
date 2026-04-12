import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/field.md?raw";
import vueMd from "../md/vue/field.md?raw";
import vanillaMd from "../md/vanilla/field.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
