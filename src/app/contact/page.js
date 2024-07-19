import { Contact } from "@/components/Contact";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({ subsets: ["latin"] });

const ContactPage = () => {
  return (
    <div className={workSans.className}>
      <Contact/>
    </div>
  );
};
export default ContactPage;
