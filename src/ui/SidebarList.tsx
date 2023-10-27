import Button from "./Button";
import CreateBoardBtn from "./CreateBoardBtn";
import boardIcon from "/assets/board-icon.svg";

const SidebarList = () => {
  return (
    <div>
      <h6 className="text-lightGray font-bold tracking-wider p-5">
        ALL BOARDS <span>(3)</span>
      </h6>
      <ul>
        <li>
          <Button img={boardIcon} text="Platform Launch" isActive={true} />
        </li>
        <li>
          <Button img={boardIcon} text="Marketing Plan" isActive={false} />
        </li>
        <li>
          <Button img={boardIcon} text="Roadmap" isActive={false} />
        </li>
      </ul>
      <CreateBoardBtn />
    </div>
  );
};
export default SidebarList;
