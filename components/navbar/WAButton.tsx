import Buttons from "@/components/global/Buttons";
import { fetchWhatsapp } from "@/utils/actions";

async function WAButton() {
  const info = await fetchWhatsapp();
  const phone = info.phone;
  const message = info.messageContact;

  return <Buttons type="whatsapp" phone={phone} message={message} />;
}
export default WAButton;
