import getOneMail from "../../Netowrk/getOneMail";
import showSingleMailDetailToDom from "../MailDetail";

async function showMailDetail(detail) {
  const mailDetailId = localStorage.getItem("activeIndex");

  const { data, status } = await getOneMail(mailDetailId);
  if (status === 200)
    showSingleMailDetailToDom(data?.body, detail, mailDetailId);
}

export default showMailDetail;
