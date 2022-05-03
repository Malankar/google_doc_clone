import { Button } from "@material-tailwind/react";
import Icon from "@material-tailwind/react";
import { useRouter } from "next/router";
function DocumentRow ({ id, fileName, date }) {
  return (
    <div>
      <Icon name="article" size="3xl" color="blue" />
      <p className=" w-10 flex-grow truncate pl-5 pr-10">{fileName}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()} </p>
    </div>
  );
};
export { DocumentRow as default };