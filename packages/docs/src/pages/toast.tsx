import DocPage from "@/components/docs/DocPage";
import reactMd from "../md/react/toast.md?raw";
import vueMd from "../md/vue/toast.md?raw";
import vanillaMd from "../md/vanilla/toast.md?raw";

function Main() {
  return <DocPage reactMd={reactMd} vueMd={vueMd} vanillaMd={vanillaMd} />;
}

export default Main;
